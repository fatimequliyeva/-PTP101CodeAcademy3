import { useContext } from "react";  //hooklarim
import { CategoriesContext } from "../context/CategoriesContext"; //providerm
import { FavoritesContext } from "../context/FavoritesContext"; //buda provider
import { BasketContext } from "../context/BasketContext"; //buda provider 
import { FaStar, FaShoppingCart } from "react-icons/fa"; //buda yazq kimsesiz iconlar 

function CategoriesPage() {
  const { categories } = useContext(CategoriesContext); //contexlerimi yaratdm 
  const { addToFavorites } = useContext(FavoritesContext);
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📂 Categories</h1>
      <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Description</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {categories.map(cat => (
            <tr key={cat.id} className="hover:bg-gray-50 transition">
              <td className="px-4 py-2">{cat.id}</td>
              <td className="px-4 py-2 font-semibold">{cat.name}</td>
              <td className="px-4 py-2 text-gray-600">{cat.description}</td>
              <td className="px-4 py-2 flex gap-3">
                <button 
                  onClick={() => addToFavorites(cat)} 
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md shadow"
                >
                  <FaStar /> Favorite
                </button>
                <button 
                  onClick={() => addToBasket(cat)} 
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md shadow"
                >
                  <FaShoppingCart /> Basket
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoriesPage;
