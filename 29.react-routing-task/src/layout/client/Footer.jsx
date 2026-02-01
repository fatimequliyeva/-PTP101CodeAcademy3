function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white mt-12">
      <div className="container mx-auto p-6 text-center space-y-3">
        <p className="text-sm md:text-base">
          
          &copy; {new Date().getFullYear()}  <span className="font-semibold">Book Explorer</span>. Bütün hüquqlar qorunur.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <a href="/privacy" className="hover:text-blue-400 transition">Privacy Policy</a>
          <a href="/contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer  //get ful year indiki cari ili avtomatik gossderir 
