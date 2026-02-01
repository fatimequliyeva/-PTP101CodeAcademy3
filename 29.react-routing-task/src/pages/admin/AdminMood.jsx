import { useState } from "react"
import { FaFire, FaSmileBeam, FaRegSmile } from "react-icons/fa"

function AdminMood() {
  const [answer, setAnswer] = useState(null)

  const responses = {
    haziram:
      "🔥 Möhtəşəm! Bu enerji ilə bu gün rekord satış gəlir! Uğurlar sizinlədir, Fatimə xanım 👑",
    ortayam:
      "🙂 Əla! Bir az fokus və motivasiya ilə bu günü də qazana bilərsiniz 💪",
    yorğunam:
      "💐 Heç problem deyil. Bəzən istirahət də uğurun bir hissəsidir. Yavaş-yavaş davam 💖",
  }

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-purple-100 rounded-2xl p-8 shadow-xl mb-12">
      
      <p className="text-center text-gray-600 mb-6">
        Bu gün özünüzü necə hiss edirsiniz?
        <br />
        Yüksək satış və böyük gəlir üçün hazırsınızmı? 💰
      </p>

      {!answer && (
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <MoodButton
            color="green"
            icon={<FaFire />}
            text="Bəli, tam hazıram!"
            onClick={() => setAnswer("haziram")}
          />
          <MoodButton
            color="yellow"
            icon={<FaSmileBeam />}
            text="Normal hiss edirəm"
            onClick={() => setAnswer("ortayam")}
          />
          <MoodButton
            color="pink"
            icon={<FaRegSmile />}
            text="Bir az yorğunam"
            onClick={() => setAnswer("yorğunam")}
          />
        </div>
      )}

      {answer && (
        <div className="mt-6 text-center bg-white p-6 rounded-xl shadow-inner animate-fadeIn">
          <p className="text-lg font-semibold text-gray-700">
            {responses[answer]}
          </p>

          <button
            onClick={() => setAnswer(null)}
            className="mt-4 text-sm text-purple-600 hover:underline"
          >
            Yenidən cavab ver
          </button>
        </div>
      )}
    </section>
  )
}

/* 🔘 TƏKRAR EDİLƏN DÜYMƏ KOMPONENTİ */
function MoodButton({ color, icon, text, onClick }) {
  const colors = {
    green: "bg-green-500 hover:bg-green-700",
    yellow: "bg-yellow-400 hover:bg-yellow-600",
    pink: "bg-pink-500 hover:bg-pink-700",
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-6 py-3 text-white rounded-xl shadow transition ${colors[color]}`}
    >
      {icon}
      {text}
    </button>
  )
}

export default AdminMood
