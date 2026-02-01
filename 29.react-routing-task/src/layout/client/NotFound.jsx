 import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">
     Bax, sənin burda nə işin var? 😅
      </h2>
     
      <Link 
        to="/" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Tez dala qayit!!!
      </Link>
    </div>
  )
}

export default NotFound
