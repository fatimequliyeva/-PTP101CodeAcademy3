const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-6 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Organic Shop. All rights reserved.</p>
        <ul className="flex gap-6 mt-4 md:mt-0">
          <li>
            <a href="/about" className="hover:underline">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
          <li>
            <a href="/shop" className="hover:underline">Shop</a>
          </li>
          <li>
            <a href="/blog" className="hover:underline">Blog</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
