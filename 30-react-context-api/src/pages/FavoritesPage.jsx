import { useContext } from "react";  //hooklarim 
import { FavoritesContext } from "../context/FavoritesContext"; //provlarim
import { FaStar, FaTrashAlt } from "react-icons/fa"; //iconlarim

function FavoritesPage() {  
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500">
        ⭐ Favorites
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-lg italic">Favorites boşdur, hələ heç nə əlavə etməmisiniz.</p>
      ) : (
        <ul className="space-y-6">
          {favorites.map(fav => (
            <li
              key={fav.id}
              className="border rounded-xl p-6 flex justify-between items-center shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div>
                <p className="font-semibold text-xl flex items-center gap-3 text-gray-800">
                  <FaStar className="text-yellow-400" /> {fav.name}
                </p>
                <p className="text-gray-500">{fav.description}</p>
              </div>
              <button
                onClick={() => removeFromFavorites(fav.id)}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full transition-transform duration-300 ease-in-out hover:scale-110 shadow-md"
              >
                <FaTrashAlt />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoritesPage;
