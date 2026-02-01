import { useContext, useState } from "react"
import { FaHeart, FaTrash } from "react-icons/fa"
import { FavoritesContext } from "../../context/FavoritesContext"
import { useNavigate } from "react-router-dom"

function Favorites() {
  const { favorites, removeFromFavorites, clearFavorites } = useContext(FavoritesContext)  //global stateden caqrdqilarmdi
  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false) //hamsni silmek ucun qoyduqum modaldi evvelce falsa vermisem 

  if (favorites.length === 0) {  //eger siyahi bosdusa geri qayt duymesi cixir 
    return (
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-700">Favorit siyahısı boşdur</h2> 
        <button 
          onClick={() => navigate(-1)} 
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Geri Qayıt
        </button>
      </div>
    )
  }

  const handleEmptyAll = () => {
    clearFavorites()
    setShowModal(false)  //egr varsa basildisa hamsni silir modalida baqlayir
  }

  return ( //baslqi favriomin syaini giosderior
    <div className="mt-10">
      <h2 className="text-3xl font-extrabold text-red-600 mb-6 text-center">  
        Favorilərim {favorites.length}
      </h2>

      

   {/* {geri cixis duymesi} */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-800 transition"
      >
        Geri Qayıt
      </button> 

      {/* Empty All duymsi */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={() => setShowModal(true)} 
          className="flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-lg shadow hover:bg-red-800 transition"
        >
          <FaTrash /> Empty All
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full animate-fadeIn">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Əminsiniz?</h3>
            <p className="text-gray-600 mb-6">
              Bütün favoritləri silmək istədiyinizə əminsiniz?
            </p>
            <div className="flex justify-end space-x-4">
              <button 
                onClick={() => setShowModal(false)} 
                className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
              >
                İmtina
              </button>
              <button 
                onClick={handleEmptyAll} 
                className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-800 transition"
              >
                Bəli, sil
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Favori kartlaridi */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {favorites.map(book => (
          <div 
            key={book.id} 
            className="bg-white border rounded-xl p-5 shadow-lg hover:shadow-2xl transition transform hover:scale-105"
          >
            <img 
              src={book.coverImageURL} 
              alt={book.title} 
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-blue-700">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>
            <p className="mt-2"><span className="font-semibold">Price:</span> ${book.price}</p>
            <p className="text-gray-500 mt-2">{book.description}</p>
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
                <FaHeart size={26} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
