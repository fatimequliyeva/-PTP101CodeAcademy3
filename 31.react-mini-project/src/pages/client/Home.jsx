import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { FaShippingFast, FaLeaf, FaAward, FaHeadset, FaBars, FaShoppingCart, FaHeart, FaQuoteLeft } from "react-icons/fa";
import { useShop } from '../../context/ShopContext';
import { useToast } from '../../context/ToastContext';
import { AnimatePresence, motion } from "framer-motion";

import imgFatime from '../../assets/image/fatima.jpg';
import imgJasmin from '../../assets/image/jasmin.jpg';
import imgNefes from '../../assets/image/nefes.jpg';

const Home = () => {
  const { addToBasket, addToWishlist } = useShop();
  const { addToast } = useToast();

  const featuredProducts = [
    { id: 1, name: "Bell Pepper", price: 80.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-1.jpg" },
    { id: 2, name: "Strawberry", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-2.jpg" },
    { id: 3, name: "Green Beans", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-3.jpg" },
    { id: 4, name: "Purple Cabbage", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-4.jpg" },
    { id: 5, name: "Tomatoe", price: 80.00, oldPrice: 120.00, discount: 30, image: "https://preview.colorlib.com/theme/vegefoods/images/product-5.jpg" },
    { id: 6, name: "Brocolli", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-6.jpg" },
    { id: 7, name: "Carrots", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-7.jpg" },
    { id: 8, name: "Fruit Juice", price: 120.00, image: "https://preview.colorlib.com/theme/vegefoods/images/product-8.jpg" },
  ];

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
          <motion.div
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
              <motion.h1
                key={`title-${index}`}
                className={styles["hero-title"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {slides[index].title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h2
                key={`sub-${index}`}
                className={styles["hero-subtitle"]}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
              >
                {slides[index].subtitle}
              </motion.h2>
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

          <div className={styles["products-grid"]}>
            {featuredProducts.map((p) => (
              <div key={p.id} className={styles["product-card"]}>
                <div className={styles["product-img"]}>
                  <img src={p.image} alt={p.name} />
                  {p.discount && (
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
                      <span className={styles["price-dc"]}>${p.oldPrice.toFixed(2)}</span>
                    )}
                    <span className={styles["price-sale"]}>${p.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                { id: 1, name: "Fatime Quliyeva", position: "Software developer", image: imgFatime, text: "Salam menim Adimi onsuzda bilirsiz. boyuk umidlere , qizlarima, ve sinifimizin gozel muellimlerine inanaraq bu yolda addim atiram usaqlarima vere bileceyim gozel gelecekde onlarinda boyuk payi var evladlarimi ve muellimlerimi sevirem en birinci ozume sora sinif yoldaslarima uqurlar arzu edirem" },
                { id: 2, name: "Jasmin Quliyeva", position: "Software'in qizi", image: imgJasmin, text: "Salam menim adim Jasmindir menim 2 yasim var yasim az olsada heyata maraqlarim cox boyukdur anami cox sevirem bacim menim ucun deyerlidi anam hal hazirda tehsil alir ve soz veribki bir muudet sonra her zaman bir yerde olacayq Men anama inaniram ve ona uqurlar arzu edirem" },
                { id: 3, name: "Nefes Quliyeva", position: "Software'in qizi", image: imgNefes, text: "Salam menim adim Nefesdir menim 5 yasim var bacimi ve anami cox sevirem onlar menim ucun deyerlidi bezen anamiz ucun darxsaqda ama gozel gunlerimizi fikrilesib umid edirem, dua edirem yeqin menim anamin bir birldiyi var mende anama inaniram onu cox sevirem" }
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
