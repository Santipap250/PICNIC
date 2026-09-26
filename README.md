# PICNIC (ปิกนิก) — 3D Premium Mobile Storefront

Mobile-first, premium/luxury-styled storefront for **PICNIC — Smoothies &
Coffee**. Built with Next.js App Router. No login/auth — this is a public
storefront with a working cart and a real first checkout flow, ready to wire
up to a real ordering backend later.

## What's included
- Full-bleed background video on the homepage hero (your own footage,
  compressed way down — see "Hero background video" below), with the
  original CSS-only "3D" drink cup graphic layered on top
- Real PICNIC logo used everywhere the old placeholder mark was: navbar,
  footer, and favicon/apple touch icon (see "Logo" below)
- Premium dark / acid-lime visual language with glass panels
- Mobile-first responsive layout, verified for 360 / 390 / 430 / 768 / 1024 / 1440
- Compact mobile hero: brand, product visual, headline and CTA all readable
  near the top of the screen without a long scroll
- Category filter, product grid, add-to-cart, quantity +/-, subtotal, cart drawer
- Tap a product card to open a **Product Detail sheet** (bottom sheet on
  mobile, centered modal on wider screens) with a quantity stepper before
  adding to cart — the card's "quick add" button still adds 1 instantly
- A real first **checkout flow**: Cart → Customer info → Order summary →
  Confirm, ending in an honest Order Confirmation screen (see below)
- Toast feedback on add-to-cart
- Cart drawer, product sheet and checkout sheet all lock background scroll
  while open, close on Escape, and animate in/out smoothly
- `prefers-reduced-motion` respected — all CSS motion is transform/opacity
  based, and the hero video simply doesn't autoplay for those users (the
  poster frame is shown instead)
- 44px-minimum touch targets, focus-visible states, skip-to-menu link,
  `aria-live`/`aria-label`/`role="dialog"` on every drawer/sheet
- Product data fully separate from UI (`src/data/products.js`)
- Each product has an `image` field — `null` today, so the UI falls back to
  the CSS drink placeholder automatically; add a real photo path later with
  no component changes needed
- `createOrderPayload()` — the single integration point for a future
  ordering backend (LINE OA, an order API, Google Sheets, etc.)

## Hero background video
`public/videos/picnic-hero.mp4` is your uploaded clip, re-encoded to keep the
homepage fast: H.264, audio removed, downscaled to 640×1138, ~660KB (down
from the original ~8.9MB). It's muted/looped/`playsInline` so it autoplays
on mobile browsers, uses `public/images/hero-poster.jpg` as the poster frame
(shown instantly and used as the fallback when reduced-motion is on or
autoplay is blocked), and sits behind a dark gradient overlay so the
headline text stays readable. To swap in different footage later, replace
that file (keep it muted, short, and re-compressed — see the ffmpeg note
below) and regenerate a matching poster frame.

## Logo
The round PICNIC logo you sent was cropped tight to just the circular badge
(the side berry/lime decorations were cropped out) and saved as:
- `public/images/logo-mark.png` — used in the navbar and footer, masked into
  a circle with CSS (`border-radius:50%`)
- `public/icons/favicon-32.png` / `favicon-64.png` — browser tab icon
- `public/icons/apple-touch-icon.png` — composited onto the brand's dark
  background (`#0d0d0b`) since iOS ignores transparency on home-screen icons

## Project structure
```
src/
  app/
    layout.js            — root layout, metadata, viewport, favicon/icons
    page.js              — page orchestration (state + composition only)
    globals.css          — all styling
  components/
    Navbar.js, Footer.js — brand logo + PICNIC wordmark
    Hero.js              — headline/CTA + full-bleed background video
    Ticker.js, MenuSection.js, ProductCard.js, ProductVisual.js, StorySection.js,
    CartDrawer.js        — cart list + entry to checkout
    ProductDetailSheet.js — tap-to-open product detail + quantity picker
    CheckoutSheet.js      — customer info → summary → confirmation
    Toast.js
  data/
    products.js     — categories + product catalog (edit this to change menu/prices)
  lib/
    cart.js         — cart math + createOrderPayload()
    overlay.js      — shared useBodyScrollLock / useEscapeToClose hooks
public/
  videos/
    picnic-hero.mp4 — compressed hero background video
  images/
    hero-poster.jpg — hero video poster/fallback frame
    logo-mark.png   — circular PICNIC logo used in nav/footer
    (put real product photos here later, e.g. mango.webp)
  icons/
    favicon-32.png, favicon-64.png, apple-touch-icon.png
```

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Verify before deploying
```bash
npm install
npm run build
```
(This repo has no `lint`/`test` script yet — add one if the team wants CI checks.)

Manually check on a phone-sized viewport: the hero video plays (or shows the
poster if you have reduced-motion on), category filter, add to cart,
quantity +/-, subtotal, opening/closing the cart drawer, and that there is
no horizontal scroll.

## Push to GitHub
```bash
git init                      # if not already a git repo
git add .
git commit -m "Rebrand to PICNIC: logo, hero video, checkout flow"
git branch -M main
git remote add origin <your PICNIC GitHub repo URL>
git push -u origin main
```
If you renamed the GitHub repository itself (not just this project folder),
make sure the `origin` remote points at the new repo URL, not the old
PIKNIK one. If the remote already has commits, pull/rebase first:
```bash
git pull origin main --allow-unrelated-histories
```

## Deploy on Vercel
1. Go to vercel.com → **Add New… → Project**.
2. Import your PICNIC GitHub repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**.

## Re-compressing a new hero video later (reference)
```bash
ffmpeg -i input.mp4 -an -vf "scale=640:-2" -c:v libx264 -crf 32 \
  -preset slow -profile:v high -pix_fmt yuv420p -movflags +faststart \
  public/videos/picnic-hero.mp4
```

## Adding real product photos (Phase 2)
1. Drop the image file in `public/images/`, e.g. `public/images/mango.webp`.
2. In `src/data/products.js`, set that product's `image` field:
   ```js
   image: '/images/mango.webp',
   ```
3. Nothing else changes — `ProductVisual` automatically renders the real
   photo (via `next/image`) instead of the CSS placeholder.

## Connecting real checkout (Phase 3)
`src/lib/cart.js` exports `createOrderPayload(cart, contact)`, which returns
`{ items, quantities, subtotal, customer, createdAt }`. `CheckoutSheet.js`
already builds this payload when the shopper confirms — it just doesn't send
it anywhere yet. Once a backend/LINE OA endpoint exists, call it from
`handleConfirm` in `src/components/CheckoutSheet.js` and swap the
confirmation copy from "พร้อมเชื่อมระบบรับออเดอร์จริง" to a real success/failure
state.

## Known limitations
- No focus trap inside drawers/sheets yet (initial focus + Escape to close,
  but Tab doesn't cycle back inside the dialog)
- No lint/test script in this repo yet
- Hero video autoplay can still be blocked by some browsers' data-saver
  settings — the poster image is the fallback in that case, so the hero
  never breaks, it just shows a still image

## Suggested next phase
- Real product photography + `image` fields
- Wire `createOrderPayload()` to a real endpoint (LINE OA / order API / Sheets)
  and handle its success/error response on the confirmation screen
- Optional: basic focus trap inside drawers/sheets
- Optional: lint/test scripts + CI
