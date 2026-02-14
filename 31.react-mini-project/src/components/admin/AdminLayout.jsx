import React from 'react';
import { Link, Outlet, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import styles from './AdminLayout.module.css';

const AdminLayout = () => {
  const { user, logout } = useAuth();
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <div className={styles.brand}>CODIEPIE</div>
        <div className={styles.groupTitle}>Dashboard</div>
        <ul className={styles.menu}>
          <li><NavLink to="/admin" end className={({isActive})=> isActive ? 'active' : undefined}>Dashboard</NavLink></li>
        </ul>
        <div className={styles.groupTitle}>Ecommerce</div>
        <ul className={styles.menu}>
          <li><NavLink to="/admin/products" className={({isActive})=> isActive ? 'active' : undefined}>Products</NavLink></li>
          <li><NavLink to="/admin/blogs" className={({isActive})=> isActive ? 'active' : undefined}>Blogs</NavLink></li>
        </ul>
        <div className={styles.groupTitle}>Pages</div>
        <ul className={styles.menu}>
          <li><Link to="/">Back to Site</Link></li>
        </ul>
        <div className={styles.sidebarFooter}>
          <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 8 }}>
            {user ? `Hi, ${user.username}` : 'Not signed in'}
          </div>
          <button onClick={logout} className={styles.logout}>Logout</button>
        </div>
      </aside>
      <div className={styles.main}>
        <div className={styles.topbar}>
          <div className={styles.left}>
            <img
              alt="Logo"
              className={styles.logo}
              src="/src/assets/image/logo.png"
              onError={(e)=>{ e.currentTarget.style.display='none'; }}
            />
            <span className={styles.brandTop}>VEGEFOODS</span>
          </div>
          <input className={styles.search} placeholder="Search your needs" />
          <div className={styles.user}>
            <img
              alt="Fatime Quliyeva"
              className={styles.avatar}
              src="/src/assets/image/fatima.jpg"
            />
            <div className={styles.userName}>
              <strong>Fatime Quliyeva</strong>
              <span>Admin</span>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
