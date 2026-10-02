#!/bin/sh
# Render the brand templates in this folder to PNGs in public/ with headless Chrome.
# Usage: sh scripts/brand/render.sh   (macOS; needs Google Chrome and network for Google Fonts)
set -e
cd "$(dirname "$0")"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUT=../../public

render() { # template width height output
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --virtual-time-budget=8000 --window-size="$2,$3" --screenshot="$4" "file://$PWD/$1" 2>/dev/null
}

render og-default.html 1200 630 "$OUT/og-image.png"
render icon.html 512 512 "$OUT/images/icon-512.png"

# Smaller icon sizes, downscaled from the 512px render.
sips -z 192 192 "$OUT/images/icon-512.png" --out "$OUT/images/icon-192.png" >/dev/null
sips -z 180 180 "$OUT/images/icon-512.png" --out "$OUT/images/apple-touch-icon.png" >/dev/null
sips -z 32 32 "$OUT/images/icon-512.png" --out "$OUT/images/favicon-32.png" >/dev/null
echo "Rendered og-image.png and icons into public/"
