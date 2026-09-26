export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-copy">
        <p className="eyebrow">FRESHLY BLENDED · DAILY</p>
        <h1>
          Fruit,
          <br />
          <em>but make it art.</em>
        </h1>
        <p className="hero-text">
          สมูทตี้ผลไม้ กาแฟ และซิกเนเจอร์ดริงก์ที่ตั้งใจทำให้ทั้งอร่อยและน่าจดจำ
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#menu">
            เลือกเมนู <span>↗</span>
          </a>
          <a className="text-button" href="#story">
            ดูเรื่องราวร้าน
          </a>
        </div>
        <div className="hero-trust">
          <span>✦</span> Fresh fruit · No compromise · Made to order
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="hero-ring ring-one" />
        <div className="hero-ring ring-two" />
        <div className="hero-glow" />
        <div className="hero-cup">
          <div className="hero-cup-top" />
          <div className="hero-cup-body" />
          <div className="hero-cup-label">
            ปิกนิก
            <br />
            <small>LIMITED EDITION</small>
          </div>
          <div className="hero-cup-shine" />
          <div className="hero-straw" />
        </div>
        <div className="hero-orb orb-left" />
        <div className="hero-orb orb-right" />
        <div className="hero-badge">
          <b>01</b>
          <span>
            Crafted
            <br />
            in layers
          </span>
        </div>
      </div>
    </section>
  );
}
