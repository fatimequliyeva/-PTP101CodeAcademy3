import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Login = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin';

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await login(username, password);
    if (res.ok) {
      navigate(from, { replace: true });
    } else {
      setError('Düzgün giriş məlumatı deyil');
    }
  };

  return (
    <div className="container section" style={{ maxWidth: 420 }}>
      <h2 style={{ marginBottom: 16 }}>Admin Giriş</h2>
      <form onSubmit={onSubmit} style={{ display: 'grid', gap: 12 }}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          style={{ padding: 10, border: '1px solid #ddd', borderRadius: 6 }}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{ padding: 10, border: '1px solid #ddd', borderRadius: 6 }}
        />
        {error && <div style={{ color: '#dc3545', fontSize: 14 }}>{error}</div>}
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
      <p style={{ marginTop: 12, color: '#808080' }}>Username: admin, Password: admin123</p>
    </div>
  );
};

export default Login;
