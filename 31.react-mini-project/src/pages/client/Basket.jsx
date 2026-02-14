import { useShop } from '../../context/ShopContext';
import styles from './Basket.module.css'; 
import { Link } from 'react-router-dom';

const Basket = () => {
  const { basket, removeFromBasket, addToBasket, decreaseBasketItem } = useShop();

  const total = basket.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="container section">
      <div className="section-header">
        <span className="sub-heading">Cart</span>
        <h2 className="heading">Your Basket</h2>
      </div>
      
      {basket.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '50px 0' }}>
          <p>Your basket is empty.</p>
          <Link to="/shop" className="btn btn-primary" style={{ marginTop: '20px' }}>Go to Shop</Link>
        </div>
      ) : (
        <div className={styles.basketContainer}>
          <table className={styles.basketTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {basket.map(p => (
                <tr key={p.id}>
                  <td className={styles.imageCol}>
                    <img
                      src={p.image}
                      alt={p.name}
                      onError={(e) => { e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                    />
                  </td>
                  <td>
                    <h3>{p.name}</h3>
                  </td>
                  <td>${Number(p.price || 0).toFixed(2)}</td>
                  <td>
                    <div className={styles.quantityControl}>
                      <button onClick={() => decreaseBasketItem(p.id)}>-</button>
                      <span>{p.quantity}</span>
                      <button onClick={() => addToBasket(p)}>+</button>
                    </div>
                  </td>
                  <td>${Number((p.price || 0) * (p.quantity || 0)).toFixed(2)}</td>
                  <td>
                    <button className={styles.removeBtn} onClick={() => removeFromBasket(p.id)}>×</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className={styles.basketSummary}>
            <h3>Cart Total</h3>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Delivery</span>
              <span>$0.00</span>
            </div>
            <div className={`${styles.summaryRow} ${styles.total}`}>
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
