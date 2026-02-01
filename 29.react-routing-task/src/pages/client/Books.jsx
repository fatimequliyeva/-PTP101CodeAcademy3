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
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
      {books.map(book => (
        <div 
          key={book.id} 
          className="bg-white border rounded-xl p-6 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
        >
          {/* Şəkil */}
          <img 
            src={book.coverImageURL} 
            alt={book.title} 
            className="w-full h-56 object-cover rounded-lg mb-4" 
          />

          {/* bawliq */}
          <h3 className="text-xl font-bold text-blue-700">{book.title}</h3>

          {/* muellf */}
          <p className="text-gray-600"><span className="font-semibold">Author:</span> {book.author}</p>

          {/* Qiymt */}
          <p className="text-gray-600"><span className="font-semibold">Price:</span> ${book.price}</p>

          {/* sekl */}
          <p className="text-gray-500 mt-2 line-clamp-3">{book.description}</p>

          {/* elave mlmat */}
          <div className="mt-3 space-y-1 text-sm text-gray-600">
            <p><span className="font-semibold">Stock:</span> {book.stock}</p>
            <p><span className="font-semibold">Genre:</span> {book.genre}</p>
            <p><span className="font-semibold">Language:</span> {book.language}</p>
            <p><span className="font-semibold">Rating:</span> {book.rating}</p>
            <p><span className="font-semibold">Sold:</span> {book.sold}</p>
          </div>

          {/* etrafli melumat ve favrio duymesi */}
          <div className="flex justify-between items-center mt-5">
            <Link 
              to={`/books/${book.id}`} 
              className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition"
            >
              Ətraflı
            </Link>
            <button 
              onClick={() => toggleFavorite(book)} 
              className={`transition ${favorites.find(fav => fav.id === book.id) ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-red-400"}`}
            >
              <FaHeart size={26} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Books
