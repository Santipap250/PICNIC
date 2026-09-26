'use client';

import { useEffect, useRef, useState } from 'react';
import ProductVisual from './ProductVisual';
import { useBodyScrollLock, useEscapeToClose } from '../lib/overlay';

// Mobile-friendly bottom sheet (centered modal on wider screens) shown
// when a product card is tapped. Lets the shopper pick a quantity
// before adding, without leaving the menu.
export default function ProductDetailSheet({ product, onClose, onAdd }) {
  const open = Boolean(product);
  const [qty, setQty] = useState(1);
  const closeRef = useRef(null);

  useBodyScrollLock(open);
  useEscapeToClose(open, onClose);

  useEffect(() => {
    if (!open) return;
    setQty(1);
    closeRef.current?.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, product?.id]);

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="sheet product-sheet"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`รายละเอียด ${product.thai}`}
      >
        <div className="sheet-handle" aria-hidden="true" />
        <button
          type="button"
          className="icon-button sheet-close"
          onClick={onClose}
          aria-label="ปิดหน้าต่างรายละเอียดสินค้า"
          ref={closeRef}
        >
          ×
        </button>

        <ProductVisual tone={product.tone} image={product.image} alt={product.name} size="detail" />

        <div className="sheet-body">
          <div className="badge sheet-badge">{product.badge}</div>
          <p className="product-name">{product.name}</p>
          <p className="product-thai">{product.thai}</p>
          <p className="product-desc sheet-desc">{product.description}</p>

          <div className="sheet-row">
            <strong className="sheet-price">฿{product.price}</strong>
            <div className="qty" role="group" aria-label="จำนวน">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="ลดจำนวน">
                −
              </button>
              <b aria-live="polite">{qty}</b>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="เพิ่มจำนวน">
                +
              </button>
            </div>
          </div>

          <button
            type="button"
            className="checkout-button"
            onClick={() => {
              onAdd(product, qty);
              onClose();
            }}
          >
            เพิ่มในตะกร้า · ฿{product.price * qty}
          </button>
        </div>
      </div>
    </div>
  );
}
