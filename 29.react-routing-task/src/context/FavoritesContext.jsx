import { createContext, useState } from "react"

// Context obyektini yarat
export const FavoritesContext = createContext()

// Provider komponenti
export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([])

    // Favoritə əlavə et
    const addToFavorites = (book) => {
        if (!favorites.find(fav => fav.id === book.id)) {
            setFavorites([...favorites, book])
        }
    }

    // Favoritdən çıxar
    const removeFromFavorites = (id) => {
        setFavorites(favorites.filter(book => book.id !== id))
    }

    // Hamısını sil
    const clearFavorites = () => {
        setFavorites([])
    }

    // Toggle (ürəyə basanda əlavə/çıxar)
    const toggleFavorite = (book) => {
        if (favorites.find(fav => fav.id === book.id)) {
            removeFromFavorites(book.id)
        } else {
            addToFavorites(book)
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}
