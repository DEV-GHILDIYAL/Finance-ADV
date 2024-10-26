// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming the CSS is in the same folder

const Sidebar = () => {
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
        <Link to="/login" className="footer-link">Login</Link>
        <Link to="/register" className="footer-link">Register</Link>
      </div>
    </div>
  );
};

export default Sidebar;
