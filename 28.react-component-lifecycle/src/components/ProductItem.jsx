function ProductItem({ product, onDelete }) {  //props destruntg olunur
  return (
    <li
      className={`product-item ${product.isDiscounted ? "discounted" : ""}`}  //bunada klas vermisemki endirilmi mehsullar ferqli rengde gosderilsin trnvrya ile seyzmisam sert vermisem 
    >


      
      <span className="product-info">
        {product.name} - ${product.price}  
      </span>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(product.id)}    //adina ve qiymetine gore verrir buttonda delete isine baxacaq idsne gore 
      >
        Delete
      </button>
    </li>
  );
}

export default ProductItem;
