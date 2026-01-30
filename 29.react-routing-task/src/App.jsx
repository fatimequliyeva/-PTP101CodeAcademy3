import { Routes, Route } from "react-router-dom"
import ClientLayout from "./layout/client/ClientLayout"
import Home from "./pages/client/Home"

function App() {
  return (
    <Routes>
      {/* Client tərəfi */}
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
