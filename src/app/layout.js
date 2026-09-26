import './globals.css';

export const metadata = {
  metadataBase: new URL('https://picnic.example.com'),
  title: 'PICNIC — Smoothies & Coffee',
  description:
    'อร่อย สดชื่น ทุกสัมผัส — Premium fruit smoothies, coffee and signature drinks. Mobile-first 3D storefront.',
  icons: {
    icon: [
      { url: '/icons/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/favicon-64.png', sizes: '64x64', type: 'image/png' },
    ],
    apple: '/icons/apple-touch-icon.png',
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
