# FRUITLAB 3D STORE

Mobile-first premium storefront starter for a fruit smoothie + coffee shop.

## Included
- Premium dark / lime visual language with glassmorphism and CSS 3D drink visuals
- Responsive mobile-first layout
- Category filtering
- Add-to-cart, quantity control, subtotal and drawer checkout UI
- No login/auth required
- Product catalog in `src/data/products.js`
- Placeholder 3D visuals so the site works before real drink photography is added

## Run locally
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Deploy to GitHub + Vercel
1. Create a new GitHub repository and upload this folder.
2. In Vercel, import the GitHub repository.
3. Framework: Next.js. No environment variables are required for this starter.
4. Deploy.

## Add real drink images later
Replace the `ProductVisual` component in `src/app/page.js` with `next/image` and add image paths under `public/images/`. Keep the product data in `src/data/products.js` so future updates stay simple.

## Production next step
The checkout button is intentionally a working UI placeholder. Connect it to LINE OA, an order API, Google Sheets, Supabase, or another backend once the shop's real ordering workflow is chosen.
