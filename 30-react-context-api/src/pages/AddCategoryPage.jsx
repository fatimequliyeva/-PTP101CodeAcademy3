import { useContext, useState } from "react"; //hooklarim
import { CategoriesContext } from "../context/CategoriesContext"; //providerim
import { Link } from "react-router-dom"; //geri qayitmaq ucun
import { FaArrowLeft, FaPlusCircle } from "react-icons/fa"; //iconlarim

function AddCategoryPage() {
  const { addCategory } = useContext(CategoriesContext); //contextden funksiya
  const [name, setName] = useState(""); //stateim
  const [description, setDescription] = useState(""); //stateim

  const handleAdd = () => { //funksiyam
    if (name.trim() && description.trim()) {
      addCategory({ name, description }); //yeni category elave edir
      setName(""); //inputu temizleyir
      setDescription("");
      alert("Yeni category əlavə olundu "); 
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 flex items-center gap-2">
        <FaPlusCircle /> Add Category
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          onClick={handleAdd}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          <FaPlusCircle /> Add
        </button>
      </div>

    
      <Link to="/" className="flex items-center gap-2 text-blue-600 hover:underline">
        <FaArrowLeft /> Back to Categories
      </Link>
    </div>
  );
}

export default AddCategoryPage;
