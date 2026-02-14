import { NavLink } from 'react-router-dom';
import { useBasket } from '../../context/BasketContext';
import { useWishlist } from '../../context/WishlistContext';

export default function Header() {
  const { count: cartCount } = useBasket();
  const { count: wishCount } = useWishlist();
  return (
    <header>
      <div className="vf-topbar">
        <div className="vf-topbar__col">+ 1235 2355 98</div>
        <div className="vf-topbar__col">YOUREMAIL@EMAIL.COM</div>
        <div className="vf-topbar__col">3-5 BUSINESS DAYS DELIVERY & FREE RETURNS</div>
      </div>
      <div className="vf-navbar">
        <div className="vf-brand">VEGEFOODS</div>
        <nav className="vf-nav">
          <NavLink to="/" className="vf-link">HOME</NavLink>
          <div className="vf-dropdown">
            <NavLink to="/shop" className="vf-link">SHOP ▾</NavLink>
            <div className="vf-dropdown-menu">
              <NavLink to="/shop" className="vf-dropdown-item">Shop</NavLink>
              <NavLink to="/wishlist" className="vf-dropdown-item">Wishlist</NavLink>
              <NavLink to="/products/p1" className="vf-dropdown-item">Single Product</NavLink>
              <NavLink to="/cart" className="vf-dropdown-item">Cart</NavLink>
              <NavLink to="/checkout" className="vf-dropdown-item">Checkout</NavLink>
            </div>
          </div>
          <a href="#" className="vf-link">ABOUT</a>
          <NavLink to="/blog" className="vf-link">BLOG</NavLink>
          <a href="#" className="vf-link">CONTACT</a>
        </nav>
        <div className="vf-actions">
          <NavLink to="/wishlist" className="vf-link">♡ [{wishCount}]</NavLink>
          <NavLink to="/cart" className="vf-link">🛒 [{cartCount}]</NavLink>
        </div>
      </div>
    </header>
  );
}
