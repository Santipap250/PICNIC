'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '../data/products';

function ProductVisual({ tone }) {
  return (
    <div className={`drink-stage tone-${tone}`} aria-hidden="true">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="cup-shadow" />
      <div className="cup">
        <div className="cup-glass" />
        <div className="cup-liquid" />
        <div className="cup-cream" />
        <div className="cup-straw" />
        <div className="cup-shine" />
      </div>
      <div className="fruit-orb orb-one" />
      <div className="fruit-orb orb-two" />
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState('all');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const filtered = useMemo(
    () => active === 'all' ? products : products.filter((p) => p.category === active),
    [active]
  );

  const addToCart = (product) => {
    setCart((items) => {
      const found = items.find((item) => item.id === product.id);
      if (found) return items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      return [...items, { ...product, qty: 1 }];
    });
    setToast(`${product.thai} เพิ่มในตะกร้าแล้ว`);
    window.clearTimeout(window.__toastTimer);
    window.__toastTimer = window.setTimeout(() => setToast(''), 2200);
  };

  const changeQty = (id, delta) => {
    setCart((items) => items.map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item).filter((item) => item.qty > 0));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <div className="nav glass">
          <a className="brand" href="#top" aria-label="FRUITLAB home">
            <span className="brand-mark">F</span>
            <span>FRUITLAB<span className="brand-dot">.</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            <a href="#menu">เมนู</a><a href="#story">เรื่องของเรา</a><a href="#contact">ติดต่อ</a>
          </nav>
          <button className="cart-button" onClick={() => setCartOpen(true)} aria-label="เปิดตะกร้า">
            <span>ตะกร้า</span><span className="cart-count">{cartCount}</span>
          </button>
        </div>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">FRESHLY BLENDED · DAILY</p>
          <h1>Fruit,<br /><em>but make it art.</em></h1>
          <p className="hero-text">สมูทตี้ผลไม้ กาแฟ และซิกเนเจอร์ดริงก์ที่ตั้งใจทำให้ทั้งอร่อยและน่าจดจำ</p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">เลือกเมนู <span>↗</span></a>
            <a className="text-button" href="#story">ดูเรื่องราวร้าน</a>
          </div>
          <div className="hero-trust"><span>✦</span> Fresh fruit · No compromise · Made to order</div>
        </div>

        <div className="hero-art" aria-label="3D drink preview">
          <div className="hero-ring ring-one" /><div className="hero-ring ring-two" />
          <div className="hero-glow" />
          <div className="hero-cup">
            <div className="hero-cup-top" /><div className="hero-cup-body" />
            <div className="hero-cup-label">FRUITLAB<br /><small>LIMITED EDITION</small></div>
            <div className="hero-cup-shine" /><div className="hero-straw" />
          </div>
          <div className="hero-orb orb-left" /><div className="hero-orb orb-right" />
          <div className="hero-badge"><b>01</b><span>Crafted<br />in layers</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Store highlights">
        <span>REAL FRUIT</span><i>✦</i><span>SMOOTH BLENDS</span><i>✦</i><span>SPECIALTY COFFEE</span><i>✦</i><span>MADE FRESH</span><i>✦</i><span>REAL FRUIT</span>
      </section>

      <section id="menu" className="menu-section">
        <div className="section-heading"><div><p className="eyebrow">THE MENU</p><h2>วันนี้อยากได้<br /><em>แก้วไหน?</em></h2></div><p className="section-note">เมนูตัวอย่างถูกจัดวางให้พร้อมเปลี่ยนรูปและราคาในภายหลังจากไฟล์เดียว</p></div>
        <div className="category-row">{categories.map((cat) => <button key={cat.id} className={active === cat.id ? 'active' : ''} onClick={() => setActive(cat.id)}>{cat.label}</button>)}</div>
        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card glass" key={product.id}>
              <div className="badge">{product.badge}</div>
              <ProductVisual tone={product.tone} />
              <div className="product-info"><div><p className="product-name">{product.name}</p><p className="product-thai">{product.thai}</p></div><strong>฿{product.price}</strong></div>
              <p className="product-desc">{product.description}</p>
              <button className="add-button" onClick={() => addToCart(product)}>เพิ่มในตะกร้า <span>+</span></button>
            </article>
          ))}
        </div>
      </section>

      <section id="story" className="story-section">
        <div className="story-card">
          <div className="story-visual"><div className="story-cube">F<span>×</span>L</div><div className="story-orbit" /></div>
          <div className="story-copy"><p className="eyebrow">THE FRUITLAB IDEA</p><h2>ร้านเล็ก ๆ<br /><em>ที่คิดใหญ่เรื่องแก้วหนึ่งแก้ว</em></h2><p>เราเชื่อว่าเครื่องดื่มที่ดีไม่ต้องซับซ้อน แต่ต้องเลือกวัตถุดิบให้ดี ผสมให้พอดี และเสิร์ฟในจังหวะที่ดีที่สุด</p><a className="text-button" href="#contact">คุยกับเรา ↗</a></div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div><div className="brand footer-brand"><span className="brand-mark">F</span><span>FRUITLAB<span className="brand-dot">.</span></span></div><p>Fruit smoothies · Coffee · Signature drinks</p></div>
        <div className="footer-links"><span>เปิดทุกวัน 09:00–20:00</span><span>โทร 08X-XXX-XXXX</span><span>LINE: @fruitlab</span></div>
      </footer>

      {toast && <div className="toast">✓ {toast}</div>}

      {cartOpen && <div className="overlay" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={(e) => e.stopPropagation()}><div className="cart-head"><div><p className="eyebrow">YOUR ORDER</p><h3>ตะกร้า</h3></div><button className="icon-button" onClick={() => setCartOpen(false)}>×</button></div>{cart.length === 0 ? <div className="empty-cart">ยังไม่มีเมนูในตะกร้า<br /><a href="#menu" onClick={() => setCartOpen(false)}>เลือกเมนูเลย ↗</a></div> : <>{cart.map((item) => <div className="cart-item" key={item.id}><ProductVisual tone={item.tone} /><div className="cart-item-main"><b>{item.thai}</b><span>฿{item.price}</span><div className="qty"><button onClick={() => changeQty(item.id, -1)}>−</button><b>{item.qty}</b><button onClick={() => changeQty(item.id, 1)}>+</button></div></div></div>)}<div className="cart-total"><span>รวม</span><strong>฿{subtotal}</strong></div><button className="checkout-button" onClick={() => setToast('Demo พร้อมเชื่อม LINE / API ออเดอร์ได้ในขั้นถัดไป')}>สั่งซื้อ / Checkout ↗</button></>}</aside></div>}
    </main>
  );
}
