import { NavLink, useLocation, useNavigate } from "react-router-dom"; //useloca cari urli oyrenmek naviqet oturmek
import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext"; //favoriler siyahisini idare etmek ucun global contex

function Header() {
  const { favorites } = useContext(FavoritesContext); //favri siyahsis 
  const location = useLocation(); //cariurl
  const navigate = useNavigate(); //yonlednriri
  const isAdmin = location.pathname.startsWith("/admin"); //eger admin yazsisi varsa ora yinelirik

  const handleLogout = () => { //log outa basasnda ana sehifeye gedirik
    navigate("/");
  };


  const clientBg = "bg-gradient-to-r from-indigo-600 to-blue-500";
  const adminBg = "bg-gradient-to-r from-slate-800 to-gray-700";

  return (
    <header className={`${isAdmin ? adminBg : clientBg} text-white shadow-lg`}>
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-extrabold tracking-wide">
          {isAdmin ? "📊 Admin Panel" : "Book Explorer"}
        </h1>

        <ul className="flex gap-6 items-center text-sm md:text-base font-medium">
          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/books"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin/add-book"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Add Book
                </NavLink>
              </li>
              <li className="ml-6 text-sm text-gray-300">Admin: Fatima</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 px-3 py-1 rounded hover:bg-red-800 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Books
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Favorites ({favorites.length})
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-yellow-300 border-b-2 border-yellow-300" : "hover:text-yellow-200 transition"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
