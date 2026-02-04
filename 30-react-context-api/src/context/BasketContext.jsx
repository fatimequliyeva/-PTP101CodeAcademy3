import { createContext, useState, useEffect } from "react";  //hooklarm

export const BasketContext = createContext();  //yeni contexdim

export const BasketProvider = ({ children }) => {  //childireni eyni qaydada
  const [basket, setBasket] = useState(() => {
    const saved = localStorage.getItem("basket");
    return saved ? JSON.parse(saved) : [];  //state ve stringe cevirmeyim buda o birileri kimi eyni qayda ile olacaq 
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket)); //eynen bunuda statden asli veyzte salmisam
  }, [basket]);

  const addToBasket = (item) => {  //baskete elave di
    setBasket(prev => {
      const existing = prev.find(b => b.id === item.id);
      if (existing) {
        // eger vsarsa yene elave etmri ssayni artmaq isdeyiremse bunu basketin icinden edecem
        return prev;
      } else {
        // ilk defe elave olunanda qunatidi nedi o olur 1
        return [...prev, { ...item, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => { //hemin quantinidi onu artirmaqdi map methodu ile
    setBasket(prev =>
      prev.map(b =>
        b.id === id ? { ...b, quantity: b.quantity + 1 } : b
      )
    );
  };

  const decreaseQuantity = (id) => { //eyni qaydada funksiya eynidi ve silmekdi 
    setBasket(prev =>
      prev
        .map(b =>
          b.id === id ? { ...b, quantity: b.quantity - 1 } : b
        )
        .filter(b => b.quantity > 0)  //mellim sizin kimi 1 yazmadm 0dan boyuk yazdm ama mentqi eynidi
    );
  };

  const removeFromBasket = (id) => {  //eyni qaydada silmek 
    setBasket(prev => prev.filter(b => b.id !== id));
  };

  return ( //yaratdqlarmdi isdifasde edecem 
    <BasketContext.Provider value={{ basket, addToBasket, increaseQuantity, decreaseQuantity, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
