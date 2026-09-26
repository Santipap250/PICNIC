# FRUITLAB — 3D Premium Mobile Storefront

Mobile-first, premium/luxury-styled storefront for a fruit smoothie, coffee
and signature-drink shop. Built with Next.js App Router. No login/auth —
this is a public storefront with a working cart and a checkout entry point
ready to wire up to a real backend later.

## What's included
- Premium dark / acid-lime visual language with glass panels and CSS-only
  "3D" drink visuals (gradients + transforms — no WebGL, no heavy JS)
- Mobile-first responsive layout, verified for 360 / 390 / 430 / 768 / 1024 / 1440
- Category filter, product grid, add-to-cart, quantity +/-, subtotal, cart drawer
- Toast feedback on add-to-cart
- `prefers-reduced-motion` respected; all motion is transform/opacity based
- 44px-minimum touch targets, focus-visible states, skip-to-menu link,
  `aria-live`/`aria-label`/`role="dialog"` on the cart drawer
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
    layout.js       — root layout, metadata, viewport
    page.js         — page orchestration (state + composition only)
    globals.css     — all styling
  components/
    Navbar.js, Hero.js, Ticker.js, MenuSection.js, ProductCard.js,
    ProductVisual.js, StorySection.js, Footer.js, CartDrawer.js, Toast.js
  data/
    products.js     — categories + product catalog (edit this to change menu/prices)
  lib/
    cart.js         — cart math + createOrderPayload()
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

## Connecting real checkout (Phase 2)
`src/lib/cart.js` exports `createOrderPayload(cart, contact)`, which returns
`{ items, quantities, subtotal, customer, createdAt }`. Today the checkout
button just shows a toast; once a backend/LINE OA endpoint exists, send this
payload from `handleCheckout` in `src/app/page.js`.

## Suggested next phase
- Real product photography + `image` fields
- Wire `createOrderPayload()` to a real endpoint (LINE OA / order API / Sheets)
- Optional: basic order-confirmation screen once a backend exists
- Optional: lint/test scripts + CI
