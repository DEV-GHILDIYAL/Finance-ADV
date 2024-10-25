// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/HomePage'; // Make sure to import HomePage component
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Container for sidebar and content */}
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<h2>About Us</h2>} />
            <Route path="/settings" element={<h2>Settings</h2>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/" element={<h2>Welcome!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
