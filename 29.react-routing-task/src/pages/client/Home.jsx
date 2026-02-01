import { useNavigate } from "react-router-dom"
import { FaBookOpen, FaHeart, FaSearch } from "react-icons/fa"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 min-h-screen">

      
      <section className="container mx-auto px-6 py-32 text-center text-white">
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Book Explorer platformasına xoş gəlmisiniz!
        </h2>

        <p className="mt-6 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
          Burada kitabları araşdıra, favoritlərə əlavə edə və daha çoxunu edə bilərsiniz.
        </p>

        <button
          onClick={() => navigate("/books")}
          className="mt-10 inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition"
        >
          <FaSearch />
          Kitablara Bax
        </button>
      </section>

      
      <section className="bg-slate-100 py-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">

          <div className="p-8 rounded-xl bg-white shadow hover:shadow-xl transition">
            <FaBookOpen className="text-indigo-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Geniş Kitab Kataloqu
            </h3>
            <p className="text-slate-600">
              Müxtəlif janrlarda yüzlərlə kitabı rahat şəkildə araşdır.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow hover:shadow-xl transition">
            <FaHeart className="text-rose-500 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Favoritlər
            </h3>
            <p className="text-slate-600">
              Sevdiyin kitabları bir kliklə favoritlərə əlavə et.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow hover:shadow-xl transition">
            <FaSearch className="text-emerald-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-slate-800">
              Rahat Axtarış
            </h3>
            <p className="text-slate-600">
              Kitabları ad, müəllif və janra görə tez tap.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}

export default Home
