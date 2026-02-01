import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js"
import { useEffect, useState } from "react"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

function LiveSalesChart() {
  const [salesData, setSalesData] = useState([
    120, 190, 300, 250, 220, 310, 400
  ])

  // 🔴 CANLI EFFEKT
  useEffect(() => {
    const interval = setInterval(() => {
      setSalesData(prev => {
        const newValue = Math.floor(Math.random() * 500) + 100
        return [...prev.slice(1), newValue]
      })
    }, 3000) // hər 3 saniyə

    return () => clearInterval(interval)
  }, [])

  const data = {
    labels: ["B.e", "Ç.a", "Ç", "C.a", "C", "Ş", "B"],
    datasets: [
      {
        label: "Canlı Satış (₼)",
        data: salesData,
        borderColor: "#16a34a",
        backgroundColor: "rgba(22,163,74,0.2)",
        tension: 0.4,
        fill: true
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: { size: 14 }
        }
      }
    }
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mt-12">
      <h2 className="text-2xl font-bold text-green-600 mb-4 text-center">
        📈 Canlı Satış Statistikası
      </h2>
      <Line data={data} options={options} />
    </div>
  )
}

export default LiveSalesChart
