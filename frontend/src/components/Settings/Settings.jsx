import React, { useState } from 'react';
import './Settings.css'; // Make sure to create a CSS file for styling

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [privacy, setPrivacy] = useState(false);

  const handleNotificationsChange = () => {
    setNotifications(!notifications);
  };

  const handlePrivacyChange = () => {
    setPrivacy(!privacy);
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
      <button className="save-settings-button">Save Changes</button>
    </div>
  );
};

export default Settings;
