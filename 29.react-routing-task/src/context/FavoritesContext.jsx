import { createContext, useState } from "react"  //context yaratmaq ucun state saxalamq ucun


export const FavoritesContext = createContext()  //yaradilir vefavoriler melmatni butun componnetelre oturur

export function FavoritesProvider({ children }) {  //bu provider yaradir bu yalniz cidlrn qebyul edir 
    const [favorites, setFavorites] = useState([])  //burda fvri kitab saxlanicaq


    const addToFavorites = (book) => {  //favori secir eger varsa find ele yxoalyr varsa yeniden elave etmr
        if (!favorites.find(fav => fav.id === book.id)) {
            setFavorites([...favorites, book])
        }
    }

   
    const removeFromFavorites = (id) => { //silmekdi id ile filterleyirem
        setFavorites(favorites.filter(book => book.id !== id))
    }

    const clearFavorites = () => { //hamsn silir
        setFavorites([])
    }


    const toggleFavorite = (book) => {  //togle ile favorde varsa silinir yoxdusa elave olunur
        if (favorites.find(fav => fav.id === book.id)) {
            removeFromFavorites(book.id)
        } else {
            addToFavorites(book)
        }
    }
//bu provider companeteti butun usaqlara oturur yeni globalstateye benzer bir seydir her favoriye oturulur 
    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}
