import React, { useState } from "react";
import "./ResetPassword.css";
import { toast, Slide } from "react-toastify";
import { Link, Navigate } from "react-router-dom";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

const SetPassword = ({ setActiveTab }) => {
  const [email, setEmail] = useState("");

  const handleSetpass = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Provide email!", {
        position: "top-right",
        theme: "light",
        transition: Slide,
      });
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/setpassword`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        credentials: "include",
      });

      const checkdata = await response.json();

      if (response.ok) {
        toast.success("Email has been sent to your email", {
          autoClose: 4000,
          position: "top-right",
          theme: "light",
          transition: Slide,
        });
        toast.success("Link to create password will be only working for 5 minute", {
          autoClose: 5000,
          position: "top-right",
          theme: "light",
          transition: Slide,
        });
      } else {
        console.log("Registration failed", checkdata.errorMessage || checkdata.message);
        toast.error("Unable to send data to server", {
          position: "top-right",
          theme: "light",
          transition: Slide,
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Looks like it's not a valid email!", {
        position: "top-right",
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <div className="login-register-container">
      <div className="login-register-card">
        <h2>Set Password</h2>
        <form onSubmit={handleSetpass}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Send Email
          </button>
        </form>
        <p className="toggle-link">
          Already have a password?{" "} <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SetPassword;
