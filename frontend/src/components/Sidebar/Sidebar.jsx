// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>MyApp</h2>
      </div>
      
      <div className="sidebar-menu">
        <Link to="/" className="sidebar-item">Home</Link>
        <Link to="/dashboard" className="sidebar-item">Dashboard</Link>
        <Link to="/profile" className="sidebar-item">Profile</Link>
        <Link to="/settings" className="sidebar-item">Settings</Link>
      </div>

      <div className="sidebar-footer">
        <Link to="/login" className="sidebar-button">Login</Link>
        <Link to="/register" className="sidebar-button">Register</Link>
      </div>
    </div>
  );
};

export default Sidebar;
