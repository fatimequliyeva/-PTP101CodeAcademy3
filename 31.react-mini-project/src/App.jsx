import { Routes, Route } from "react-router-dom";
import { ToastProvider } from "./context/ToastContext";
import { AuthProvider } from "./context/AuthContext";
import ClientLayout from "./components/client/ClientLayout";
import AdminLayout from "./components/admin/AdminLayout";
import RequireAdmin from "./components/admin/RequireAdmin";
import Dashboard from "./pages/admin/Dashboard";
import AdminProducts from "./pages/admin/Products";
import AdminBlogs from "./pages/admin/Blogs";
import Login from "./pages/admin/Login";
import Home from "./pages/client/Home";
import ClientProducts from "./pages/client/Products";
import ProductDetail from "./pages/client/ProductDetail";
import ClientBlogs from "./pages/client/Blogs";
import BlogDetail from "./pages/client/BlogDetail";
import Basket from "./pages/client/Basket";
import Wishlist from "./pages/client/Wishlist";
import About from "./pages/client/About";
import Contact from "./pages/client/Contact";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<ClientProducts />} />
            <Route path="shop/:id" element={<ProductDetail />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<ClientBlogs />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Basket />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>

          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin"
            element={
              <RequireAdmin>
                <AdminLayout />
              </RequireAdmin>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="blogs" element={<AdminBlogs />} />
          </Route>
        </Routes>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
