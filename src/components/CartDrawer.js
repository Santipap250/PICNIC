'use client';

import { useEffect, useRef } from 'react';
import ProductVisual from './ProductVisual';
import { useBodyScrollLock, useEscapeToClose } from '../lib/overlay';

export default function CartDrawer({ open, cart, subtotal, onClose, onChangeQty, onCheckout }) {
  const closeButtonRef = useRef(null);

  useBodyScrollLock(open);
  useEscapeToClose(open, onClose);

  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <aside
        className="cart-drawer"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="ตะกร้าสินค้า"
      >
        <div className="cart-head">
          <div>
            <p className="eyebrow">YOUR ORDER</p>
            <h3>ตะกร้า</h3>
          </div>
          <button
            type="button"
            className="icon-button"
            onClick={onClose}
            aria-label="ปิดตะกร้า"
            ref={closeButtonRef}
          >
            ×
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-cart">
            ยังไม่มีเมนูในตะกร้า
            <br />
            <a href="#menu" onClick={onClose}>
              เลือกเมนูเลย ↗
            </a>
          </div>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li className="cart-item" key={item.id}>
                  <ProductVisual tone={item.tone} image={item.image} alt={item.name} size="mini" />
                  <div className="cart-item-main">
                    <b>{item.thai}</b>
                    <span>
                      ฿{item.price} × {item.qty} <strong className="line-total">= ฿{item.price * item.qty}</strong>
                    </span>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => onChangeQty(item.id, -1)}
                        aria-label={`ลดจำนวน ${item.thai}`}
                      >
                        −
                      </button>
                      <b aria-live="polite">{item.qty}</b>
                      <button
                        type="button"
                        onClick={() => onChangeQty(item.id, 1)}
                        aria-label={`เพิ่มจำนวน ${item.thai}`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <span>รวม</span>
              <strong>฿{subtotal}</strong>
            </div>
            <button type="button" className="checkout-button" onClick={onCheckout}>
              สั่งซื้อ / Checkout ↗
            </button>
          </>
        )}
      </aside>
    </div>
  );
}
