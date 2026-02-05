import { Link } from "react-router-dom"; //linkim kecid ucun pages
import { useContext } from "react";  //hookum
import { FavoritesContext } from "../context/FavoritesContext"; //provedrim
import { BasketContext } from "../context/BasketContext";  //provedrm
import { FaStar, FaShoppingCart } from "react-icons/fa"; //iconlarim
import { HiOutlineViewList, HiOutlinePlusCircle } from "react-icons/hi"; //daha modern iconlar

function Navbar() {
  const { favorites } = useContext(FavoritesContext); //contextlerim
  const { basket } = useContext(BasketContext);

  //basketde quantilerimi toplamaq ucun reduce methodu yekun deyer qaytarir 
  const basketCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 shadow-lg">
      <div className="flex gap-8 font-semibold items-center">
        <Link 
          to="/" 
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <HiOutlineViewList className="text-xl" /> Categories
        </Link>
  
        <Link 
          to="/add-category" 
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <HiOutlinePlusCircle className="text-xl" /> Add Category
        </Link>

        <Link 
          to="/favorites" 
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaStar className="text-xl text-yellow-400" /> Favorites ({favorites.length}) 
        </Link>

        <Link 
          to="/basket" 
          className="flex items-center gap-2 hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaShoppingCart className="text-xl text-green-300" /> Basket ({basketCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;


