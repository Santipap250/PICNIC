import Image from 'next/image';

export default function Navbar({ cartCount, onOpenCart }) {
  return (
    <header className="nav-wrap">
      <div className="nav glass">
        <a className="brand" href="#top" aria-label="PICNIC หน้าแรก">
          <span className="brand-mark">
            <Image src="/images/logo-mark.png" alt="" fill sizes="40px" />
          </span>
          <span>
            PICNIC<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="เมนูหลัก">
          <a href="#menu">เมนู</a>
          <a href="#story">เรื่องของเรา</a>
          <a href="#contact">ติดต่อ</a>
        </nav>
        <button
          type="button"
          className="cart-button"
          onClick={onOpenCart}
          aria-label={`เปิดตะกร้า มีสินค้า ${cartCount} ชิ้น`}
        >
          <span>ตะกร้า</span>
          <span className="cart-count" key={cartCount}>
            {cartCount}
          </span>
        </button>
      </div>
    </header>
  );
}
