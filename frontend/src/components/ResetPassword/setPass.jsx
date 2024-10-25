import React, { useState,useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { toast } from "react-toastify";
import "./ResetPassword.css";

const SetPass = () => {
  const { email, ltoken } = useParams(); // Get email and ltoken from URL
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  useEffect(() => {
    console.log("Params:", email, ltoken);
  }, [email, ltoken]);
  
  const handleSetPassword = async (e) => {
    e.preventDefault(); 
    if (password.length < 6) {
      toast.error("Password must be at least 8 characters long!", { autoClose: 1000 });
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    setLoading(true); 

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/setpassword/${email}/${ltoken}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }), // Include the new password in the request body
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password set successfully!", { autoClose: 1000 });
        setTimeout(() => {
          navigate("/"); // Redirect to the login page
        }, 1200);
      } else {
        toast.error(data.status || "Failed to set password!", { autoClose: 1000 });
      }
    } catch (error) {
      console.error("Error setting password:", error);
      toast.error("An error occurred!", { autoClose: 1000 });
    } finally {
      setLoading(false); // Set loading back to false
    }
  };

  return (
    <div className="login-register-container">
      <div className="login-register-card">
        <h2>Set New Password</h2>
        <form onSubmit={handleSetPassword}>
          <div className="input-group">
            <label htmlFor="newPassword">New Password:</label>
            <input
              type="password"
              id="newPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirmnewPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmnewPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Setting Password..." : "Set Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetPass;
