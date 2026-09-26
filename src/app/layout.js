import './globals.css';

export const metadata = {
  metadataBase: new URL('https://fruitlab.example.com'),
  title: 'FRUITLAB — Fruit Smoothies & Coffee',
  description:
    'Premium fruit smoothies, coffee and signature drinks. Mobile-first 3D storefront.',
  icons: {
    icon: '/icons/favicon.svg',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#0d0d0b',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
