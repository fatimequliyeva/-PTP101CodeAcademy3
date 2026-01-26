import { useState } from "react";

function AddProduct({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isDiscounted, setIsDiscounted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    const newProduct = {
      name,
      price: Number(price),
      isDiscounted,
    };

    onAdd(newProduct); 

    // form reset
    setName("");
    setPrice("");
    setIsDiscounted(false);
  };

  return (
    <form className="add-product-form" onSubmit={submitHandler}>
      <h4 className="form-title">Add Product</h4>

      <input
        className="input-field"
        name="name"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="input-field"
        name="price"
        type="number"
        step="0.01"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />

      <label className="checkbox-label">
        Discounted
        <input
          type="checkbox"
          name="isDiscounted"
          checked={isDiscounted}
          onChange={(e) => setIsDiscounted(e.target.checked)}
        />
      </label>

      <button className="add-btn" type="submit">Add</button>
    </form>
  );
}

export default AddProduct;
