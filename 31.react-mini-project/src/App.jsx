
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
