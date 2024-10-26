// Sidebar.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const token = localStorage.getItem('token'); 
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove token on logout
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="sidebar">
      <h2>My App</h2>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        {token ? (
          <>
            <Link to="/profile" className="footer-link">Profile</Link>
            <button onClick={handleLogout} className="footer-link">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="footer-link">Login</Link>
            <Link to="/register" className="footer-link">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
