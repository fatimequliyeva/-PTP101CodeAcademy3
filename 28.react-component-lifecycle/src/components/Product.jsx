import { useEffect, useState } from "react"; //hooklardi
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";  //import elemisem jsxlerimi
import SearchProduct from "./SearchProduct";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);  //yaratdqm funksiyondu mentiq burdadi
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/products")  //servere get gondermisemki getsin 
      .then(res => res.json())  //gelen cavab jsona cevrilsin
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);  //evvelce hamsi gosderilsin deye
      });
  }, []);  //bir defe render olusn loppa dusmesin

  const handleAdd = (newProduct) => {
    fetch("http://localhost:3001/products", {  //serevere post soruqudu
      method: "POST",
      headers: { "Content-Type": "application/json" },  //elave etdiyim yeni mehsulda jsona cevrilir gonderilsin
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())  //serverinde mene verdiyi cavabda id ile qaytsin
      .then(data => {
        const updated = [...products, data];  //kohne mehsul usdelik yeni mehsul elave
        setProducts(updated);
        setFilteredProducts(updated); //kohneye deymedeen yeni elave olunur renderde olunur
      });
  };


  const handleDelete = (id) => {  //silinecek mehsul
    fetch(`http://localhost:3001/products/${id}`, {  //idsne gore secir mene 
      method: "DELETE",  //delete methodudu silinir
    }).then(() => {
      const updated = products.filter(p => p.id !== id); //silinen mehsulda hemcinin siyahdidan cxrlr
      setProducts(updated);
      setFilteredProducts(updated); //tezeden siyahi yenilenr
    });
  };


  useEffect(() => {
    if (searchTerm === "") {  //search ve prodyc deyisende yenilenr
      setFilteredProducts(products);  //eger input bosduds hamsn gosder 
    } else {
      setFilteredProducts( // filter ele
        products.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())  //mehsul ado axdrs metnine yazilanda gosder hamsni balaca et,isem axdarisda usdeleik includes mentiqi varsa??
        )
      );
    }
  }, [searchTerm, products]);  //asli saxlamisam axdarisdan ve prodtdan 


  //buda ekrana gorunen hissede bize netice olacaq qaydan 
  return (
    <div className="product-container">  
      <h3 className="product-title">Products</h3> 

      <SearchProduct setSearchTerm={setSearchTerm} />
      <AddProduct onAdd={handleAdd} />
      <ProductList products={filteredProducts} onDelete={handleDelete} />  
    </div>
  );
}

export default Product;
