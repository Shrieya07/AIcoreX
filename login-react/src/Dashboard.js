import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

export default function Dashboard() {
  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem('auth');
    navigate('/login', { replace: true });
  }

  return (
    <div className="dash-container">
      <div className="dash-card">
        <h2>Welcome!</h2>
        <p>You are logged in.</p>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
