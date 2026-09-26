# FRUITLAB — 3D Premium Mobile Storefront

Mobile-first, premium/luxury-styled storefront for a fruit smoothie, coffee
and signature-drink shop. Built with Next.js App Router. No login/auth —
this is a public storefront with a working cart and a checkout entry point
ready to wire up to a real backend later.

## What's included
- Premium dark / acid-lime visual language with glass panels and CSS-only
  "3D" drink visuals (gradients + transforms — no WebGL, no heavy JS)
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
- `prefers-reduced-motion` respected; all motion is transform/opacity based
- 44px-minimum touch targets, focus-visible states, skip-to-menu link,
  `aria-live`/`aria-label`/`role="dialog"` on every drawer/sheet
- Product data fully separate from UI (`src/data/products.js`)
- Each product has an `image` field — `null` today, so the UI falls back to
  the CSS drink placeholder automatically; add a real photo path later with
  no component changes needed
- `createOrderPayload()` — the single integration point for a future
  ordering backend (LINE OA, an order API, Google Sheets, etc.)

## Project structure
```
src/
  app/
    layout.js            — root layout, metadata, viewport
    page.js              — page orchestration (state + composition only)
    globals.css          — all styling
  components/
    Navbar.js, Hero.js, Ticker.js, MenuSection.js, ProductCard.js,
    ProductVisual.js, StorySection.js, Footer.js,
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
  images/           — put real product photos here later (e.g. mango.webp)
  icons/            — favicon.svg
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

Manually check on a phone-sized viewport: category filter, add to cart,
quantity +/-, subtotal, opening/closing the cart drawer, and that there is
no horizontal scroll.

## Push to GitHub
```bash
git init                      # if not already a git repo
git add .
git commit -m "FRUITLAB 3D premium storefront"
git branch -M main
git remote add origin https://github.com/Santipap250/PIKNIK.git
git push -u origin main
```
If the remote already has commits, pull/rebase first:
```bash
git pull origin main --allow-unrelated-histories
```

## Deploy on Vercel
1. Go to vercel.com → **Add New… → Project**.
2. Import the `Santipap250/PIKNIK` GitHub repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables
   are required.
4. Click **Deploy**.

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

## Suggested next phase
- Real product photography + `image` fields
- Wire `createOrderPayload()` to a real endpoint (LINE OA / order API / Sheets)
  and handle its success/error response on the confirmation screen
- Optional: basic focus trap inside drawers/sheets (currently: initial focus
  + Escape to close, but Tab isn't cycled back inside the dialog)
- Optional: lint/test scripts + CI
