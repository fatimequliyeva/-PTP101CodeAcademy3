// src/context/WishlistContext.jsx
import { createContext, useContext, useReducer, useEffect } from "react";

// 1. Context yaratmaq
const WishlistContext = createContext();

// 2. Reducer funksiyası
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_WISHLIST":
      return [];
    default:
      return state;
  }
};

// 3. Provider komponenti
export const WishlistProvider = ({ children }) => {
  const [wishlist, dispatch] = useReducer(wishlistReducer, [], () => {
    // LocalStorage-dən oxumaq
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  });

  // LocalStorage ilə sinxronizasiya
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <WishlistContext.Provider value={{ wishlist, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

// 4. Custom hook
export const useWishlist = () => useContext(WishlistContext);
