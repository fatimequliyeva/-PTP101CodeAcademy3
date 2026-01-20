
import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import './App.css'

function App() {


  return (
    <>
      <Header
        title="Product Showcase"
        subtitle="En Yeni mehsullarimiz"
      />
      <ProductList />
      <Footer
        year="2026"
        author="Fatima Guliyeva"
      />

    </>
  )
}

export default App
