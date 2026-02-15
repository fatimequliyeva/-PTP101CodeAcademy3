import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import styles from './Navbar.module.css';
import { useShop } from '../../context/ShopContext';

const Navbar = () => {
  const { basket, wishlist } = useShop();
  const [scrolled, setScrolled] = useState(false);

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
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles['navbar-content']}>
          <Link to="/" className={styles['navbar-logo']}>VEGEFOODS</Link>
          
          <ul className={styles['navbar-links']}>
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
