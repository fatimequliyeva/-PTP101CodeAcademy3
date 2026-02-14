import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/client/Home'
import Products from './pages/client/Products'
import ProductDetail from './pages/client/ProductDetail'
import Blogs from './pages/client/Blogs'
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminBlogs from './pages/admin/Blogs'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/blogs">Blogs</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
      </Routes>
    </>
  )
}

export default App
