// Cart math and the order-handoff payload live here, separate from
// any component, so the checkout integration point is easy to find
// and swap later (LINE OA / order API / Google Sheets / etc.).

export function addItem(items, product) {
  const found = items.find((item) => item.id === product.id);
  if (found) {
    return items.map((item) =>
      item.id === product.id ? { ...item, qty: item.qty + 1 } : item
    );
  }
  return [...items, { ...product, qty: 1 }];
}

export function changeQty(items, id, delta) {
  return items
    .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
    .filter((item) => item.qty > 0);
}

export function getCartCount(items) {
  return items.reduce((sum, item) => sum + item.qty, 0);
}

export function getSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// --- Ordering integration point -------------------------------------
// This is the single place a future backend integration should call
// into. It normalizes the cart into a plain payload; nothing here is
// wired to a real API yet, so it's safe to call in a demo/checkout
// button today and point it at a real endpoint later without touching
// any UI component.
export function createOrderPayload(cart, contact = {}) {
  return {
    items: cart.map((item) => ({
      id: item.id,
      name: item.name,
      thai: item.thai,
      price: item.price,
      qty: item.qty,
    })),
    quantities: cart.reduce((sum, item) => sum + item.qty, 0),
    subtotal: getSubtotal(cart),
    customer: {
      name: contact.name || '',
      phone: contact.phone || '',
      note: contact.note || '',
    },
    createdAt: new Date().toISOString(),
  };
}
