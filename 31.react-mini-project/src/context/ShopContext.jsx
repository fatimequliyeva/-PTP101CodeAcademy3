import { createContext, useContext, useMemo, useReducer, useEffect } from 'react';

const ShopContext = createContext(null);

const initialState = {
  basket: JSON.parse(localStorage.getItem('basket')) || [],
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || []
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'ADD_BASKET': {
      const exists = state.basket.find(p => p.id === action.product.id);
      if (exists) {
        newState = {
          ...state,
          basket: state.basket.map(p => 
            p.id === action.product.id 
              ? { ...p, quantity: (p.quantity || 1) + 1 } 
              : p
          )
        };
      } else {
        newState = { 
          ...state, 
          basket: [...state.basket, { ...action.product, quantity: 1 }] 
        };
      }
      break;
    }
    case 'DECREASE_BASKET_ITEM': {
      const exists = state.basket.find(p => p.id === action.id);
      if (exists && exists.quantity > 1) {
        newState = {
          ...state,
          basket: state.basket.map(p =>
            p.id === action.id
              ? { ...p, quantity: p.quantity - 1 }
              : p
          )
        };
      } else {

        newState = { ...state, basket: state.basket.filter(p => p.id !== action.id) };
      }
      break;
    }
    case 'REMOVE_BASKET': {
      newState = { ...state, basket: state.basket.filter(p => p.id !== action.id) };
      break;
    }
    case 'ADD_WISHLIST': {
      const exists = state.wishlist.find(p => p.id === action.product.id);
      if (exists) {
        newState = state;
      } else {
        newState = { ...state, wishlist: [...state.wishlist, action.product] };
      }
      break;
    }
    case 'REMOVE_WISHLIST': {
      newState = { ...state, wishlist: state.wishlist.filter(p => p.id !== action.id) };
      break;
    }
    default:
      return state;
  }
  

  if (newState) {
    localStorage.setItem('basket', JSON.stringify(newState.basket));
    localStorage.setItem('wishlist', JSON.stringify(newState.wishlist));
    return newState;
  }
  return state;
}

export const ShopProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(() => ({
    basket: state.basket,
    wishlist: state.wishlist,
    addToBasket: (product) => dispatch({ type: 'ADD_BASKET', product }),
    decreaseBasketItem: (id) => dispatch({ type: 'DECREASE_BASKET_ITEM', id }),
    removeFromBasket: (id) => dispatch({ type: 'REMOVE_BASKET', id }),
    addToWishlist: (product) => dispatch({ type: 'ADD_WISHLIST', product }),
    removeFromWishlist: (id) => dispatch({ type: 'REMOVE_WISHLIST', id }),
  }), [state]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShop = () => useContext(ShopContext);
