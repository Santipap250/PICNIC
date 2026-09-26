'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '../data/products';
import { addItem, changeQty as changeQtyIn, getCartCount, getSubtotal } from '../lib/cart';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import MenuSection from '../components/MenuSection';
import StorySection from '../components/StorySection';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import ProductDetailSheet from '../components/ProductDetailSheet';
import CheckoutSheet from '../components/CheckoutSheet';
import Toast from '../components/Toast';

export default function Home() {
  const [active, setActive] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState(null);
  const [toast, setToast] = useState('');

  const filtered = useMemo(
    () => (active === 'all' ? products : products.filter((p) => p.category === active)),
    [active]
  );

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(window.__picnicToastTimer);
    window.__picnicToastTimer = window.setTimeout(() => setToast(''), 2200);
  };

  const handleAdd = (product, qty = 1) => {
    setCart((items) => addItem(items, product, qty));
    showToast(`${product.thai} เพิ่มในตะกร้าแล้ว`);
  };

  const handleChangeQty = (id, delta) => {
    setCart((items) => changeQtyIn(items, id, delta));
  };

  const handleOpenCheckout = () => {
    setCartOpen(false);
    setCheckoutOpen(true);
  };

  const handleOrderConfirmed = () => {
    // Demo-only: the order payload was built and shown back to the
    // shopper by CheckoutSheet; clear the cart as if it were placed.
    setCart([]);
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
        onOpenDetail={setDetailProduct}
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
        onCheckout={handleOpenCheckout}
      />

      <ProductDetailSheet product={detailProduct} onClose={() => setDetailProduct(null)} onAdd={handleAdd} />

      <CheckoutSheet
        open={checkoutOpen}
        cart={cart}
        subtotal={subtotal}
        onClose={() => setCheckoutOpen(false)}
        onConfirmed={handleOrderConfirmed}
      />
    </main>
  );
}
