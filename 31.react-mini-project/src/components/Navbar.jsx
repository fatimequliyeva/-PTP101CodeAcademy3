import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Organic Shop</h1>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link to="/shop" className="hover:underline">Shop</Link>
        </li>
        <li>
          <Link to="/blog" className="hover:underline">Blog</Link>
        </li>
        <li>
          <Link to="/about" className="hover:underline">About</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
