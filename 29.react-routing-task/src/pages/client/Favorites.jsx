import { useContext, useState } from "react"
import { FaHeart } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"
import { useNavigate } from "react-router-dom"

function Favorites() {
  const { favorites, removeFromFavorites, clearFavorites } = useContext(FavoritesContext)
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false)

  if (favorites.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-2xl font-bold text-gray-700">Favorit siyahısı boşdur</h2>
        <button 
          onClick={() => navigate(-1)} 
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
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
    <div className="mt-6">
      <h2 className="text-2xl font-bold text-red-600 mb-4">
        Favorilərim {favorites.length}
      </h2>

      {/* Geri çıxış düyməsi */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Geri Qayıt
      </button>

      {/* Empty All düyməsi */}
      <div className="flex justify-end mb-4">
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Empty All
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-md">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full animate-fadeIn">
            <h3 className="text-lg font-bold mb-4">Əminsiniz?</h3>
            <p className="text-gray-700 mb-6">
              Bütün favoritləri silmək istədiyinizə əminsiniz?
            </p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowModal(false)} 
                className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 transition"
              >
                İmtina
              </button>
              <button 
                onClick={handleEmptyAll} 
                className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-700 transition"
              >
                Bəli, sil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Favorit kartları */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map(book => (
          <div key={book.id} className="border rounded p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1 bg-white">
            <img src={book.coverImageURL} alt={book.title} className="w-full h-48 object-cover rounded mb-4" />
            <h3 className="text-xl font-bold text-blue-600">{book.title}</h3>
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
                onClick={() => removeFromFavorites(book.id)} 
                className="text-red-500 hover:text-red-700 cursor-pointer"
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
