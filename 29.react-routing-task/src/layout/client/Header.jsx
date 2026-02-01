import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { FavoritesContext } from "../../context/FavoritesContext"
import { FaHeart, FaSignOutAlt } from "react-icons/fa"

function Header() {
  const { favorites } = useContext(FavoritesContext)
  const location = useLocation()
  const navigate = useNavigate()

  const isAdmin = location.pathname.startsWith("/admin")

  const handleLogout = () => {
    navigate("/")
  }

  const baseLink =
    "relative pb-1 transition-all duration-200 hover:text-yellow-300"

  const activeLink =
    "text-yellow-300 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-yellow-300"

  return (
    <header
      className={`${
        isAdmin
          ? "bg-gradient-to-r from-slate-900 to-gray-700"
          : "bg-gradient-to-r from-indigo-600 to-blue-500"
      } text-white shadow-lg`}
    >
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* LOGO */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          {isAdmin ? "📊 Admin Panel" : "📚 Book Explorer"}
        </h1>

        {/* NAV LINKS */}
        <ul className="flex gap-6 items-center text-sm md:text-base font-medium">

          {isAdmin ? (
            <>
              <li>
                <NavLink
                  to="/admin/dashboard"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/books"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  Books
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/add-book"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  Add Book
                </NavLink>
              </li>

              <li className="ml-6 text-sm text-gray-300">
                Admin: <span className="font-semibold">Fatimə</span>
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-600 px-3 py-1 rounded-md hover:bg-red-700 transition"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/books"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  Books
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/favorites"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  <span className="flex items-center gap-1">
                    <FaHeart className="text-pink-300" />
                    Favorites ({favorites.length})
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${baseLink} ${isActive ? activeLink : ""}`
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
  )
}

export default Header
