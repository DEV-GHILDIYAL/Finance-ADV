// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/HomePage'; // Make sure to import HomePage component
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SettingsPage from './pages/SettingsPage';
import ProfileForm from './components/FinancialProfileForm/FinancialProfileForm';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true); // Replace with actual authentication logic
  return (
    <Router>
      <div className="app-container"> {/* Container for sidebar and content */}
        <Sidebar loggedIn={loggedIn} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path='/financialProfile' element={<ProfileForm/>} />
            <Route path='/profile' element={<ProfilePage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
