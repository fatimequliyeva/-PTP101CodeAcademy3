import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import './styles/index.css'
import './styles/vege.css'
import App from './App.jsx'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { BlogsProvider } from './context/BlogsContext.jsx'
import { BasketProvider } from './context/BasketContext.jsx'
import { WishlistProvider } from './context/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <BlogsProvider>
          <WishlistProvider>
            <BasketProvider>
              <App />
            </BasketProvider>
          </WishlistProvider>
        </BlogsProvider>
      </ProductsProvider>
    </BrowserRouter>
  </StrictMode>,
)
