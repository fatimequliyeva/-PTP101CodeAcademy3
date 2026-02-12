// src/routes/AppRouter.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetail from "../pages/Shop/ProductDetail";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import ProductList from "../pages/Admin/Products/ProductList";
import ProductForm from "../pages/Admin/Products/ProductForm";
import EditProduct from "../pages/Admin/Products/EditProduct";
import BlogList from "../pages/Admin/Blogs/BlogList";
import BlogForm from "../pages/Admin/Blogs/BlogForm";
import EditBlog from "../pages/Admin/Blogs/EditBlog";


const AppRouter = () => {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetail />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetail />} />

      {/* Admin Pages */}
      <Route path="/admin/products" element={<ProductList />} />
      <Route path="/admin/products/add" element={<ProductForm />} />
      <Route path="/admin/products/:id" element={<EditProduct />} />
      <Route path="/admin/blogs" element={<BlogList />} />
      <Route path="/admin/blogs/add" element={<BlogForm />} />
      <Route path="/admin/blogs/:id" element={<EditBlog />} />
    </Routes>
  );
};

export default AppRouter;
