import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-green-600">
          VegeFoods
        </Link>

        {/* Navigation */}
        <nav className="space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/admin/products"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Admin Products
          </NavLink>
          <NavLink
            to="/admin/blogs"
            className={({ isActive }) =>
              isActive ? "text-green-600 font-semibold" : "text-gray-700"
            }
          >
            Admin Blogs
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
