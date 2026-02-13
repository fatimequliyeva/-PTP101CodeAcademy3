import ProductCard from "../../components/ProductCard";

const products = [
  {
    id: 1,
    name: "Bell Pepper",
    category: "Vegetables",
    price: 80,
    oldPrice: 120,
    discount: 30,
    image: "/image/product-1.jpg"
  },
  {
    id: 2,
    name: "Strawberry",
    category: "Fruits",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-2.jpg"
  },
  {
    id: 3,
    name: "Green Beans",
    category: "Vegetables",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-3.jpg"
  },
  {
    id: 4,
    name: "Purple Cabbage",
    category: "Vegetables",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-4.jpg"
  },
  {
    id: 5,
    name: "Tomato",
    category: "Vegetables",
    price: 80,
    oldPrice: 120,
    discount: 30,
    image: "/image/product-5.jpg"
  },
  {
    id: 6,
    name: "Broccoli",
    category: "Vegetables",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-6.jpg"
  },
  {
    id: 7,
    name: "Carrots",
    category: "Vegetables",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-7.jpg"
  },
  {
    id: 8,
    name: "Fruit Juice",
    category: "Juice",
    price: 120,
    oldPrice: 120,
    discount: 0,
    image: "/image/product-8.jpg"
  }
];

const Shop = () => {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
};

export default Shop;
