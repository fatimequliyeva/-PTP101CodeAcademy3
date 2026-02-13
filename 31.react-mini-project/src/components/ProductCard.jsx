import React from "react";

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img
        src={
          product.image ||
          "/image/product-1.jpg" // fallback olaraq public/image içindəki bir şəkil
        }
        alt={product.name}
        className="w-full h-40 object-cover mb-4 rounded"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.category}</p>
      <div className="flex items-center gap-2">
        <span className="text-green-600 font-bold">${product.price}</span>
        {product.oldPrice > product.price && (
          <span className="line-through text-gray-400">${product.oldPrice}</span>
        )}
      </div>
      {product.discount > 0 && (
        <span className="text-sm text-red-500">{product.discount}% OFF</span>
      )}
    </div>
  );
};

export default ProductCard;
