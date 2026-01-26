function ProductItem({ product, onDelete }) {
  return (
    <li
      className={`product-item ${product.isDiscounted ? "discounted" : ""}`}
    >
      <span className="product-info">
        {product.name} - ${product.price}
      </span>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(product.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default ProductItem;
