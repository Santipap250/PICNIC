'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '../data/products';
import { addItem, changeQty as changeQtyIn, getCartCount, getSubtotal, createOrderPayload } from '../lib/cart';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import Toast from '../components/Toast';

export default function Home() {
  const [active, setActive] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(window.__fruitlabToastTimer);
    window.__fruitlabToastTimer = window.setTimeout(() => setToast(''), 2200);
  };

  const handleAdd = (product) => {
    setCart((items) => addItem(items, product));
    showToast(`${product.thai} เพิ่มในตะกร้าแล้ว`);
  };

  const handleChangeQty = (id, delta) => {
    setCart((items) => changeQtyIn(items, id, delta));
  };

  const handleCheckout = () => {
    // Demo-only: builds the payload a real backend/LINE OA integration
    // would receive, but doesn't send it anywhere yet.
    const payload = createOrderPayload(cart);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('createOrderPayload()', payload);
    }
    showToast('Demo พร้อมเชื่อม LINE / API ออเดอร์ได้ในขั้นถัดไป');
  };

  const cartCount = getCartCount(cart);
  const subtotal = getSubtotal(cart);

  return (
    <main className="site-shell">
      <a className="skip-link" href="#menu">
        ข้ามไปที่เมนู
      </a>

      <Navbar cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />

      <Hero />
      <Ticker />

      <MenuSection
        categories={categories}
        products={filtered}
        active={active}
        onSelectCategory={setActive}
        onAdd={handleAdd}
      />

      <StorySection />
      <Footer />

      <Toast message={toast} />

      <CartDrawer
        open={cartOpen}
        cart={cart}
        subtotal={subtotal}
        onClose={() => setCartOpen(false)}
        onChangeQty={handleChangeQty}
        onCheckout={handleCheckout}
      />
    </main>
  );
}
