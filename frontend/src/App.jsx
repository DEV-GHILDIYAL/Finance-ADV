// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './pages/HomePage'; // Make sure to import HomePage component
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SettingsPage from './pages/SettingsPage';
import ProfileForm from './components/FinancialProfile/ProfileForm';
import ResetPassword from './pages/ResetPassword';
import SetPass from './components/ResetPassword/setPass';

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
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/contact" element={<ContactPage/>} />
            <Route path='/financialProfile' element={<ProfileForm/>} />
            <Route path="/resetpassword" element={<ResetPassword/>} />
            <Route path="/auth/setpassword/:email/:ltoken" element={<SetPass />} />
            <Route path="/" element={<h2>Welcome!</h2>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
