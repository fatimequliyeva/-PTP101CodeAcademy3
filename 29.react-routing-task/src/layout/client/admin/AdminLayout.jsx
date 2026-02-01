import { Outlet, Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { FaBars, FaUserShield } from "react-icons/fa"   // maraqlı ikon (admin üçün qalxan)

function AdminLayout() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    // Burada logout üçün session/localStorage təmizləmə yaza bilərsən
    navigate("/") // logout sonrası ana səhifəyə yönləndir
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      {isOpen && (
        <aside className="w-64 bg-gray-800 text-white p-6 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
          <nav className="space-y-4">
            <Link to="/admin/dashboard" className="block hover:text-blue-400">
              Dashboard
            </Link>
            <Link to="/admin/books" className="block hover:text-blue-400">
              Books
            </Link>
            <Link to="/admin/add-book" className="block hover:text-blue-400">
              Add Book
            </Link>
          </nav>
        </aside>
      )}

      {/* Content */}
      <main className="flex-1 bg-gray-100 relative">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-white shadow px-6 py-4 mb-6">
          <div className="flex items-center gap-4">
            {/* Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-blue-600 text-white px-3 py-2 rounded shadow hover:bg-blue-800 transition"
            >
              <FaBars />
            </button>
            <h1 className="text-xl font-bold text-gray-700">Admin Panel</h1>
          </div>

          {/* Yuxarıda linklər + Admin info */}
          <nav className="flex items-center gap-6">
            <Link to="/admin/dashboard" className="text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            <Link to="/admin/books" className="text-gray-700 hover:text-blue-600">
              Books
            </Link>
            <Link to="/admin/add-book" className="text-gray-700 hover:text-blue-600">
              Add Book
            </Link>

            {/* Admin adı + ikon */}
            <div className="flex items-center gap-2 text-gray-700 font-semibold">
              <FaUserShield className="text-blue-600 text-lg" />
              Baş Admin Fatima Guliyeva
            </div>

            {/* Logout düyməsi */}
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
            >
              Logout
            </button>
          </nav>
        </div>

        {/* Nested route-lar */}
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout
