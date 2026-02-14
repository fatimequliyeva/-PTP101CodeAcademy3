import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaChevronUp, FaHeart, FaShippingFast, FaLeaf, FaAward, FaHeadset } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={styles['footer-wrapper']}>
   
      <section className={styles['newsletter-section']}>
        <div className="container">
          <div className={styles['newsletter-content']}>
            <div className={styles['newsletter-text']}>
              <h2>Subcribe to our Newsletter</h2>
              <p>Get e-mail updates about our latest shops and special offers</p>
            </div>
            <form className={styles['newsletter-form']}>
              <input type="email" placeholder="Enter email address" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </section>

      <CounterSection />
      <ServicesRow />


      <footer className={styles['footer-main']}>
        <button className={styles['scroll-top-btn']} onClick={scrollToTop}>
          <FaChevronUp />
        </button>

        <div className="container">
          <div className={styles['footer-grid']}>
            <div className={styles['footer-col']}>
              <h2>Vegefoods</h2>
              <p className={styles['footer-desc']}>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.
              </p>
              <div className={styles['social-icons']}>
                <a href="#" className={styles['social-icon']}><FaTwitter /></a>
                <a href="#" className={styles['social-icon']}><FaFacebookF /></a>
                <a href="#" className={styles['social-icon']}><FaInstagram /></a>
              </div>
            </div>

            <div className={styles['footer-col']}>
              <h2>Menu</h2>
              <ul className={styles['footer-links']}>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/journal">Journal</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h2>Help</h2>
              <div style={{ display: 'flex', gap: '20px' }}>
                <ul className={styles['footer-links']}>
                  <li><Link to="#">Shipping Information</Link></li>
                  <li><Link to="#">Returns & Exchange</Link></li>
                  <li><Link to="#">Terms & Conditions</Link></li>
                  <li><Link to="#">Privacy Policy</Link></li>
                </ul>
                <ul className={styles['footer-links']}>
                  <li><Link to="#">FAQs</Link></li>
                  <li><Link to="#">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className={styles['footer-col']}>
              <h2>Have a Questions?</h2>
              <ul className={styles['contact-info']}>
                <li>
                  <span className={styles['contact-icon']}><FaMapMarkerAlt /></span>
                  <span className={styles['contact-text']}>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li>
                  <span className={styles['contact-icon']}><FaPhone /></span>
                  <span className={styles['contact-text']}><a href="tel:+23923929210">+2 392 3929 210</a></span>
                </li>
                <li>
                  <span className={styles['contact-icon']}><FaEnvelope /></span>
                  <span className={styles['contact-text']}><a href="mailto:info@yourdomain.com">info@yourdomain.com</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['copyright']}>
            <p>
              Copyright &copy;2026 All rights reserved | This template is made with 
              <span className={styles['heart-icon']}><FaHeart /></span> by 
              <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className={styles['colorlib-link']}> Colorlib</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function CounterSection() {
  const targets = [10000, 100, 1000, 100];
  const labels = ['HAPPY CUSTOMERS', 'BRANCHES', 'PARTNER', 'AWARDS'];
  const [values, setValues] = useState([0, 0, 0, 0]);
  const ref = useRef(null);
  const startedRef = useRef(false);
  const bg =
    'https://preview.colorlib.com/theme/vegefoods/images/bg_3.jpg';

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !startedRef.current) {
        startedRef.current = true;
        const duration = 4000;
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setValues(targets.map(t => Math.floor(t * progress)));
          if (progress < 1) {
            requestAnimationFrame(tick);
          } else {
            setValues(targets);
          }
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.25 });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={styles["counter-section"]}
      ref={ref}
      style={{ backgroundImage: `url('${bg}')` }}
    >
      <div className="container">
        <div className={styles["counter-grid"]}>
          {values.map((v, i) => (
            <div key={i} className={styles["counter-item"]}>
              <div className={styles["counter-num"]}>{v.toLocaleString()}</div>
              <div className={styles["counter-label"]}>{labels[i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesRow() {
  return (
    <section className={styles["services-section"]}>
      <div className="container">
        <div className={styles["services-grid"]}>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-pink"]}`}>
              <FaShippingFast />
            </div>
            <h3>FREE SHIPPING</h3>
            <p>ON ORDER OVER $100</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-sand"]}`}>
              <FaLeaf />
            </div>
            <h3>ALWAYS FRESH</h3>
            <p>PRODUCT WELL PACKAGE</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-blue"]}`}>
              <FaAward />
            </div>
            <h3>SUPERIOR QUALITY</h3>
            <p>QUALITY PRODUCTS</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-olive"]}`}>
              <FaHeadset />
            </div>
            <h3>SUPPORT</h3>
            <p>24/7 SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
