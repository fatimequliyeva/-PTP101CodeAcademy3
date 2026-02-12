// src/components/ProductCard.jsx
import { useBasket } from "../context/BasketContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const { basket, dispatch: basketDispatch } = useBasket();
  const { wishlist, dispatch: wishlistDispatch } = useWishlist();

  const isInBasket = basket.some((item) => item.id === product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const addToBasket = () => {
    if (!isInBasket) {
      basketDispatch({ type: "ADD_TO_BASKET", payload: product });
    }
  };

  const addToWishlist = () => {
    if (!isInWishlist) {
      wishlistDispatch({ type: "ADD_TO_WISHLIST", payload: product });
    }
  };

  return (
    <div className="border p-4 rounded shadow-md bg-white">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>

      <div className="flex gap-2">
        <button
          onClick={addToBasket}
          disabled={isInBasket}
          className={`px-4 py-2 rounded ${
            isInBasket
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600 text-white"
          }`}
        >
          {isInBasket ? "Already in Basket" : "Add to Basket"}
        </button>

        <button
          onClick={addToWishlist}
          disabled={isInWishlist}
          className={`px-4 py-2 rounded ${
            isInWishlist
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {isInWishlist ? "Already in Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
