import { useState, useEffect, useCallback } from 'react';

const CART_KEY = 'genara_cart';

function getCart() {
  try {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
  } catch { return []; }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event('cart-updated'));
}

export function useCart() {
  const [items, setItems] = useState(getCart);

  useEffect(() => {
    const handler = () => setItems(getCart());
    window.addEventListener('cart-updated', handler);
    window.addEventListener('storage', handler);
    return () => {
      window.removeEventListener('cart-updated', handler);
      window.removeEventListener('storage', handler);
    };
  }, []);

  const addItem = useCallback((product, qty = 1) => {
    const cart = getCart();
    const existing = cart.find(i => i.product_id === product.id);
    if (existing) { existing.quantity += qty; }
    else { cart.push({ product_id: product.id, product_name: product.name, price: product.price, milligrams: product.milligrams, image_url: product.image_url, quantity: qty }); }
    saveCart(cart);
    setItems([...cart]);
  }, []);

  const removeItem = useCallback((productId) => {
    const cart = getCart().filter(i => i.product_id !== productId);
    saveCart(cart);
    setItems(cart);
  }, []);

  const updateQuantity = useCallback((productId, qty) => {
    const cart = getCart();
    const item = cart.find(i => i.product_id === productId);
    if (item) { item.quantity = Math.max(1, qty); saveCart(cart); setItems([...cart]); }
  }, []);

  const clearCart = useCallback(() => { saveCart([]); setItems([]); }, []);

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const count = items.reduce((sum, i) => sum + i.quantity, 0);

  return { items, addItem, removeItem, updateQuantity, clearCart, total, count };
}