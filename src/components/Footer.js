import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div>
        <div className="brand footer-brand">
          <span className="brand-mark">
            <Image src="/images/logo-mark.png" alt="" fill sizes="40px" />
          </span>
          <span>
            (ปิกนิก)PICNIC<span className="brand-dot">.</span>
          </span>
        </div>
        <p>Fruit smoothies · Coffee · Signature drinks</p>
      </div>
      <div className="footer-links">
        <span>เปิดทุกวัน 09:00–16:00</span>
        <span>โทร 08X-XXX-XXXX</span>
        <span>LINE: @picnic</span>
      </div>
    </footer>
  );
}
