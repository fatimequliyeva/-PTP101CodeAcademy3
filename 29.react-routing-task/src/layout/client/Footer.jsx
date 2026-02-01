function Footer() {
  return (
    <footer className="border-t bg-white text-gray-600">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">
            Book Explorer
          </span>. Bütün hüquqlar qorunur.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="/privacy"
            className="hover:text-gray-900 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="hover:text-gray-900 transition"
          >
            Əlaqə
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
