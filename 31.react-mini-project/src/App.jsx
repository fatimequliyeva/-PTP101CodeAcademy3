import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import ClientLayout from "./components/client/ClientLayout";
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminBlogs from "./pages/admin/Blogs";
import Home from "./pages/client/Home";
import ClientProducts from "./pages/client/Products";
import ProductDetail from "./pages/client/ProductDetail";
import ClientBlogs from "./pages/client/Blogs";
import BlogDetail from "./pages/client/BlogDetail";
import Basket from "./pages/client/Basket";
import Wishlist from "./pages/client/Wishlist";
import About from "./pages/client/About";

function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<ClientProducts />} />
          <Route path="shop/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<ClientBlogs />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="cart" element={<Basket />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="blogs" element={<AdminBlogs />} />
        </Route>
      </Routes>
    </ToastProvider>
  );
}

export default App;
