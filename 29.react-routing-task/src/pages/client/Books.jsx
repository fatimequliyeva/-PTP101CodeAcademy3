import { useContext, useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import {
  FaHeart,
  FaUserEdit,
  FaTag,
  FaLanguage,
  FaStar
} from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"

function Books() {
  const [books, setBooks] = useState([])
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    axios
      .get("https://book-store-api-liard-three.vercel.app/books")
      .then(res => setBooks(res.data))
      .catch(err => console.error("Kitabları yükləmək mümkün olmadı:", err))
  }, [])

  const isFav = (id) => favorites.some(f => f.id === id)

  return (
    <div className="container mx-auto px-6 mt-14">
      <h2 className="text-4xl font-extrabold text-slate-800 mb-12 text-center">
        Kitablar
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {books.map(book => (
          <div
            key={book.id}
            className="group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow hover:shadow-2xl transition"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={book.coverImageURL}
                alt={book.title}
                className="w-full h-60 object-cover transition group-hover:scale-105"
              />

              {/* Favorite */}
              <button
                onClick={() => toggleFavorite(book)}
                className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md
                ${isFav(book.id)
                    ? "bg-rose-600 text-white"
                    : "bg-white/80 text-slate-500 hover:text-rose-500"
                  }`}
              >
                <FaHeart size={18} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
              <h3 className="text-lg font-bold text-slate-800 line-clamp-1">
                {book.title}
              </h3>

              <p className="flex items-center gap-2 text-sm text-slate-600">
                <FaUserEdit className="text-indigo-500" />
                {book.author}
              </p>

              <p className="text-sm text-slate-500 line-clamp-2">
                {book.description}
              </p>

              {/* Meta */}
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <FaTag className="text-indigo-500" /> {book.genre}
                </span>
                <span className="flex items-center gap-1">
                  <FaLanguage className="text-indigo-500" /> {book.language}
                </span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" /> {book.rating}
                </span>
                <span className="font-semibold text-slate-700">
                  ${book.price}
                </span>
              </div>

              {/* Action */}
              <Link
                to={`/books/${book.id}`}
                className="block mt-4 text-center bg-indigo-600 text-white py-2 rounded-xl font-medium hover:bg-indigo-700 transition"
              >
                Ətraflı Bax
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Books
