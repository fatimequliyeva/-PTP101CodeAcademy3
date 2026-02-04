import { createContext, useState, useEffect } from "react";  //eynne hooklarimdi

export const FavoritesContext = createContext();  //conetxtimi yaratdim

export const FavoritesProvider = ({ children }) => { //childrenmdi 
  const [favorites, setFavorites] = useState(() => {  //statemdi gelen datani strnge cevriib ve ya geri qaytaracq
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];//eger varsa save eeddeck yoxdusa bos erry
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites)); //buhookmu favortiden asli vezyete salmisam
  }, [favorites]); //bunuda stateden asli veyzete getrimsiem

  const addToFavorites = (item) => {
    const exists = favorites.find(fav => fav.id === item.id); //find methodu ile ayzdm 
    if (!exists) {
      setFavorites(prev => [...prev, item]); //split edir kohne deyere deymeyecek yenini ealve edecek
    }
  };

  const removeFromFavorites = (id) => {  //buda silmedki kohne ile yenini muqayuise edir idye gore silir
    setFavorites(prev => prev.filter(fav => fav.id !== id));
  };

  return ( //buda providerimdi oturecem bunlari
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>  
      {children}
    </FavoritesContext.Provider>
  );
};
