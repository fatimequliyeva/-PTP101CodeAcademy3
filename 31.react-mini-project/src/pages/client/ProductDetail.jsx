import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';
import styles from './ProductDetail.module.css'; 
import homeStyles from './Home.module.css';
import { FaRegStar } from 'react-icons/fa';
import productService from '../../services/productService';


const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToBasket } = useShop();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [related, setRelated] = useState([]);

  useEffect(() => {
    const stateProduct = location.state && location.state.product;
    if (stateProduct) {
      setProduct(stateProduct);
      setLoading(false);
      return;
    }
    const fetchProduct = async () => {
      try {
        const data = await productService.getById(id);
        setProduct(data);
      } catch {
        const fallback = [...(JSON.parse(localStorage.getItem('basket')) || []), ...(JSON.parse(localStorage.getItem('wishlist')) || [])]
          .find(p => String(p.id) === String(id));
        if (fallback) {
          setProduct(fallback);
        } else {
          console.error("Error fetching product");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, location.state]);

  const handleAddToBasket = () => {
    for(let i=0; i<quantity; i++) {
        addToBasket(product);
    }
  };

  useEffect(() => {
    const sizes = product?.sizes || ['Small', 'Medium', 'Large'];
    setSize(sizes[0]);
  }, [product]);

  useEffect(() => {
    const loadRelated = async () => {
      try {
        const data = await productService.getAll({ category: product.category, _limit: 4 });
        setRelated(data.filter(p => String(p.id) !== String(product.id)));
      } catch {
        setRelated([]);
      }
    };
    if (product) loadRelated();
  }, [product]);

  return (
    <>
      {loading && <div className="container section">Loading...</div>}
      {!loading && !product && <div className="container section">Product not found</div>}
      {!loading && product && (
      <>
      <div className={homeStyles["product-banner"]}>
        <div className="container">
          <span className={homeStyles["product-breadcrumb"]}>HOME PRODUCT SINGLE</span>
          <h2>PRODUCT SINGLE</h2>
        </div>
      </div>
      <div className="container section">
        <div className={styles.detailContainer}>
        <div className={styles.imageSection}>
          <img
            src={product.image}
            alt={product.name}
            onError={(e)=>{ e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
          />
        </div>
        <div className={styles.infoSection}>
          <h2 className={styles.title}>{product.name}</h2>
          <div className={styles.ratingRow}>
            <span className={styles.score}>5.0</span>
            <span className={styles.stars}>
              <FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar /><FaRegStar />
            </span>
            <span className={styles.metaItem}>100 Rating</span>
            <span className={styles.metaItem}>500 Sold</span>
          </div>
          <p className={styles.price}>${Number(product.price || 0).toFixed(2)}</p>
          <p className={styles.description}>
            A small river named Duden flows by their place and supplies it with the necessary regelialia. 
            It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          
          <div className={styles.selectBox}>
            <select className={styles.select} value={size} onChange={e => setSize(e.target.value)}>
              {(product?.sizes || ['Small','Medium','Large']).map(s => (
                <option key={s} value={s}>{s.toUpperCase()}</option>
              ))}
            </select>
          </div>
          <div className={styles.quantity}>
            <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => setQuantity(q => q + 1)}>+</button>
          </div>
          <p className={styles.stock}>
            {(product?.stock && product?.unit) ? `${product.stock} ${product.unit} available` : '600 kg available'}
          </p>
          <button className={styles.addBtn} onClick={handleAddToBasket}>Add to Cart</button>
          <div className={styles.meta}>
            <p>Category: <span>{product.category}</span></p>
          </div>
          <div className={styles.tagCloud}>
            <h4>Tag Cloud</h4>
            <div className={styles.tags}>
              {["FRUITS","TOMATO","MANGO","APPLE","CARROTS","ORANGE","PEPPER","EGGPLANT"].map(t=>(
                <button key={t} className={styles.tag}>{t}</button>
              ))}
            </div>
          </div>
          <div className={styles.paragraph}>
            <h4>Paragraph</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </div>
      </div>
      
      <div className="section">
        <div className="container">
          <div className={homeStyles["section-header"]}>
            <span className={homeStyles["sub-heading"]}>Products</span>
            <h2 className={homeStyles["heading"]}>Related Products</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
          <div className={homeStyles["products-grid"]}>
            {related.map(p => (
              <div key={p.id} className={homeStyles["product-card"]}>
                <div className={homeStyles["product-img"]}>
                  {p.discount ? <span className={homeStyles["status"]}>{p.discount}%</span> : null}
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e)=>{ e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                  />
                </div>
                <div className={homeStyles["product-info"]}>
                  <h3>{p.name}</h3>
                  <div className={homeStyles["price-wrapper"]}>
                    {p.oldPrice ? <span className={homeStyles["price-dc"]}>${Number(p.oldPrice).toFixed(2)}</span> : null}
                    <span className={homeStyles["price-sale"]}>${Number(p.price).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
      )}
    </>
  );
};

export default ProductDetail;
