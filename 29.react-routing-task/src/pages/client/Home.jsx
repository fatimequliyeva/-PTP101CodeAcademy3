import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen flex items-center justify-center text-center">
      <div className="bg-white/80 backdrop-blur-md p-10 rounded-2xl shadow-2xl max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 drop-shadow-sm">
          Book Explorer platformasına xoş gəlmisiniz!
        </h2>
        <p className="mt-6 text-lg text-gray-700">
          Burada kitabları araşdıra, favoritlərə əlavə edə və daha çoxunu edə bilərsiniz.
        </p>
        <button
          onClick={() => navigate("/books")}
          className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-800 transition"
        >
          Kitablara Bax
        </button>
      </div>
    </div>
  )
}

export default Home
