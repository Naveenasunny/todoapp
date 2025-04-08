// client/src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (callback) => {
    if (username === 'admin' && password === '12345') {
      callback();
    } else {
      alert('Invalid credentials');
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleLogin(() => navigate('/todos'));
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input className="form-control mb-2" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="password" className="form-control mb-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
