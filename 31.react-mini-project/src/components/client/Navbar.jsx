import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { useShop } from '../../context/ShopContext';

const Navbar = () => {
  const { basket, wishlist } = useShop();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles['navbar-content']}>
          <div className={styles['navbar-brand']}>
            <Link to="/" className={styles['navbar-logo']}>VEGEFOODS</Link>
            <button
              type="button"
              className={styles['menu-toggle']}
              aria-label="Toggle menu"
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            >
              <FaBars />
            </button>
          </div>

          <ul
            id="primary-navigation"
            className={`${styles['navbar-links']} ${menuOpen ? styles['navbar-links-open'] : ''}`}
            onClick={closeMenu}
          >
            <li><NavLink to="/" end>HOME</NavLink></li>
            <li className={styles.dropdown}>
              <NavLink to="/shop">SHOP</NavLink>
            </li>
            <li><NavLink to="/about">ABOUT</NavLink></li>
            <li><NavLink to="/blog">BLOG</NavLink></li>
            <li className={styles['cart-link']}>
              <Link to="/wishlist" style={{ marginRight: 10 }}>
                <FaHeart /> <span className={styles.count}>[{wishlist.length}]</span>
              </Link>
              <Link to="/cart">
                <FaShoppingCart /> <span className={styles.count}>[{basket.length}]</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
