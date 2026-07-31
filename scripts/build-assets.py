"""Build web-optimized publishing assets from original sources.

Reads asset-manifest.json and writes into public/projects/<slug>/.
Originals are never modified. Re-encoding strips EXIF metadata.

Usage:  python scripts/build-assets.py            (skip up-to-date files)
        python scripts/build-assets.py --force    (rebuild everything)

Requires: pillow, pymupdf  (pip install pillow pymupdf)
"""

import json
import os
import sys
import unicodedata

from PIL import Image

try:
    import fitz  # PyMuPDF
except ImportError:
    fitz = None

sys.stdout.reconfigure(encoding="utf-8")
Image.MAX_IMAGE_PIXELS = None

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FORCE = "--force" in sys.argv

with open(os.path.join(REPO, "asset-manifest.json"), encoding="utf-8") as fh:
    manifest = json.load(fh)

SOURCE_ROOT = manifest["sourceRoot"]

# Filenames on disk may be NFD-normalized (macOS origin); build a lookup.
def resolve_source(rel: str) -> str:
    """Resolve a manifest source path against the disk, tolerating NFC/NFD."""
    if rel.startswith("repo:"):
        return os.path.join(REPO, rel[5:])
    direct = os.path.join(SOURCE_ROOT, rel)
    if os.path.exists(direct):
        return direct
    # walk and match by NFC-normalized relative path
    want = unicodedata.normalize("NFC", rel.replace("\\", "/"))
    for root, _dirs, files in os.walk(SOURCE_ROOT):
        for f in files:
            p = os.path.join(root, f)
            r = unicodedata.normalize("NFC", os.path.relpath(p, SOURCE_ROOT).replace("\\", "/"))
            if r == want:
                return p
    raise FileNotFoundError(rel)


def trim_border(im: Image.Image, tol: int = 8) -> Image.Image:
    """Crop a uniform near-white border. Used where a render was exported
    inside a presentation sheet and needs to stand on its own."""
    rgb = im.convert("RGB")
    w, h = rgb.size
    px = rgb.load()

    def row_blank(y):
        return all(all(c >= 255 - tol for c in px[x, y]) for x in range(0, w, max(1, w // 200)))

    def col_blank(x):
        return all(all(c >= 255 - tol for c in px[x, y]) for y in range(0, h, max(1, h // 200)))

    top = 0
    while top < h - 1 and row_blank(top):
        top += 1
    bottom = h - 1
    while bottom > top and row_blank(bottom):
        bottom -= 1
    left = 0
    while left < w - 1 and col_blank(left):
        left += 1
    right = w - 1
    while right > left and col_blank(right):
        right -= 1
    return im.crop((left, top, right + 1, bottom + 1))


def save_jpeg(im: Image.Image, dst: str, kind: str) -> None:
    im = im.convert("RGB")
    quality = 88 if kind in ("drawing", "diagram", "board") else 82
    im.save(dst, "JPEG", quality=quality, optimize=True, progressive=True)


built = skipped = 0
for a in manifest["assets"]:
    out_dir = os.path.join(REPO, "public", "projects", a["project"])
    os.makedirs(out_dir, exist_ok=True)
    dst = os.path.join(out_dir, a["out"])
    src = resolve_source(a["source"])
    if not FORCE and os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src):
        skipped += 1
        continue

    if a.get("copy"):
        # already web-optimized — byte copy
        with open(src, "rb") as s, open(dst, "wb") as d:
            d.write(s.read())
    elif "pdfPage" in a:
        if fitz is None:
            raise RuntimeError("pymupdf required for PDF assets")
        doc = fitz.open(src)
        page = doc[a["pdfPage"]]
        rect = page.rect
        clip = fitz.Rect(*a["cropRectPt"]) if "cropRectPt" in a else rect
        scale = a["targetWidth"] / clip.width
        pix = page.get_pixmap(matrix=fitz.Matrix(scale, scale), clip=clip)
        img = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
        save_jpeg(img, dst, a["kind"])
        doc.close()
    else:
        with Image.open(src) as im:
            # Some sheets were exported rotated; publish them upright.
            if a.get("rotate"):
                im = im.rotate(-a["rotate"], expand=True)
            if a.get("trim"):
                im = trim_border(im)
            w = a.get("maxWidth", 2400)
            if im.width > w:
                im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
            save_jpeg(im, dst, a["kind"])
    built += 1
    print("built", a["project"] + "/" + a["out"])

print(f"done — {built} built, {skipped} up-to-date")
