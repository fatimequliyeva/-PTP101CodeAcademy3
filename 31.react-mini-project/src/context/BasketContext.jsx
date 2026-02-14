import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { readCart, saveCart } from '../services/localDb';

const BasketContext = createContext(null);

export function BasketProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(readCart());
  }, []);

  const add = (product, qty = 1) => {
    const exists = items.find((i) => i.id === product.id);
    let next;
    if (exists) {
      next = items.map((i) => (i.id === product.id ? { ...i, qty: i.qty + qty } : i));
    } else {
      next = [...items, { ...product, qty }];
    }
    setItems(next);
    saveCart(next);
  };
  const remove = (id) => {
    const next = items.filter((i) => i.id !== id);
    setItems(next);
    saveCart(next);
  };
  const setQty = (id, qty) => {
    const next = items.map((i) => (i.id === id ? { ...i, qty } : i));
    setItems(next);
    saveCart(next);
  };
  const clear = () => {
    setItems([]);
    saveCart([]);
  };

  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.price * i.qty, 0);

  const value = useMemo(() => ({ items, add, remove, setQty, clear, count, total }), [items]);
  return <BasketContext.Provider value={value}>{children}</BasketContext.Provider>;
}

export function useBasket() {
  return useContext(BasketContext);
}

