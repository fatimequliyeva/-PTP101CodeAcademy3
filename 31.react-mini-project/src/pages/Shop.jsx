import { useEffect, useState } from "react";
import { API } from "../services/api";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Shop Page</h1>

      {products.map((product) => (
        <div key={product.id} className="border p-4 mb-4">
          <h2>{product.name}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
