import { FaBook, FaHeart, FaChartLine, FaCrown } from "react-icons/fa"
import LiveSalesChart from "./LiveSalesChart"

function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 px-4 py-12">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-10">
        
        {/* HEADER */}
        <div className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <FaCrown className="text-yellow-500 text-5xl" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 tracking-tight">
            Xoş gəlmisiniz 💐
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Gözəllər gözəli adminimiz,
          </p>

          <p className="text-2xl font-bold text-pink-600 mt-1">
            Fatimə xanım 👑
          </p>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Bu panel sizin üçün hazırlanıb.  
            Buradan kitabları idarə edə, satışlara nəzarət edə  
            və sistemin bütün gücünü əlinizdə saxlaya bilərsiniz.
          </p>
        </div>

        {/* STAT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          
          {/* BOOKS */}
          <div className="group bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaBook className="text-5xl mb-4 group-hover:rotate-6 transition" />
            <h3 className="text-2xl font-bold">Kitablar</h3>
            <p className="opacity-90 mt-2">Kitabların tam idarəsi</p>
            <div className="mt-6 text-sm opacity-80">
              Əlavə et • Yenilə • Sil
            </div>
          </div>

          {/* FAVORITES */}
          <div className="group bg-gradient-to-br from-pink-500 to-rose-600 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaHeart className="text-5xl mb-4 group-hover:scale-110 transition" />
            <h3 className="text-2xl font-bold">Favoritlər</h3>
            <p className="opacity-90 mt-2">İstifadəçi sevimliləri</p>
            <div className="mt-6 text-sm opacity-80">
              Bəyənilənlər • Trendlər
            </div>
          </div>

          {/* SALES */}
          <div className="group bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <FaChartLine className="text-5xl mb-4 group-hover:-translate-y-1 transition" />
            <h3 className="text-2xl font-bold">Satışlar</h3>
            <p className="opacity-90 mt-2">Satış statistikası</p>
            <div className="mt-6 text-sm opacity-80">
              Gəlir • Artım • Analiz
            </div>
          </div>
        </div>

        {/* 🔥 CANLI SATIŞ CHART */}
        <LiveSalesChart />

        {/* FOOTER */}
        <div className="mt-14 text-center text-gray-400 text-sm">
          Bu sistem sizin nəzarətiniz altındadır ✨  
          <span className="block font-semibold text-gray-500">
            — Admin Fatimə xanım
          </span>
        </div>

      </div>
    </div>
  )
}

export default Dashboard
