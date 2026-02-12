// src/components/Navbar.jsx
function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold">My Website</h1>
      <ul className="flex gap-4">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/shop" className="hover:text-gray-300">Shop</a></li>
        <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; // ✅ default export
