import ProductItem from "./ProductItem";

function ProductList({ products, onDelete }) {  //delete parent elementden gelr prodycta movcud olan arreydi


  //buda mene qaytaarn gorunen formasidi id ye key vrmisem  productdu mapa salmisam prop driling kimiz
  return (
    <ul className="product-list">
      {products.map(product => (
        <ProductItem
          key={product.id}
          product={product}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ProductList;
