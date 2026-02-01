import { useContext, useState } from "react"
import { FaHeart, FaTrash } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"
import { useNavigate } from "react-router-dom"

function Favorites() {
  const { favorites, removeFromFavorites, clearFavorites } = useContext(FavoritesContext)
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-24">
        <h2 className="text-3xl font-bold text-slate-700">
          Favorit siyahısı boşdur
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition"
        >
          Geri Qayıt
        </button>
      </div>
    )
  }

  const handleEmptyAll = () => {
    clearFavorites()
    setShowModal(false)
  }

  return (
    <div className="mt-14 container mx-auto px-6">

      <h2 className="text-4xl font-extrabold text-slate-800 mb-10 text-center">
        Favorilərim
        <span className="ml-2 text-indigo-600">({favorites.length})</span>
      </h2>

      {/* üst actionlar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <button
          onClick={() => navigate(-1)}
          className="bg-slate-700 text-white px-6 py-2 rounded-lg hover:bg-slate-900 transition"
        >
          Geri Qayıt
        </button>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-rose-600 text-white px-5 py-2 rounded-lg shadow hover:bg-rose-700 transition"
        >
          <FaTrash /> Empty All
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
            <h3 className="text-xl font-bold mb-4 text-slate-800">
              Əminsiniz?
            </h3>
            <p className="text-slate-600 mb-6">
              Bütün favoritləri silmək istədiyinizə əminsiniz?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 transition"
              >
                İmtina
              </button>
              <button
                onClick={handleEmptyAll}
                className="px-5 py-2 rounded-lg bg-rose-600 text-white hover:bg-rose-700 transition"
              >
                Bəli, sil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Favori kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {favorites.map(book => (
          <div
            key={book.id}
            className="bg-white border border-slate-200 rounded-2xl p-5 shadow hover:shadow-xl transition"
          >
            <img
              src={book.coverImageURL}
              alt={book.title}
              className="w-full h-56 object-cover rounded-xl mb-4"
            />

            <h3 className="text-xl font-bold text-slate-800">
              {book.title}
            </h3>
            <p className="text-slate-500">{book.author}</p>

            <div className="mt-3 text-sm text-slate-600 space-y-1">
              <p><b>Price:</b> ${book.price}</p>
              <p><b>Stock:</b> {book.stock}</p>
              <p><b>Genre:</b> {book.genre}</p>
              <p><b>Language:</b> {book.language}</p>
              <p><b>Rating:</b> {book.rating}</p>
              <p><b>Sold:</b> {book.sold}</p>
            </div>

            <div className="flex justify-end mt-5">
              <button
                onClick={() => removeFromFavorites(book.id)}
                className="text-rose-500 hover:text-rose-700 transition"
              >
                <FaHeart size={24} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
