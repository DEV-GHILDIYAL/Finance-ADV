// Login.jsx
import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom'; // Import Link from react-router-dom
import './Login.css'; // Make sure to import the CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Adjust this line based on your server response structure
      } else {
        console.log()
      }
    } catch (error) {
      console.error("Error during Login:", error);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="footer-links">
        <p>Don't have an account? <Link to="/register">Register</Link></p>
        <p>Forgot password? <Link to="/resetpassword">resetpassword</Link></p>
      </div>
    </div>
  );
};

export default Login;
