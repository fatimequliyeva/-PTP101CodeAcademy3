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



export default Footer;
