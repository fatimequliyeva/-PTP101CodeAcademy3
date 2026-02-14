import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useShop } from '../../context/ShopContext';
import { useToast } from '../../context/ToastContext';
import productService from '../../services/productService';

const Products = () => {
  const { addToBasket, addToWishlist, wishlist, removeFromWishlist } = useShop();
  const { addToast } = useToast();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name-asc');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  // Debounce logic
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(t);
  }, [query]);

  // Fetch products with server-side filtering
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const params = {};

        // Search by name (debounce)
        if (debouncedQuery) {
          params.name_like = debouncedQuery;
        }

        // Filter by category
        if (category !== 'All') {
          params.category = category;
        }

        // Sorting
        if (sortBy) {
          const [sort, order] = sortBy.split('-');
          params._sort = sort;
          params._order = order;
        }

        const data = await productService.getAll(params);
        setProducts(data);
        setPage(1);
      } catch (error) {
        console.error("Error fetching products:", error);
        addToast("Failed to load products", "error");
        const fallback = [
          { id: 1, name: 'Bell Pepper', price: 80.00, oldPrice: 120.00, discount: 30, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg' },
          { id: 2, name: 'Strawberry', price: 120.00, category: 'Fruits', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg' },
          { id: 3, name: 'Green Beans', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg' },
          { id: 4, name: 'Purple Cabbage', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg' },
          { id: 5, name: 'Tomatoe', price: 80.00, oldPrice: 120.00, discount: 30, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg' },
          { id: 6, name: 'Brocolli', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg' },
          { id: 7, name: 'Carrots', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg' },
          { id: 8, name: 'Fruit Juice', price: 120.00, category: 'Juice', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg' },
          { id: 9, name: 'Onion', price: 80.00, oldPrice: 120.00, discount: 30, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-9.jpg' },
          { id: 10, name: 'Apple', price: 120.00, category: 'Fruits', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-10.jpg' },
          { id: 11, name: 'Garlic', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-11.jpg' },
          { id: 12, name: 'Chilli', price: 120.00, category: 'Vegetables', image: 'https://preview.colorlib.com/theme/vegefoods/images/product-12.jpg' },
        ];
        setProducts(fallback.filter(p => category === 'All' || p.category === category));
        setPage(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [debouncedQuery, category, sortBy, addToast]);

  return (
    <div className="products-page">
      <div className={styles["product-banner"]}>
        <div className="container">
          <span className={styles["product-breadcrumb"]}>HOME PRODUCTS</span>
          <h2>PRODUCTS</h2>
        </div>
      </div>
      <div className="container section">
        <div className={styles["section-header"]}>
          <span className={styles["sub-heading"]}>Shop</span>
          <h2 className={styles["heading"]}>All Products</h2>
        </div>
        <div className={styles["shop-tabs"]}>
          {["All","Vegetables","Fruits","Juice","Dried"].map(c => (
            <button
              key={c}
              className={`${styles["shop-tab"]} ${category === c ? styles["active"] : ""}`}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className={styles["products-grid"]}>
            {products.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE).map(p => (
              <div key={p.id} className={styles["product-card"]}>
                <div className={styles["product-img"]}>
                  {p.discount ? <span className={styles["status"]}>{p.discount}%</span> : null}
                  <img src={p.image} alt={p.name} />
                  <div className={styles["product-overlay"]}>
                    <button className={styles["overlay-btn"]} onClick={() => addToBasket(p)}>
                      <FaShoppingCart />
                    </button>
                    <button
                      className={`${styles["overlay-btn"]} ${wishlist.some(w => w.id === p.id) ? styles["active"] : ""}`}
                      onClick={() => {
                        const exists = wishlist.some(w => w.id === p.id);
                        if (exists) {
                          removeFromWishlist(p.id);
                        } else {
                          addToWishlist(p);
                        }
                      }}
                    >
                      <FaHeart />
                    </button>
                    <Link to={`/shop/${p.id}`} state={{ product: p }} className={styles["overlay-btn"]}>
                      <FaBars />
                    </Link>
                  </div>
                </div>
                <div className={styles["product-info"]}>
                  <h3>{p.name}</h3>
                  <div className={styles["price-wrapper"]}>
                    {p.oldPrice ? <span className={styles["price-dc"]}>${Number(p.oldPrice).toFixed(2)}</span> : null}
                    <span className={styles["price-sale"]}>${Number(p.price).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            {products.length === 0 && <p>No products found.</p>}
          </div>
        )}
        {!loading && Math.ceil(products.length / PAGE_SIZE) > 1 && (
          <div className={styles["pagination"]}>
            <button
              className={styles["page-btn"]}
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              ‹
            </button>
            {Array.from({ length: Math.ceil(products.length / PAGE_SIZE) }, (_, i) => i + 1).map(n => (
              <button
                key={n}
                className={`${styles["page-btn"]} ${page === n ? styles["active"] : ""}`}
                onClick={() => setPage(n)}
              >
                {n}
              </button>
            ))}
            <button
              className={styles["page-btn"]}
              disabled={page === Math.ceil(products.length / PAGE_SIZE)}
              onClick={() => setPage(p => Math.min(Math.ceil(products.length / PAGE_SIZE), p + 1))}
            >
              ›
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
