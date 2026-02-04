import { useContext } from "react";  //hooklarim 
import { FavoritesContext } from "../context/FavoritesContext"; //provlarim
import { FaStar, FaTrash } from "react-icons/fa"; //heckime ziyani deymeyen iconlarim

function FavoritesPage() {  //funksiyonum providerde yazdqlarimi ise salacam burda 
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-yellow-600">⭐ Favorites</h1>

      {favorites.length === 0 ? ( //favorites tam bos olanda mesaj gorsensin
        <p className="text-gray-600 text-lg">Favorites boşdur, hələ heç nə əlavə etməmisiniz.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map(fav => (
            <li
              key={fav.id} //yene keylerim
              className="border rounded-lg p-4 flex justify-between items-center shadow hover:shadow-lg transition"
            >
              <div>
                <p className="font-semibold text-lg flex items-center gap-2">
                  <FaStar className="text-yellow-500" /> {fav.name}
                </p>
                <p className="text-gray-600">{fav.description}</p>
              </div>
              <button
                onClick={() => removeFromFavorites(fav.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
              >
                <FaTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
