import ProductVisual from './ProductVisual';

// The card is two sibling buttons, not a button-inside-a-button:
// one large trigger opens the product detail sheet, the other is a
// fast "quick add" that skips the sheet. Keeping them as siblings
// (instead of nesting) keeps the markup screen-reader friendly.
export default function ProductCard({ product, onAdd, onOpenDetail }) {
  return (
    <article className="product-card glass">
      <div className="badge">{product.badge}</div>

      <button
        type="button"
        className="card-open-trigger"
        onClick={() => onOpenDetail(product)}
        aria-label={`ดูรายละเอียด ${product.thai}`}
      >
        <ProductVisual tone={product.tone} image={product.image} alt={product.name} />
        <div className="product-info">
          <div>
            <p className="product-name">{product.name}</p>
            <p className="product-thai">{product.thai}</p>
          </div>
          <strong>฿{product.price}</strong>
        </div>
        <p className="product-desc">{product.description}</p>
      </button>

      <button type="button" className="add-button" onClick={() => onAdd(product)}>
        <span className="add-button-label">
          เพิ่มในตะกร้า
          <span className="sr-only"> {product.thai}</span>
        </span>
        <span className="add-icon" aria-hidden="true">
          +
        </span>
      </button>
    </article>
  );
}
