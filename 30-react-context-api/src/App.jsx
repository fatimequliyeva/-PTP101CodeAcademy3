
import { Route, Routes } from 'react-router-dom' //burani tam basa dusurem deye elaveeler etmirem
import './App.css'
import CategoriesPage from './pages/CategoriesPage'
import FavoritesPage from './pages/FavoritesPage'
import BasketPage from './pages/BasketPage'
import Navbar from './components/Navbar'
import AddCategoryPage from './pages/AddCategoryPage'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/"element={<CategoriesPage/>}/>
       <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/basket" element={<BasketPage />} />
            <Route path="/add-category" element={<AddCategoryPage />} />
    </Routes>
      
    </>
  )
}

export default App
