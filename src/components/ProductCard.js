import ProductVisual from './ProductVisual';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card glass">
      <div className="badge">{product.badge}</div>
      <ProductVisual tone={product.tone} image={product.image} alt={product.name} />
      <div className="product-info">
        <div>
          <p className="product-name">{product.name}</p>
          <p className="product-thai">{product.thai}</p>
        </div>
        <strong>฿{product.price}</strong>
      </div>
      <p className="product-desc">{product.description}</p>
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
