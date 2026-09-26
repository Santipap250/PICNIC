'use client';

import { useEffect, useRef, useState } from 'react';
import ProductVisual from './ProductVisual';
import { createOrderPayload } from '../lib/cart';
import { useBodyScrollLock, useEscapeToClose } from '../lib/overlay';

// First real checkout step: Cart → Customer info → Order summary → Confirm.
// createOrderPayload() is the single integration point for a future
// backend — today Confirm only builds that payload and shows it back
// to the shopper; nothing is sent anywhere yet, and the confirmation
// screen says so plainly rather than pretending an order was placed.
export default function CheckoutSheet({ open, cart, subtotal, onClose, onConfirmed }) {
  const [step, setStep] = useState('info');
  const [contact, setContact] = useState({ name: '', phone: '', note: '' });
  const [payload, setPayload] = useState(null);
  const firstFieldRef = useRef(null);

  useBodyScrollLock(open);
  useEscapeToClose(open, onClose);

  useEffect(() => {
    if (!open) return;
    setStep('info');
    setContact({ name: '', phone: '', note: '' });
    setPayload(null);
    firstFieldRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const handleInfoSubmit = (event) => {
    event.preventDefault();
    setStep('summary');
  };

  const handleConfirm = () => {
    const nextPayload = createOrderPayload(cart, contact);
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.info('createOrderPayload()', nextPayload);
    }
    setPayload(nextPayload);
    setStep('confirmed');
    onConfirmed?.(nextPayload);
  };

  const stepLabel =
    step === 'info' ? 'STEP 1 · ข้อมูลติดต่อ' : step === 'summary' ? 'STEP 2 · สรุปออเดอร์' : 'DONE';

  return (
    <div className="overlay" onClick={onClose}>
      <aside
        className="cart-drawer checkout-sheet"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="ขั้นตอนสั่งซื้อ"
      >
        <div className="cart-head">
          <div>
            <p className="eyebrow">{stepLabel}</p>
            <h3>{step === 'confirmed' ? 'รับออเดอร์แล้ว' : 'Checkout'}</h3>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="ปิดหน้าต่างสั่งซื้อ">
            ×
          </button>
        </div>

        {step === 'info' && (
          <form className="checkout-form" onSubmit={handleInfoSubmit}>
            <label className="field">
              <span>ชื่อ</span>
              <input
                ref={firstFieldRef}
                type="text"
                required
                autoComplete="name"
                value={contact.name}
                onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                placeholder="ชื่อผู้สั่ง"
              />
            </label>
            <label className="field">
              <span>เบอร์โทร</span>
              <input
                type="tel"
                required
                autoComplete="tel"
                value={contact.phone}
                onChange={(e) => setContact((c) => ({ ...c, phone: e.target.value }))}
                placeholder="08X-XXX-XXXX"
              />
            </label>
            <label className="field">
              <span>หมายเหตุ (ถ้ามี)</span>
              <textarea
                rows={2}
                value={contact.note}
                onChange={(e) => setContact((c) => ({ ...c, note: e.target.value }))}
                placeholder="เช่น หวานน้อย, ไม่ใส่น้ำแข็ง"
              />
            </label>
            <button type="submit" className="checkout-button">
              ดูสรุปออเดอร์ ↗
            </button>
          </form>
        )}

        {step === 'summary' && (
          <>
            <ul className="cart-items">
              {cart.map((item) => (
                <li className="cart-item" key={item.id}>
                  <ProductVisual tone={item.tone} image={item.image} alt={item.name} size="mini" />
                  <div className="cart-item-main">
                    <b>{item.thai}</b>
                    <span>
                      ฿{item.price} × {item.qty}
                    </span>
                  </div>
                  <strong>฿{item.price * item.qty}</strong>
                </li>
              ))}
            </ul>
            <div className="summary-contact">
              <p>
                <b>{contact.name}</b> · {contact.phone}
              </p>
              {contact.note && <p className="summary-note">“{contact.note}”</p>}
            </div>
            <div className="cart-total">
              <span>รวม</span>
              <strong>฿{subtotal}</strong>
            </div>
            <div className="checkout-actions">
              <button type="button" className="text-button" onClick={() => setStep('info')}>
                ← แก้ไขข้อมูล
              </button>
              <button type="button" className="checkout-button" onClick={handleConfirm}>
                ยืนยันสั่งซื้อ
              </button>
            </div>
          </>
        )}

        {step === 'confirmed' && (
          <div className="order-confirmation">
            <div className="confirm-mark" aria-hidden="true">
              ✓
            </div>
            <p className="confirm-title">ได้รับข้อมูลออเดอร์ของคุณแล้ว</p>
            <p className="confirm-note">
              ขั้นตอนนี้เป็นดีโม่ฝั่ง frontend เท่านั้น — <b>พร้อมเชื่อมระบบรับออเดอร์จริง</b>{' '}
              (LINE OA / API ร้าน) ในขั้นถัดไป ยังไม่มีการส่งออเดอร์ไปยัง backend ใด ๆ
            </p>
            {payload && (
              <p className="confirm-ref">
                {contact.name} · ฿{payload.subtotal} · {payload.quantities} รายการ
              </p>
            )}
            <button type="button" className="checkout-button" onClick={onClose}>
              เสร็จสิ้น
            </button>
          </div>
        )}
      </aside>
    </div>
  );
}
