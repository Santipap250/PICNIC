export default function StorySection() {
  return (
    <section id="story" className="story-section">
      <div className="story-card">
        <div className="story-visual" aria-hidden="true">
          <div className="story-cube">
            F<span>×</span>L
          </div>
          <div className="story-orbit" />
        </div>
        <div className="story-copy">
          <p className="eyebrow">THE FRUITLAB IDEA</p>
          <h2>
            ร้านเล็ก ๆ
            <br />
            <em>ที่คิดใหญ่เรื่องแก้วหนึ่งแก้ว</em>
          </h2>
          <p>
            เราเชื่อว่าเครื่องดื่มที่ดีไม่ต้องซับซ้อน แต่ต้องเลือกวัตถุดิบให้ดี
            ผสมให้พอดี และเสิร์ฟในจังหวะที่ดีที่สุด
          </p>
          <a className="text-button" href="#contact">
            คุยกับเรา ↗
          </a>
        </div>
      </div>
    </section>
  );
}
