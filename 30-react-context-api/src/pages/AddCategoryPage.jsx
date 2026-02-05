import { useContext, useState } from "react"; //hooklarim
import { CategoriesContext } from "../context/CategoriesContext"; //providerim
import { Link, useNavigate } from "react-router-dom"; //geri qayitmaq ucun + navigate
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa"; //iconlarim
import Swal from "sweetalert2";
import { createCategory } from "../services/api"; //api funksiyam

function AddCategoryPage() {
  const { addCategory } = useContext(CategoriesContext); //contextden funksiya
  const [name, setName] = useState(""); //stateim
  const [description, setDescription] = useState(""); //stateim
  const navigate = useNavigate(); //navigate hook

  const handleAdd = async () => { //funksiyam
    if (!name.trim() || !description.trim()) {
      Swal.fire({
        title: "Xəta!",
        text: "Boş məlumat olmaz!",
        icon: "error",
        confirmButtonText: "Bağla"
      });
      return;
    }

    const newCat = { name, description };
    const savedCat = await createCategory(newCat); //api-ye gonderir
    addCategory(savedCat); //contexte elave edir
    setName(""); //inputu temizleyir
    setDescription("");

    Swal.fire({
      title: "Uğurlu!",
      text: "Yeni category əlavə olundu",
      icon: "success",
      timer: 2000,
      showConfirmButton: false
    });

    //2saniye sonra yonledrir
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center gap-3">
        <FaPlusCircle className="text-pink-500" /> Add Category
      </h1>

      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out"
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-3 rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <FaPlusCircle /> Add
        </button>
      </div>

      <Link 
        to="/" 
        className="flex items-center gap-2 text-indigo-600 hover:text-pink-500 transition duration-300 ease-in-out"
      >
        <FaArrowLeft /> Back to Categories
      </Link>
    </div>
  );
}

export default AddCategoryPage;
