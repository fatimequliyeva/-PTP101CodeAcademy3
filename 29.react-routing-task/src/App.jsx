import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/client/ClientLayout"
import Home from "./pages/client/Home"
import Books from "./pages/client/Books"
import BookDetail from "./pages/client/BookDetail"
import Favorites from "./pages/client/Favorites"
import About from "./layout/client/About"
import Contact from "./layout/client/Contact"
import NotFound from "./layout/client/NotFound"
import AdminLayout from "./layout/client/admin/AdminLayout"
import Dashboard from "./pages/admin/Dashboard"
import AdminBooks from "./pages/admin/AdminBooks"
import AddBook from "./pages/admin/AddBook"

function App() {
  return (
    <Routes>
      {/* Client tərəfi */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Admin tərəfi */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="books" element={<AdminBooks />} />
        <Route path="add-book" element={<AddBook />} />
      </Route>
    </Routes>
  )
}

export default App
