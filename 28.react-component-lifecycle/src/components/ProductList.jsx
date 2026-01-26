import ProductItem from "./ProductItem";

function ProductList({ products, onDelete }) {
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
