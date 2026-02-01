import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import {
  FaHeart,
  FaArrowLeft,
  FaUserEdit,
  FaTag,
  FaLanguage,
  FaStar,
  FaBox
} from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    axios
      .get(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error("Kitab detalları yüklənmədi:", err))
  }, [id])

  if (!book) {
    return (
      <p className="text-center mt-20 text-lg text-slate-600">
        Yüklənir...
      </p>
    )
  }

  const isFav = favorites.some(f => f.id === book.id)

  return (
    <div className="container mx-auto px-6 mt-16">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-10">
          
          {/* IMAGE */}
          <div className="relative">
            <img
              src={book.coverImageURL}
              alt={book.title}
              className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
            />

            {/* Favorite */}
            <button
              onClick={() => toggleFavorite(book)}
              className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition
                ${isFav
                  ? "bg-rose-600 text-white"
                  : "bg-white/80 text-slate-500 hover:text-rose-500"
                }`}
            >
              <FaHeart size={22} />
            </button>
          </div>

          {/* INFO */}
          <div className="flex flex-col justify-between">
            <div className="space-y-5">
              <h2 className="text-4xl font-extrabold text-slate-800">
                {book.title}
              </h2>

              <p className="flex items-center gap-2 text-slate-600">
                <FaUserEdit className="text-indigo-500" />
                {book.author}
              </p>

              <p className="text-slate-600 leading-relaxed">
                {book.description}
              </p>

              {/* META GRID */}
              <div className="grid grid-cols-2 gap-4 text-sm text-slate-700">
                <span className="flex items-center gap-2">
                  <FaTag className="text-indigo-500" /> {book.genre}
                </span>
                <span className="flex items-center gap-2">
                  <FaLanguage className="text-indigo-500" /> {book.language}
                </span>
                <span className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" /> {book.rating}
                </span>
                <span className="flex items-center gap-2">
                  <FaBox className="text-indigo-500" /> Stock: {book.stock}
                </span>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 px-6 py-3 bg-slate-200 text-slate-800 rounded-xl hover:bg-slate-300 transition"
              >
                <FaArrowLeft />
                Geri Qayıt
              </button>

              <span className="text-3xl font-bold text-indigo-600">
                ${book.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetail
