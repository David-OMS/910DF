"""
Scale 910 up uniformly on the approved seals so L/R frame lines break.

Keeps canvas, frame, wordmark, and proportions from the approved seal PNGs.
Only replaces the 910 with a uniformly larger interlocking mark (not width-only).
"""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw

BRAND = Path(r"C:\Users\user\Desktop\910DF\public\images\brand")
# Approved seals before this run (same files we overwrite at the end).
APPROVED = {
    "white": BRAND / "seal-white.png",
    "terracotta": BRAND / "seal-terracotta.png",
    "gold": BRAND / "seal-gold.png",
    "teal": BRAND / "seal-teal.png",
}

CHARCOAL = (47, 47, 47, 255)
WHITE = (255, 255, 255, 255)
CREAM = (240, 230, 216, 255)
TEAL = (111, 155, 150, 255)
TERRACOTTA = (196, 120, 74, 255)

# How much wider than the inner frame the mark should be (uniform scale).
# ~1.06–1.08: enough to cover the side lines without the fat stretch look.
SIDE_OVERSHOOT = 1.07


def crop_opaque(im: Image.Image, pad: int = 2) -> Image.Image:
    bbox = im.getbbox()
    if not bbox:
        raise SystemExit("empty mark")
    l, t, r, b = bbox
    w, h = im.size
    return im.crop(
        (max(0, l - pad), max(0, t - pad), min(w, r + pad), min(h, b + pad))
    )


def recolor_gold(im: Image.Image, target: tuple[int, int, int, int]) -> Image.Image:
    out = im.copy()
    px = out.load()
    assert px is not None
    for y in range(out.size[1]):
        for x in range(out.size[0]):
            r, g, b, a = px[x, y]
            if a < 20:
                continue
            if r > 150 and g > 100 and b < 110 and r > b + 50 and g > b + 30:
                px[x, y] = target
    return out


def recolor_near_white(im: Image.Image, target: tuple[int, int, int, int]) -> Image.Image:
    out = im.copy()
    px = out.load()
    assert px is not None
    for y in range(out.size[1]):
        for x in range(out.size[0]):
            r, g, b, a = px[x, y]
            if a < 20:
                continue
            if min(r, g, b) >= 200 and max(r, g, b) - min(r, g, b) <= 25:
                px[x, y] = target
    return out


def variant_mark(base: Image.Image, kind: str) -> Image.Image:
    if kind == "white":
        return recolor_gold(base, WHITE)
    if kind == "gold":
        return base.copy()
    if kind == "teal":
        return recolor_gold(base, TEAL)
    if kind == "terracotta":
        return recolor_near_white(recolor_gold(base, TERRACOTTA), CREAM)
    raise ValueError(kind)


def find_frame_inset(im: Image.Image) -> int:
    """White frame hugs the edge — find first near-white column from the left."""
    px = im.load()
    assert px is not None
    w, h = im.size
    mid = h // 2
    for x in range(min(40, w)):
        r, g, b, a = px[x, mid]
        if a > 200 and min(r, g, b) >= 220:
            return x
    return 12


def find_wordmark_top(im: Image.Image, frame_inset: int) -> int:
    """
    Scan upward from the bottom for the start of the white wordmark block.
    Leave a little charcoal between 910 and DEVELOPMENT.
    """
    px = im.load()
    assert px is not None
    w, h = im.size
    cx = w // 2
    # Skip bottom frame / margin, walk up until we hit solid white text rows.
    y = h - frame_inset - 8
    seen_text = False
    text_top = y
    while y > h // 3:
        r, g, b, a = px[cx, y]
        is_white = a > 200 and min(r, g, b) >= 220
        if is_white:
            seen_text = True
            text_top = y
        elif seen_text:
            # First charcoal row above the wordmark block
            return text_top - 16
        y -= 1
    return int(h * 0.58)


def build(kind: str, mark: Image.Image) -> None:
    src = Image.open(APPROVED[kind]).convert("RGBA")
    w, h = src.size
    inset = find_frame_inset(src)
    word_y = find_wordmark_top(src, inset)

    # Keep everything below word_y from the approved seal (wordmark + bottom frame).
    bottom = src.crop((0, word_y, w, h))

    canvas = Image.new("RGBA", (w, h), CHARCOAL)
    draw = ImageDraw.Draw(canvas)
    fl, ft = inset, inset
    fr, fb = w - inset - 1, h - inset - 1
    draw.rectangle([fl, ft, fr, fb], outline=WHITE, width=3)

    inner_w = fr - fl
    # Uniform scale: both axes from the same ratio — longer AND taller, not fat.
    target_w = int(inner_w * SIDE_OVERSHOOT)
    ratio = target_w / mark.size[0]
    mh = int(mark.size[1] * ratio)
    mark_r = mark.resize((target_w, mh), Image.Resampling.LANCZOS)

    mx = (w - target_w) // 2
    # Keep a top gap; sides are what break.
    top_gap = 28
    my = ft + top_gap
    # If mark would collide with wordmark, nudge up slightly but keep top gap ≥ 12
    if my + mh > word_y - 8:
        my = max(ft + 12, word_y - 8 - mh)

    canvas.paste(mark_r, (mx, my), mark_r)
    # Wordmark strip from the approved image (same size/type as before).
    canvas.paste(bottom, (0, word_y))

    # Re-paste mark so it sits above any frame/wordmark edge it overlaps on the sides.
    canvas.paste(mark_r, (mx, my), mark_r)

    out = BRAND / f"seal-{kind}.png"
    canvas.save(out, "PNG")
    print(
        "seal",
        out.name,
        out_size := canvas.size,
        "mark",
        (target_w, mh),
        "inset",
        inset,
        "word_y",
        word_y,
    )


def main() -> None:
    base = crop_opaque(Image.open(BRAND / "mark-on-dark.png").convert("RGBA"))
    for kind in ("white", "terracotta", "gold", "teal"):
        build(kind, variant_mark(base, kind))


if __name__ == "__main__":
    main()
