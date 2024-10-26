// Profile.jsx
import React from 'react';
import './Profile.css'; // Assuming you have a CSS file for styling
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-info">
        <div className="info-item">
          <span className="info-label">Username:</span>
          {/* <span className="info-value">{user.username}</span> */}
        </div>
        <div className="info-item">
          <span className="info-label">First Name:</span>
          {/* <span className="info-value">{user.firstName}</span> */}
        </div>
        <div className="info-item">
          <span className="info-label">Last Name:</span>
          {/* <span className="info-value">{user.lastName}</span> */}
        </div>
        <div className="info-item">
          <span className="info-label">Email:</span>
          {/* <span className="info-value">{user.email}</span> */}
        </div>
        <div className="info-item">
          <span className="info-label">Phone No:</span>
          {/* <span className="info-value">{user.phone}</span> */}
        </div>
      </div>
      <div className="profile-actions">
        <button className="change-password-btn"><Link to="/resetpassword">reset-password</Link></button>
        <button className="risk-allocation-btn"><Link to="/riskToleranceTest">Find your Risk Allocation</Link></button>
      </div>
    </div>
  );
};

export default Profile;
