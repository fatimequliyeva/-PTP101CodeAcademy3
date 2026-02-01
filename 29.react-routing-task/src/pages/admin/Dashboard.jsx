import { FaBook, FaHeart, FaChartLine, FaCrown } from "react-icons/fa"
import LiveSalesChart from "./LiveSalesChart"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10">

        {/* HEADER */}
        <div className="mb-14 text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-yellow-100 p-4 rounded-full shadow">
              <FaCrown className="text-yellow-500 text-4xl" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Admin Panel
          </h1>

          <p className="mt-3 text-gray-500 text-lg">
            Xoş gəlmisiniz,
          </p>

          <p className="text-2xl font-bold text-purple-600 mt-1">
            Fatimə xanım
          </p>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Bu panel vasitəsilə kitabları idarə edə,  
            favoritləri izləyə və satış statistikalarını  
            real vaxtda analiz edə bilərsiniz.
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* BOOKS */}
          <div className="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
            <div className="absolute -top-5 right-6 bg-indigo-600 text-white p-3 rounded-xl shadow-lg">
              <FaBook className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Kitablar</h3>
            <p className="text-gray-500 mt-2">
              Kitabların tam idarəsi
            </p>
            <div className="mt-6 text-sm text-indigo-600 font-medium">
              Əlavə et • Yenilə • Sil
            </div>
          </div>

          {/* FAVORITES */}
          <div className="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
            <div className="absolute -top-5 right-6 bg-pink-500 text-white p-3 rounded-xl shadow-lg">
              <FaHeart className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Favoritlər</h3>
            <p className="text-gray-500 mt-2">
              İstifadəçi sevimliləri
            </p>
            <div className="mt-6 text-sm text-pink-600 font-medium">
              Trendlər • Bəyənilənlər
            </div>
          </div>

          {/* SALES */}
          <div className="relative bg-white border border-gray-100 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition group">
            <div className="absolute -top-5 right-6 bg-emerald-500 text-white p-3 rounded-xl shadow-lg">
              <FaChartLine className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">Satışlar</h3>
            <p className="text-gray-500 mt-2">
              Satış statistikası
            </p>
            <div className="mt-6 text-sm text-emerald-600 font-medium">
              Gəlir • Artım • Analiz
            </div>
          </div>
        </div>

        {/* LIVE SALES */}
        <div className="mb-14">
          <LiveSalesChart />
        </div>

        {/* FOOTER */}
        <div className="text-center text-gray-400 text-sm">
          Sistem sizin nəzarətiniz altındadır ✨
          <span className="block font-semibold text-gray-500 mt-1">
            — Admin Panel
          </span>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
