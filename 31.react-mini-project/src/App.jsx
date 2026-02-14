import './App.css'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/client/Home'
import Products from './pages/client/Products'
import ProductDetail from './pages/client/ProductDetail'
import Blogs from './pages/client/Blogs'
import Dashboard from './pages/admin/Dashboard'
import AdminProducts from './pages/admin/Products'
import AdminBlogs from './pages/admin/Blogs'
import Header from './components/client/Header'
import Footer from './components/client/Footer'
import BasketPage from './pages/client/Basket'
import WishlistPage from './pages/client/Wishlist'
import Checkout from './pages/client/Checkout'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/products" element={<Navigate to="/shop" replace />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blogs" element={<Navigate to="/blog" replace />} />
        <Route path="/cart" element={<BasketPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/blogs" element={<AdminBlogs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
