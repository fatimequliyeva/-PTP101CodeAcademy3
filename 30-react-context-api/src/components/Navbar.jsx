
import { Link } from "react-router-dom"; //linkim kecid ucun pages
import { useContext } from "react";  //hookum
import { FavoritesContext } from "../context/FavoritesContext"; //provedrim
import { BasketContext } from "../context/BasketContext";  //provedrm
import { FaStar, FaShoppingCart, FaListUl, FaPlusCircle } from "react-icons/fa"; //yaziq iconum + yeni icon

function Navbar() {
  const { favorites } = useContext(FavoritesContext); //contextlerim
  const { basket } = useContext(BasketContext);

  //basketde quantilerimi toplamaq ucun sizinkimi reduce methodu yekum deyer qayratrir 
  const basketCount = basket.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-6 py-4 shadow-md">
      <div className="flex gap-6 font-semibold items-center">
        <Link to="/" className="flex items-center gap-2 hover:text-yellow-300">
          <FaListUl /> Categories
        </Link>
  
        <Link to="/add-category" className="flex items-center gap-2 hover:text-yellow-300">
          <FaPlusCircle /> Add Category
        </Link>
        <Link to="/favorites" className="flex items-center gap-2 hover:text-yellow-300">
          <FaStar /> Favorites ({favorites.length}) 
        </Link>
        <Link to="/basket" className="flex items-center gap-2 hover:text-yellow-300">
          <FaShoppingCart /> Basket ({basketCount})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

