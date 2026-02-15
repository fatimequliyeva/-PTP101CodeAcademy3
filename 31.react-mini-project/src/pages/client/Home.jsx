import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Home.module.css";
import { FaShippingFast, FaLeaf, FaAward, FaHeadset, FaBars, FaShoppingCart, FaHeart, FaQuoteLeft } from "react-icons/fa";
import { useShop } from '../../context/ShopContext';
import { useToast } from '../../context/ToastContext';
import { AnimatePresence, motion as Motion } from "framer-motion";
import productService from '../../services/productService';

import imgFatime from '../../assets/image/fatima.jpg';
import imgJasmin from '../../assets/image/jasmin.jpg';
import imgNefes from '../../assets/image/nefes.jpg';

const Home = () => {
  const { addToBasket, addToWishlist } = useShop();
  const { addToast } = useToast();
  const location = useLocation();
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [productsLoading, setProductsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true);
      try {
        const data = await productService.getAll();
        setFeaturedProducts(data);
      } catch (error) {
        console.error("Error fetching featured products:", error);
        setFeaturedProducts([]);
      } finally {
        setProductsLoading(false);
      }
    };
    fetchProducts();
  }, [location.key]);

  const slides = [
    {
      image: "https://preview.colorlib.com/theme/vegefoods/images/bg_1.jpg",
      title: "We serve Fresh Vegestables & Fruits",
      subtitle: "We deliver organic vegetables & fruits",
    },
    {
      image: "https://preview.colorlib.com/theme/vegefoods/images/bg_2.jpg",
      title: "100% Fresh & Organic Foods",
      subtitle: "We deliver organic vegetables & fruits",
    },
  ];
  const [index, setIndex] = useState(0);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const start = new Date(2022, 3, 22, 0, 0, 0).getTime();
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = Math.max(0, now - start);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="home-page">
      <section className={styles["hero-section"]}>
        <AnimatePresence mode="wait">
          <Motion.div
            key={index}
            className={styles["hero-bg"]}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url('${slides[index].image}')`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="container">
          <div className={styles["hero-content"]}>
            <AnimatePresence mode="wait">
              <Motion.h1
                key={`title-${index}`}
                className={styles["hero-title"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {slides[index].title}
              </Motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <Motion.h2
                key={`sub-${index}`}
                className={styles["hero-subtitle"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {slides[index].subtitle}
              </Motion.h2>
            </AnimatePresence>
            <Link to="/products" className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      </section>
      <section className="services-section section">
        <div className="container">
          <div className={styles["services-grid"]}>
            <div className={styles["service-item"]}>
              <div className={`${styles["service-icon"]} ${styles["flaticon-shipped"]}`}>
                <FaShippingFast />
              </div>
              <h3>FREE SHIPPING</h3>
              <p>ON ORDER OVER $100</p>
            </div>
            <div className={styles["service-item"]}>
              <div className={`${styles["service-icon"]} ${styles["flaticon-diet"]}`}>
                <FaLeaf />
              </div>
              <h3>ALWAYS FRESH</h3>
              <p>PRODUCT WELL PACKAGE</p>
            </div>
            <div className={styles["service-item"]}>
              <div className={`${styles["service-icon"]} ${styles["flaticon-quality"]}`}>
                <FaAward />
              </div>
              <h3>SUPERIOR QUALITY</h3>
              <p>QUALITY PRODUCTS</p>
            </div>
            <div className={styles["service-item"]}>
              <div className={`${styles["service-icon"]} ${styles["flaticon-customer-service"]}`}>
                <FaHeadset />
              </div>
              <h3>SUPPORT</h3>
              <p>24/7 SUPPORT</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles["categories-grid"]}>
            <div className={styles["category-card"]}>
              <div className={styles["category-img"]}>
                <img src="/src/assets/image/category.jpg" alt="Fruits"/>
                <span className={styles["category-label"]}>Fruits</span>
              </div>
            </div>

            <div className={styles["center-info"]}>
              <h3>Vegetables</h3>
              <p>Protect the health of every home</p>
              <Link to="/shop" className={styles["btn"]}>Shop now</Link>
              <div className={styles["center-visual"]}>
                <img src="/src/assets/image/mainphoto2.jpg" alt="Vegetables basket" />
              </div>
            </div>

            <div className={styles["category-card"]}>
              <div className={styles["category-img"]}>
                <img src="/src/assets/image/yasilmeyvesuyu.jpg" alt="Juices"/>
                <span className={styles["category-label"]}>Juices</span>
              </div>
            </div>

            <div className={styles["category-card"]}>
              <div className={styles["category-img"]}>
                <img src="/src/assets/image/ciyelek.jpg" alt="Vegetables"/>
                <span className={styles["category-label"]}>Vegetables</span>
              </div>
            </div>

            <div className={styles["category-card"]}>
              <div className={styles["category-img"]}>
                <img src="/src/assets/image/cerezler.jpg" alt="Dried"/>
                <span className={styles["category-label"]}>Dried</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured-section section">
        <div className="container">
          <div className={styles["section-header"]}>
            <span className={styles["sub-heading"]}>Featured Products</span>
            <h2 className={styles["heading"]}>Our Products</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>

          {productsLoading ? <p>Loading products...</p> : (
          <div className={styles["products-grid"]}>
            {featuredProducts.map((p) => (
              <div key={p.id} className={styles["product-card"]}>
                <div className={styles["product-img"]}>
                  <img
                    src={p.image}
                    alt={p.name}
                    onError={(e) => { e.currentTarget.src = 'https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg'; }}
                  />
                  {p.discount > 0 && (
                    <span className={styles["status"]}>{p.discount}%</span>
                  )}
                  <div className={styles["product-overlay"]}>
                    <Link to={`/shop/${p.id}`} className={styles["overlay-btn"]}>
                      <FaBars />
                    </Link>
                    <button 
                      className={styles["overlay-btn"]}
                      onClick={() => { addToBasket(p); addToast('Added to basket'); }}
                    >
                      <FaShoppingCart />
                    </button>
                    <button 
                      className={styles["overlay-btn"]}
                      onClick={() => { addToWishlist(p); addToast('Added to wishlist', 'info'); }}
                    >
                      <FaHeart />
                    </button>
                  </div>
                </div>
                <div className={styles["product-info"]}>
                  <h3>{p.name}</h3>
                  <div className={styles["price-wrapper"]}>
                    {p.oldPrice && (
                      <span className={styles["price-dc"]}>${Number(p.oldPrice).toFixed(2)}</span>
                    )}
                    <span className={styles["price-sale"]}>${Number(p.price).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
            {featuredProducts.length === 0 && !productsLoading && <p>No products found.</p>}
          </div>
          )}
        </div>
      </section>

      <section className={styles["deal-section"]}>
        <div className="container">
          <div className={styles["deal-content"]}>
            <span className={styles["deal-sub-heading"]}>Best Price For You</span>
            <h2 className={styles["deal-heading"]}>Deal of the day</h2>
            <p className={styles["deal-text"]}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
            <h3 className={styles["deal-product-name"]}>Spinach</h3>
            <div className={styles["deal-price"]}>
              <span className={styles["price-old"]}>$10</span>
              <span className={styles["price-new"]}>now $5 only</span>
            </div>
            <div className={styles["timer"]}>
              <div className={styles["timer-box"]}>
                <span className={styles["timer-num"]}>{timeLeft.days}</span>
                <span className={styles["timer-label"]}>Days</span>
              </div>
              <div className={styles["timer-box"]}>
                <span className={styles["timer-num"]}>{timeLeft.hours}</span>
                <span className={styles["timer-label"]}>Hours</span>
              </div>
              <div className={styles["timer-box"]}>
                <span className={styles["timer-num"]}>{timeLeft.minutes}</span>
                <span className={styles["timer-label"]}>Minutes</span>
              </div>
              <div className={styles["timer-box"]}>
                <span className={styles["timer-num"]}>{timeLeft.seconds}</span>
                <span className={styles["timer-label"]}>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["testimony-section"]}>
        <div className="container">
          <div className={styles["section-header"]}>
            <span className={styles["sub-heading"]}>Testimony</span>
            <h2 className={styles["heading"]}>Our satisfied customer says</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated they
              live in
            </p>
          </div>

          <div className={styles["testimony-grid"]}>
              {[
                { id: 1, name: "Fatime Quliyeva", position: "Software developer", image: imgFatime, text: "Böyük ümidlərə sarılaraq, qızlarıma və sinifimizin əziz müəllimlərinə inanıb bu yola çıxmışam. Övladlarıma qurmaq istədiyim gözəl gələcəkdə onların hər birinin danılmaz payı var. Evladlarımı və müəllimlərimi sonsuz sevgiylə sevirəm. Bu yolda ilk növbədə özümə, daha sonra isə bütün sinif yoldaşlarıma uğurlar arzulayıram." },
                { id: 2, name: "Jasmin Quliyeva", position: "Software'in qizi", image: imgJasmin, text: "Salam, mən Jasminəm. Mən balacayam, 2 yaşım var. Dünyanı çox sevirəm və hər şey mənə maraqlıdır. Anam mənim ən şirin adamımdır, bacım da mənim canımın parçasıdır. Anam oxuyur, mənə söz verib ki, azca böyüyəndə həmişə bir yerdə olacağıq. Mən anamı çox sevirəm və ona balaca ürəyimlə böyük uğurlar arzulayıram." },
                { id: 3, name: "Nefes Quliyeva", position: "Software'in qizi", image: imgNefes, text: "Salam, mənim adım Nəfəsdir. Mənim 5 yaşım var. Bacımı da, anamı da çox sevirəm, onlar mənim üçün çox dəyərlidirlər. Bəzən anam üçün darıxsam da, gözəl günlərimizi xatırlayıram və ümid edirəm. Mən dua edirəm, çünki bilirəm ki, anamın böyük bir məqsədi var. Mən anama inanıram və onu çox-çox sevirəm." }
              ].map((item) => (
                <div key={item.id} className={styles["testimony-item"]}>
                  <div className={styles["user-img-wrap"]}>
                    <div
                      className={styles["user-img"]}
                      style={{
                        backgroundImage: `url(${item.image})`,
                      }}
                    ></div>
                    <span className={styles["quote-icon"]}>
                      <FaQuoteLeft />
                    </span>
                  </div>
                  <div className={styles["text"]}>
                    <p className={styles["mb-4"]}>{item.text}</p>
                    <p className={styles["name"]}>{item.name}</p>
                    <span className={styles["position"]}>{item.position}</span>
                  </div>
                </div>
              ))}
            </div>

          <div className={styles["pagination"]}>
            <span className={`${styles["dot"]} ${styles["active"]}`}></span>
            <span className={styles["dot"]}></span>
            <span className={styles["dot"]}></span>
            <span className={styles["dot"]}></span>
            <span className={styles["dot"]}></span>
          </div>
        </div>
      </section>

      <section className={styles["partner-section"]}>
        <div className="container">
          <div className={styles["partner-grid"]}>
            <div className={styles["partner-item"]}>
              <img src="/src/assets/image/microsoft.png" alt="Microsoft" />
            </div>
            <div className={styles["partner-item"]}>
              <img src="/src/assets/image/android.png" alt="Android" />
            </div>
            <div className={styles["partner-item"]}>
              <img src="/src/assets/image/java.png" alt="Java" />
            </div>
            <div className={styles["partner-item"]}>
              <img src="/src/assets/image/google.png" alt="Google" />
            </div>
            <div className={styles["partner-item"]}>
              <img src="/src/assets/image/adobe.png" alt="Adobe" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
