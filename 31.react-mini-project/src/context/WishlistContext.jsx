import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { readWishlist, saveWishlist } from '../services/localDb';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    setIds(readWishlist());
  }, []);

  const toggle = (id) => {
    const next = ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id];
    setIds(next);
    saveWishlist(next);
  };
  const remove = (id) => {
    const next = ids.filter((x) => x !== id);
    setIds(next);
    saveWishlist(next);
  };
  const clear = () => {
    setIds([]);
    saveWishlist([]);
  };
  const value = useMemo(() => ({ ids, toggle, remove, clear, count: ids.length }), [ids]);
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  return useContext(WishlistContext);
}

