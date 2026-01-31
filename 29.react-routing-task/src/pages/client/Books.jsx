import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"

function Books() {
  const [books, setBooks] = useState([])
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    axios.get("https://book-store-api-liard-three.vercel.app/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Kitabları yükləmək mümkün olmadı:", err))
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      {books.map(book => (
        <div 
          key={book.id} 
          className="border rounded p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-white"
        >
          {/* Şəkil */}
          <img 
            src={book.coverImageURL} 
            alt={book.title} 
            className="w-full h-48 object-cover rounded mb-4" 
          />

          {/* Başlıq */}
          <h3 className="text-xl font-bold text-blue-600">{book.title}</h3>

          {/* Müəllif */}
          <p className="text-gray-700"><span className="font-semibold">Author:</span> {book.author}</p>

          {/* Qiymət */}
          <p className="text-gray-700"><span className="font-semibold">Price:</span> ${book.price}</p>

          {/* Təsvir */}
          <p className="text-gray-600 mt-2">{book.description}</p>

          {/* Stok */}
          <p className="text-gray-700"><span className="font-semibold">Stock:</span> {book.stock}</p>

          {/* Janr */}
          <p className="text-gray-700"><span className="font-semibold">Genre:</span> {book.genre}</p>

          {/* Dil */}
          <p className="text-gray-700"><span className="font-semibold">Language:</span> {book.language}</p>

          {/* Rating */}
          <p className="text-gray-700"><span className="font-semibold">Rating:</span> {book.rating}</p>

          {/* Satılan sayı */}
          <p className="text-gray-700"><span className="font-semibold">Sold:</span> {book.sold}</p>

          {/* Ətraflı və Favori düymələri */}
          <div className="flex justify-between items-center mt-4">
            <Link 
              to={`/books/${book.id}`} 
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
            >
              Ətraflı
            </Link>
            <button 
              onClick={() => toggleFavorite(book)} 
              className={favorites.find(fav => fav.id === book.id) ? "text-red-500" : "text-gray-400"}
            >
              <FaHeart size={24} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Books

