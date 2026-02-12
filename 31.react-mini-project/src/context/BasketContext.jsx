// src/context/BasketContext.jsx
import { createContext, useContext, useReducer } from "react";

const BasketContext = createContext();

const basketReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return [...state, action.payload];
    case "REMOVE_FROM_BASKET":
      return state.filter((item) => item.id !== action.payload);
    case "CLEAR_BASKET":
      return [];
    default:
      return state;
  }
};

export const BasketProvider = ({ children }) => {
  const [basket, dispatch] = useReducer(basketReducer, []);

  return (
    <BasketContext.Provider value={{ basket, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
