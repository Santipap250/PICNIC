import ProductCard from './ProductCard';

export default function MenuSection({ categories, products, active, onSelectCategory, onAdd, onOpenDetail }) {
  return (
    <section id="menu" className="menu-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">THE MENU</p>
          <h2>
            วันนี้อยากได้
            <br />
            <em>แก้วไหน?</em>
          </h2>
        </div>
        <p className="section-note">
          เมนูตัวอย่างถูกจัดวางให้พร้อมเปลี่ยนรูปและราคาในภายหลังจากไฟล์เดียว
        </p>
      </div>

      <div className="category-row" role="tablist" aria-label="หมวดหมู่เมนู">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={active === cat.id}
            className={active === cat.id ? 'active' : ''}
            onClick={() => onSelectCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAdd={onAdd} onOpenDetail={onOpenDetail} />
        ))}
      </div>
    </section>
  );
}
