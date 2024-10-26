import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);
  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('English');
  const [location, setLocation] = useState(false);

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handlePrivacyChange = () => {
    setPrivacy(!privacy);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleLocationChange = () => {
    setLocation(!location);
  };

  return (
    <div className="settings-container">
      <h2>Settings</h2>
      
      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={handleNotificationsChange}
          />
          Enable Notifications
        </label>
      </div>

      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={privacy}
            onChange={handlePrivacyChange}
          />
          Private Account
        </label>
      </div>

      <div className="settings-option">
        <label>
          Theme:
          <select value={theme} onChange={handleThemeChange}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </div>

      <div className="settings-option">
        <label>
          Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </label>
      </div>

      <div className="settings-option">
        <label>
          <input
            type="checkbox"
            checked={location}
            onChange={handleLocationChange}
          />
          Share Location
        </label>
      </div>

      <button className="save-settings-button">Save Changes</button>
    </div>
  );
};

export default Settings;
