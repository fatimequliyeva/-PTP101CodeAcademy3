import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";  // <-- yolunu düzəlt

function Header() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="bg-blue-600 text-white shadow">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">Book Explorer</h1>
        <ul className="flex gap-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}>Home</NavLink></li>
          <li><NavLink to="/books" className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}>Books</NavLink></li>
          <li><NavLink to="/favorites" className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}>Favorites ({favorites.length})</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}>About</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "font-semibold underline" : "hover:underline"}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
