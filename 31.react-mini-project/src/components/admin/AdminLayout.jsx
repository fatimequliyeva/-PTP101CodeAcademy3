import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="admin-layout" style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: '250px', background: '#333', color: '#fff', padding: '20px' }}>
        <h2>Admin Panel</h2>
        <ul style={{ listStyle: 'none', padding: '20px 0' }}>
          <li style={{ marginBottom: '10px' }}><Link to="/admin" style={{ color: '#fff' }}>Dashboard</Link></li>
          <li style={{ marginBottom: '10px' }}><Link to="/admin/products" style={{ color: '#fff' }}>Products</Link></li>
          <li style={{ marginBottom: '10px' }}><Link to="/admin/blogs" style={{ color: '#fff' }}>Blogs</Link></li>
          <li style={{ marginTop: '30px' }}><Link to="/" style={{ color: '#82ae46' }}>Back to Site</Link></li>
        </ul>
      </aside>
      <main style={{ flex: 1, padding: '20px', background: '#f4f4f4' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
