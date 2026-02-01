import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

function ClientLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default ClientLayout
