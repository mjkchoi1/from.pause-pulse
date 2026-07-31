"""Verify every image in the source folder is published and referenced in the site data.

Run after editing asset-manifest.json or the project data files.
"""

import json
import os
import re
import sys
import unicodedata

sys.stdout.reconfigure(encoding="utf-8")
REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(REPO, "asset-manifest.json"), encoding="utf-8") as fh:
    manifest = json.load(fh)
SRC = manifest["sourceRoot"]

IMAGE_EXT = (".jpg", ".jpeg", ".png", ".gif", ".webp")
SKIP = {".ds_store", "thumbs.db", "desktop.ini"}

# 1. every source image appears in the manifest
sources = set()
for a in manifest["assets"]:
    s = a["source"]
    if not s.startswith("repo:"):
        sources.add(unicodedata.normalize("NFC", s.replace("\\", "/")))

missing_from_manifest = []
for root, _dirs, files in os.walk(SRC):
    for f in sorted(files):
        if f.lower() in SKIP or not f.lower().endswith(IMAGE_EXT):
            continue
        rel = unicodedata.normalize(
            "NFC", os.path.relpath(os.path.join(root, f), SRC).replace("\\", "/")
        )
        if rel not in sources:
            missing_from_manifest.append(rel)

# 2. every built asset is referenced by the project data
data_text = ""
for root, _dirs, files in os.walk(os.path.join(REPO, "data")):
    for f in files:
        if f.endswith(".ts"):
            with open(os.path.join(root, f), encoding="utf-8") as fh:
                data_text += fh.read()

referenced = set(re.findall(r"\$\{[A-Z]\}/([\w.-]+)", data_text))
referenced |= set(re.findall(r"/projects/[\w-]+/([\w.-]+)", data_text))

unreferenced = []
for a in manifest["assets"]:
    if a["out"] not in referenced:
        unreferenced.append(f"{a['project']}/{a['out']}")

print(f"source images in manifest: {len(sources)}")
if missing_from_manifest:
    print("\nSOURCE IMAGES NOT PUBLISHED:")
    for m in missing_from_manifest:
        print("  -", m)
else:
    print("all source images are published")

if unreferenced:
    print("\nPUBLISHED BUT NOT USED ON THE SITE:")
    for m in unreferenced:
        print("  -", m)
else:
    print("all published assets are used on the site")

sys.exit(1 if (missing_from_manifest or unreferenced) else 0)
