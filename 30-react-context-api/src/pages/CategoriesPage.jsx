import { useContext } from "react";  //hooklarim
import { CategoriesContext } from "../context/CategoriesContext"; //providerim
import { FavoritesContext } from "../context/FavoritesContext"; //buda provider
import { BasketContext } from "../context/BasketContext"; //buda provider 
import { FaStar, FaShoppingCart, FaTrashAlt, FaInfoCircle, FaEdit } from "react-icons/fa"; //iconlarim
import Swal from "sweetalert2";
import { deleteCategory, fetchCategoryById, updateCategory } from "../services/api";

function CategoriesPage() {
  const { categories, setCategories } = useContext(CategoriesContext); 
  const { addToFavorites } = useContext(FavoritesContext);
  const { addToBasket } = useContext(BasketContext);

  // DELETE
  const handleDelete = (id) => {
    Swal.fire({
      title: "Əminsiniz?",
      text: "Bu kateqoriya silinəcək!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Bəli, sil!",
      cancelButtonText: "İmtina"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteCategory(id);
        setCategories(prev => prev.filter(cat => cat.id !== id));
        Swal.fire("Silindi!", "Kateqoriya uğurla silindi.", "success");
      }
    });
  };

  // INFO
  const handleInfo = async (id) => {
    const localCat = categories.find(c => c.id === id);
    if (localCat) {
      Swal.fire({
        title: localCat.name,
        text: localCat.description || "Məlumat yoxdur",
        icon: "info",
        confirmButtonText: "Bağla"
      });
      return;
    }
    const data = await fetchCategoryById(id);
    Swal.fire({
      title: data.name,
      text: data.description || "Məlumat yoxdur",
      icon: "info",
      confirmButtonText: "Bağla"
    });
  };

  // EDIT
  const handleEdit = async (cat) => {
    const { value: formValues } = await Swal.fire({
      title: "Kateqoriyanı redaktə et",
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Name" value="${cat.name}">` +
        `<input id="swal-input2" class="swal2-input" placeholder="Description" value="${cat.description}">`,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById("swal-input1").value,
          description: document.getElementById("swal-input2").value
        };
      }
    });

    if (formValues) {
      const updated = await updateCategory(cat.id, formValues);
      setCategories(prev => prev.map(c => c.id === cat.id ? updated : c));
      Swal.fire("Yeniləndi!", "Kateqoriya uğurla dəyişdirildi.", "success");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
        📂 Categories
      </h1>
      <table className="min-w-full border border-gray-200 shadow-lg rounded-xl overflow-hidden">
        <thead className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <tr>
            <th className="px-6 py-3 text-left">ID</th>
            <th className="px-6 py-3 text-left">Name</th>
            <th className="px-6 py-3 text-left">Description</th>
            <th className="px-6 py-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {categories.map(cat => (
            <tr key={cat.id} className="hover:bg-gray-50 transition-all duration-300 ease-in-out">
              <td className="px-6 py-3">{cat.id}</td>
              <td className="px-6 py-3 font-semibold text-gray-800">{cat.name}</td>
              <td className="px-6 py-3 text-gray-600">{cat.description}</td>
              <td className="px-6 py-3 flex gap-4">
                <button 
                  onClick={() => handleInfo(cat.id)} 
                  className="text-blue-600 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
                >
                  <FaInfoCircle />
                </button>
                <button 
                  onClick={() => handleEdit(cat)} 
                  className="text-indigo-600 hover:text-indigo-800 transition-transform duration-300 hover:scale-110"
                >
                  <FaEdit />
                </button>
                <button 
                  onClick={() => handleDelete(cat.id)} 
                  className="text-red-600 hover:text-red-800 transition-transform duration-300 hover:scale-110"
                >
                  <FaTrashAlt />
                </button>
                <button 
                  onClick={() => addToFavorites(cat)} 
                  className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                >
                  <FaStar /> Favorite
                </button>
                <button 
                  onClick={() => addToBasket(cat)} 
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
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
