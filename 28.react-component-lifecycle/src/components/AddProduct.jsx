import { useState } from "react";

function AddProduct({ onAdd }) {
  const [name, setName] = useState("");  //text inputu 
  const [price, setPrice] = useState(""); //qiymet 
  const [isDiscounted, setIsDiscounted] = useState(false); //endirim 

  const submitHandler = (e) => {  //form submit olanda isleyir 
    e.preventDefault(); //refresin dayandirir 

    const newProduct = {  //inputdan string geldiryen gore number onu numbere numbere cevrir
      name,
      price: Number(price),
      isDiscounted,
    };

    onAdd(newProduct);  //yeni mehsulu parent companetde godnerir 

    // form reset
    setName("");  //mehsul elave edendne sora form tezmilenir
    setPrice("");
    setIsDiscounted(false); 
  };
  



  //usere mene gorunen bolmedi sumbit olunan hisse ve required sumbit form bos ola bilmez 
  //step en xirda reqem hasniki hardan tenzimlenecek bdie cehck box var bu qeder 
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
