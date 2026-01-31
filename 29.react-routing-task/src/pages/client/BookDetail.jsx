import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import axios from "axios"
import { FaHeart } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"

function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    axios.get(`https://book-store-api-liard-three.vercel.app/books/${id}`)
      .then(res => setBook(res.data))
      .catch(err => console.error("Kitab detalları yüklənmədi:", err))
  }, [id])

  if (!book) {
    return <p className="text-center mt-10">Yüklənir...</p>
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 border rounded p-6 shadow bg-white">
      <img src={book.coverImageURL} alt={book.title} className="w-full h-64 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold text-blue-600 mb-2">{book.title}</h2>
      <p><span className="font-semibold">Author:</span> {book.author}</p>
      <p><span className="font-semibold">Price:</span> ${book.price}</p>
      <p className="text-gray-600 mt-2">{book.description}</p>
      <p><span className="font-semibold">Stock:</span> {book.stock}</p>
      <p><span className="font-semibold">Genre:</span> {book.genre}</p>
      <p><span className="font-semibold">Language:</span> {book.language}</p>
      <p><span className="font-semibold">Rating:</span> {book.rating}</p>
      <p><span className="font-semibold">Sold:</span> {book.sold}</p>

      <div className="flex justify-end mt-4">
        <button 
          onClick={() => toggleFavorite(book)} 
          className={favorites.find(fav => fav.id === book.id) ? "text-red-500" : "text-gray-400"}
        >
          <FaHeart size={28} />
        </button>
      </div>
    </div>
  )
}

export default BookDetail
