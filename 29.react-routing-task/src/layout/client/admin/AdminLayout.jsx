import { Outlet, Link } from "react-router-dom"

function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
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

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
