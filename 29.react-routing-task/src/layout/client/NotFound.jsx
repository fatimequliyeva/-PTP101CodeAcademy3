import { Link } from "react-router-dom"
import { FaArrowLeft, FaExclamationTriangle } from "react-icons/fa"

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center">

        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-red-500 text-6xl" />
        </div>

        <h1 className="text-6xl font-extrabold text-red-600 mb-4">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Bax, sənin burda nə işin var? 😅
        </h2>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          <FaArrowLeft />
          Tez dala qayit!!!
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          Səhifə ya silinib, ya da sən bir az macərapərəstsən 😄
        </p>
      </div>
    </div>
  )
}

export default NotFound
