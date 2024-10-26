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
import FinancialProfileForm from './components/FinancialProfileForm/FinancialProfileForm';
import ProfilePage from './pages/ProfilePage';
import ResetPassword from './pages/ResetPassword';
import SetPass from './components/ResetPassword/setPass';
import RiskToleranceQuiz from './components/RiskToleranceQuiz/RiskToleranceQuiz';

const App = () => {
  return (
    <Router>
      <div className="app-container"> {/* Container for sidebar and content */}
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/dashboard" element={<ProtectedRoute element={<DashboardPage />} />} /> */}
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/settings" element={<SettingsPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path='/financialProfile' element={<FinancialProfileForm/>} />
            <Route path='/profile' element={<ProfilePage/>}/>
            <Route path="/resetpassword" element={<ResetPassword/>} />
            <Route path="/auth/setpassword/:email/:ltoken" element={<SetPass />} />
            <Route path='/riskToleranceTest' element={<RiskToleranceQuiz/>}/>

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
