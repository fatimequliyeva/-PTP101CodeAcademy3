import { createContext, useEffect, useState } from "react"; //hookkeardi
import { fetchCategories } from "../services/api";  //sora burda import eledim 

export const CategoriesContext = createContext();  //conetxttimi yaratdim

export const CategoriesProvider = ({ children }) => { //buda asaqida otureceynm kuryer chidlirnde
  const [categories, setCategories] = useState([]); //statemi yaratdim apiden gelen datani saxlayacaq

  useEffect(() => {
    fetchCategories().then(data => setCategories(data)); //apiden gelen datani erreye yiqacaq render edecek
  }, []);

  const addCategory = (newCat) => { //ozum yeni category elave ede bilim deye funksiya
    setCategories(prev => [...prev, { ...newCat, id: prev.length + 1 }]); //id avtomatik artsin
  };

  return (///buda providerimdi burdaki childiren otureceym funksiyalardi
    <CategoriesContext.Provider value={{ categories, addCategory }}>  /
      {children}
    </CategoriesContext.Provider>
  );
};
