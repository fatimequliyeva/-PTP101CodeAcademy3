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
              <h2>Yeniliklərə abunə olun</h2>
              <p>Mağazamız və xüsusi təkliflər haqqında e‑poçt yenilikləri alın</p>
            </div>
            <form className={styles['newsletter-form']}>
              <input type="email" placeholder="E‑poçt ünvanınızı daxil edin" />
              <button type="submit">Abunə ol</button>
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
                Təzə və keyfiyyətli məhsullar, sürətli çatdırılma və müştəri məmnuniyyəti bizim əsas dəyərlərimizdir.
              </p>
              <div className={styles['social-icons']}>
                <a href="#" className={styles['social-icon']}><FaTwitter /></a>
                <a href="#" className={styles['social-icon']}><FaFacebookF /></a>
                <a href="#" className={styles['social-icon']}><FaInstagram /></a>
              </div>
            </div>

            <div className={styles['footer-col']}>
              <h2>Menyu</h2>
              <ul className={styles['footer-links']}>
                <li><Link to="/shop">Mağaza</Link></li>
                <li><Link to="/about">Haqqımızda</Link></li>
                <li><Link to="/journal">Jurnal</Link></li>
                <li><Link to="/contact">Əlaqə</Link></li>
                <li><Link to="/admin/login">Admin</Link></li>
              </ul>
            </div>

            <div className={styles['footer-col']}>
              <h2>Kömək</h2>
              <div style={{ display: 'flex', gap: '20px' }}>
                <ul className={styles['footer-links']}>
                  <li><Link to="#">Çatdırılma məlumatı</Link></li>
                  <li><Link to="#">Qaytarma və dəyişmə</Link></li>
                  <li><Link to="#">Şərtlər və qaydalar</Link></li>
                  <li><Link to="#">Məxfilik siyasəti</Link></li>
                </ul>
                <ul className={styles['footer-links']}>
                  <li><Link to="#">Tez‑tez verilən suallar</Link></li>
                  <li><Link to="#">Əlaqə</Link></li>
                </ul>
              </div>
            </div>

            <div className={styles['footer-col']}>
              <h2>Ünvan və əlaqə</h2>
              <ul className={styles['contact-info']}>
                <li>
                  <span className={styles['contact-icon']}><FaMapMarkerAlt /></span>
                  <span className={styles['contact-text']}>İqor Ağayev küçəsi, ev 3, mənzil 4</span>
                </li>
                <li>
                  <span className={styles['contact-icon']}><FaPhone /></span>
                  <span className={styles['contact-text']}><a href="tel:+994506333402">+994 50 633 34 02</a></span>
                </li>
                <li>
                  <span className={styles['contact-icon']}><FaEnvelope /></span>
                  <span className={styles['contact-text']}><a href="mailto:fatimashg@code.edu.az">fatimashg@code.edu.az</a></span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles['copyright']}>
            <p>
              Copyright &copy;2026 Bütün hüquqlar qorunur | 
              Bu sayt <strong>Fatimə Quliyeva</strong> tərəfindən nəzarət altındadır
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function CounterSection() {
  const targets = [10000, 100, 1000, 100];
  const labels = ['XOŞBƏXT MÜŞTƏRİLƏR', 'FİLİALLAR', 'PARTNYORLAR', 'MÜKAFATLAR'];
  const [values, setValues] = useState([0, 0, 0, 0]);
  const ref = useRef(null);
  const startedRef = useRef(false);
  const bg = 'https://preview.colorlib.com/theme/vegefoods/images/bg_3.jpg';

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
            <h3>PULSUZ ÇATDIRILMA</h3>
            <p>$100 üzəri sifarişlərdə</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-sand"]}`}>
              <FaLeaf />
            </div>
            <h3>HƏMİŞƏ TƏZƏ</h3>
            <p>Məhsullar yaxşı qablaşdırılır</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-blue"]}`}>
              <FaAward />
            </div>
            <h3>YÜKSƏK KEYFİYYƏT</h3>
            <p>Keyfiyyətli məhsullar</p>
          </div>
          <div className={styles["service-item"]}>
            <div className={`${styles["service-circle"]} ${styles["circle-olive"]}`}>
              <FaHeadset />
            </div>
            <h3>DƏSTƏK</h3>
            <p>7/24 xidmət</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
