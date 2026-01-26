import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import SearchProduct from "./SearchProduct";

function Product() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  const handleAdd = (newProduct) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(data => {
        const updated = [...products, data];
        setProducts(updated);
        setFilteredProducts(updated);
      });
  };


  const handleDelete = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      setFilteredProducts(updated);
    });
  };


  useEffect(() => {
    if (searchTerm === "") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter(p =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

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
