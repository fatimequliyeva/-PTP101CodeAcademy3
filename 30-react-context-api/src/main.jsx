
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavoritesProvider } from "./context/FavoritesContext"; 
import { BasketProvider } from "./context/BasketContext";
import { BrowserRouter } from "react-router-dom"
import { CategoriesProvider } from './context/CategoriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
       <CategoriesProvider>
      <FavoritesProvider>
        <BasketProvider>
          <App />
        </BasketProvider>
      </FavoritesProvider>
    </CategoriesProvider>
    </BrowserRouter>
)
