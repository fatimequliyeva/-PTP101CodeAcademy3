import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { FaHeart } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"

function BookDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [book, setBook] = useState(null)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    axios.get(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error("Kitab detalları yüklənmədi:", err))
  }, [id])

  if (!book) {
    return <p className="text-center mt-10 text-lg text-gray-600">Yüklənir...</p>
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 bg-white border rounded-2xl shadow-xl p-8">
      {/* sekil */}
      <img 
        src={book.coverImageURL} 
        alt={book.title} 
        className="w-full h-72 object-cover rounded-xl shadow-lg mb-6 transition transform hover:scale-105" 
      />

      {/* basliq */}
      <h2 className="text-3xl font-extrabold text-blue-700 mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-4"><span className="font-semibold">Author:</span> {book.author}</p>

      {/* elave melumat ve grid mentiqi  */}
      <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
        <p><span className="font-semibold">Price:</span> ${book.price}</p>
        <p><span className="font-semibold">Stock:</span> {book.stock}</p>
        <p><span className="font-semibold">Genre:</span> {book.genre}</p>
        <p><span className="font-semibold">Language:</span> {book.language}</p>
        <p><span className="font-semibold">Rating:</span> {book.rating}</p>
        <p><span className="font-semibold">Sold:</span> {book.sold}</p>
      </div>

      {/* sekil */}
      <p className="text-gray-600 leading-relaxed mb-6">{book.description}</p>

      {/* duymeler */}
      <div className="flex justify-between items-center">
        <button 
          onClick={() => navigate(-1)} 
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          Geri Qayıt
        </button>
        <button 
          onClick={() => toggleFavorite(book)} 
          className={`transition ${favorites.find(fav => fav.id === book.id) ? "text-red-500 hover:text-red-700" : "text-gray-400 hover:text-red-400"}`}
        >
          <FaHeart size={30} />
        </button>
      </div>
    </div>
  )
}

export default BookDetail
