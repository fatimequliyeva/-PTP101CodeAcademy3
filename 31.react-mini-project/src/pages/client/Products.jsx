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
  const [query] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [sortBy] = useState('name-asc');
  const [page, setPage] = useState(1);
  const PAGE_SIZE = 8;

  // Debounce logic
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 500);
    return () => clearTimeout(t);
  }, [query]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await productService.getAll();
        setProducts(data);
        setPage(1);
      } catch (error) {
        console.error("Error fetching products:", error);
        addToast("Failed to load products", "error");
        setProducts([]);
        setPage(1);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [addToast]);

  const filteredProducts = products
    .filter(p => category === 'All' || p.category === category)
    .filter(p => p.name.toLowerCase().includes(debouncedQuery.toLowerCase()))
    .sort((a, b) => {
      const [field, order] = sortBy.split('-');
      const modifier = order === 'desc' ? -1 : 1;
      if (field === 'name') return modifier * a.name.localeCompare(b.name);
      if (field === 'price') return modifier * (a.price - b.price);
      return 0;
    });

  const categories = ['All', ...new Set(products.map(p => p.category).filter(Boolean))];

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
          {categories.map(c => (
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
            {filteredProducts.slice((page - 1) * PAGE_SIZE, (page - 1) * PAGE_SIZE + PAGE_SIZE).map(p => (
              <div key={p.id} className={styles["product-card"]}>
                <div className={styles["product-img"]}>
                  {p.discount ? <span className={styles["status"]}>{p.discount}%</span> : null}
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e) => { e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                  />
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
            {filteredProducts.length === 0 && <p>No products found.</p>}
          </div>
        )}
        {!loading && Math.ceil(filteredProducts.length / PAGE_SIZE) > 1 && (
          <div className={styles["pagination"]}>
            <button
              className={styles["page-btn"]}
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
            >
              ‹
            </button>
            {Array.from({ length: Math.ceil(filteredProducts.length / PAGE_SIZE) }, (_, i) => i + 1).map(n => (
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
              disabled={page === Math.ceil(filteredProducts.length / PAGE_SIZE)}
              onClick={() => setPage(p => Math.min(Math.ceil(filteredProducts.length / PAGE_SIZE), p + 1))}
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
