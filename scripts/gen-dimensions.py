"""Generate data/asset-dimensions.json — {"/projects/<slug>/<file>": [w, h]}.

Run after scripts/build-assets.py whenever published assets change.
"""

import json
import os
import sys

from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT = os.path.join(REPO, "public", "projects")

out = {}
for slug in sorted(os.listdir(ROOT)):
    d = os.path.join(ROOT, slug)
    if not os.path.isdir(d):
        continue
    for f in sorted(os.listdir(d)):
        if not f.lower().endswith((".jpg", ".png", ".webp")):
            continue
        with Image.open(os.path.join(d, f)) as im:
            out[f"/projects/{slug}/{f}"] = [im.width, im.height]

dst = os.path.join(REPO, "data", "asset-dimensions.json")
with open(dst, "w", encoding="utf-8") as fh:
    json.dump(out, fh, indent=1)
print("wrote", dst, len(out), "entries")
