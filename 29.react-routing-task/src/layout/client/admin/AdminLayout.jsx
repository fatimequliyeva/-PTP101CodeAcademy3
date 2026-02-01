import { Outlet, NavLink, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaUserShield, FaSignOutAlt } from "react-icons/fa"

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  const sideLink =
    "block px-3 py-2 rounded-md transition hover:bg-gray-700"

  const sideActive =
    "bg-gray-700 text-yellow-300 font-semibold"

  const topLink =
    "text-gray-700 font-medium hover:text-blue-600 transition"

  const topActive =
    "text-blue-600 border-b-2 border-blue-600"

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside
        className={`${
          isOpen ? "w-64" : "w-0"
        } bg-gray-800 text-white transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-8">
            Admin Panel
          </h2>

          <nav className="space-y-3">
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                `${sideLink} ${isActive ? sideActive : ""}`
              }
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/admin/books"
              className={({ isActive }) =>
                `${sideLink} ${isActive ? sideActive : ""}`
              }
            >
              Books
            </NavLink>

            <NavLink
              to="/admin/add-book"
              className={({ isActive }) =>
                `${sideLink} ${isActive ? sideActive : ""}`
              }
            >
              Add Book
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 flex flex-col">

        {/* TOPBAR */}
        <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
            >
              <FaBars />
            </button>

            {/* TOP NAV */}
            <nav className="hidden md:flex items-center gap-6">
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  `${topLink} ${isActive ? topActive : ""}`
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/admin/books"
                className={({ isActive }) =>
                  `${topLink} ${isActive ? topActive : ""}`
                }
              >
                Books
              </NavLink>

              <NavLink
                to="/admin/add-book"
                className={({ isActive }) =>
                  `${topLink} ${isActive ? topActive : ""}`
                }
              >
                Add Book
              </NavLink>
            </nav>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaUserShield className="text-blue-600" />
              Fatimə Guliyeva
            </div>

            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
