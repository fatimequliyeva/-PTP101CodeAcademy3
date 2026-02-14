import { useShop } from '../../context/ShopContext';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToBasket } = useShop();
  const [qty, setQty] = useState(() => {
    const initial = {};
    return initial;
  });

  const setQuantity = (id, value) => {
    const v = Math.max(1, Number(value) || 1);
    setQty(prev => ({ ...prev, [id]: v }));
  };
  const increase = (id) => {
    const current = qty[id] || 1;
    setQty(prev => ({ ...prev, [id]: current + 1 }));
  };
  const decrease = (id) => {
    const current = qty[id] || 1;
    if (current <= 1) {
      removeFromWishlist(id);
    } else {
      setQty(prev => ({ ...prev, [id]: current - 1 }));
    }
  };
  
  const rows = useMemo(() => {
    return wishlist.map(p => {
      const q = qty[p.id] || 1;
      const total = (p.price || 0) * q;
      return { ...p, q, total };
    });
  }, [wishlist, qty]);
  
  return (
    <div className="section no-text-size">
      <div className={styles["wishlist-banner"]}>
        <div className="container">
          <span className={styles["wishlist-breadcrumb"]}>HOME MY WISHLIST</span>
          <h2>My Wishlist</h2>
        </div>
      </div>

      <div className="container">
        {rows.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '50px 0' }}>
            <p>No items in wishlist.</p>
            <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Go to Shop</Link>
          </div>
        ) : (
          <div className={styles["wishlist-table"]}>
            <div className={styles["wishlist-head"]}>
              <div>Product List</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Total</div>
            </div>
            <div className={styles["wishlist-body"]}>
              {rows.map(p => (
                <div key={p.id} className={styles["wishlist-row"]}>
                  <button
                    className={styles["remove-btn"]}
                    onClick={() => removeFromWishlist(p.id)}
                    aria-label="Remove"
                  >
                    ×
                  </button>
                  <div className={styles["product-cell"]}>
                    <img
                      src={p.image}
                      alt={p.name}
                      onError={(e) => { e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                    />
                    <div className={styles["product-info-col"]}>
                      <h4>{p.name}</h4>
                      <p>Far far away, behind the word mountains, from the countries</p>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          for (let i = 0; i < p.q; i++) addToBasket(p);
                        }}
                        style={{ marginTop: 10, width: 140 }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className={styles["price-cell"]}>${(p.price || 0).toFixed(2)}</div>
                  <div className={styles["quantity-cell"]}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button onClick={() => decrease(p.id)}>-</button>
                      <input
                        type="number"
                        min="1"
                        value={p.q}
                        onChange={(e) => {
                          const n = Number(e.target.value) || 1;
                          if (n <= 0) {
                            removeFromWishlist(p.id);
                          } else {
                            setQuantity(p.id, n);
                          }
                        }}
                        style={{ width: 60, textAlign: 'center' }}
                      />
                      <button onClick={() => increase(p.id)}>+</button>
                    </div>
                  </div>
                  <div className={styles["total-cell"]}>${p.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
  
