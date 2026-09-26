import './globals.css';

export const metadata = {
  title: 'FRUITLAB — Fruit Smoothies & Coffee',
  description: 'Premium fruit smoothies, coffee and signature drinks. Mobile-first 3D storefront.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
