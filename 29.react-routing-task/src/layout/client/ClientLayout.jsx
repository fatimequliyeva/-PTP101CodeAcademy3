import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function ClientLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-6">
        <div className="rounded-xl shadow-lg bg-white/90 backdrop-blur-sm p-8">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ClientLayout //isdifadeci ucu esas skletdo bir bir birlesdirmisem bir birlerinde arasidna elaqe yaratmisam 
