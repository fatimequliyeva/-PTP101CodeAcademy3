import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetail from "../pages/Shop/ProductDetail";
import Blog from "../pages/Blog/Blog";
import BlogDetail from "../pages/Blog/BlogDetail";
import ProductAdmin from "../pages/Admin/Products/ProductList";
import BlogAdmin from "../pages/Admin/Blogs/BlogList";

// Layout
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/admin/products" element={<ProductAdmin />} />
        <Route path="/admin/blogs" element={<BlogAdmin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
