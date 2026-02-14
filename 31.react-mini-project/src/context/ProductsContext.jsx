import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { initDb, readProducts, saveProducts, uid } from '../services/localDb';

const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    initDb();
    setProducts(readProducts());
  }, []);

  const create = (item) => {
    const newItem = { id: uid('p'), ...item };
    const next = [...products, newItem];
    setProducts(next);
    saveProducts(next);
  };
  const update = (id, patch) => {
    const next = products.map((p) => (p.id === id ? { ...p, ...patch } : p));
    setProducts(next);
    saveProducts(next);
  };
  const remove = (id) => {
    const next = products.filter((p) => p.id !== id);
    setProducts(next);
    saveProducts(next);
  };

  const value = useMemo(() => ({ products, create, update, remove }), [products]);
  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}

export function useProducts() {
  return useContext(ProductsContext);
}

