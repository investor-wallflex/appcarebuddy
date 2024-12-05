import React, { useState } from "react";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="registration-container">
      <div className="formheaderDiv">
        <h1
          className={isLogin ? "inactive" : "active"}
          onClick={() => setIsLogin(false)}
        >
          Register
        </h1>
        <h1
          className={isLogin ? "active" : "inactive"}
          onClick={() => setIsLogin(true)}
        >
          Login
        </h1>
      </div>

      {/* Text Below Header */}
      {isLogin && <p className="login-info">Sign in with your information</p>}

      {/* Forms */}
      {!isLogin ? (
        <form className="registration-form">
          <label>
            Full Name
            <input type="text" placeholder="Enter your full name" required />
          </label>
          <label>
            Phone Number
            <input type="tel" placeholder="Enter your phone number" required />
          </label>
          <label>
            Address
            <input type="text" placeholder="Enter your address" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            New password
            <input type="text" placeholder="Create Your Password" required />
          </label>
          <label>
            Gender
            <select required>
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
          <label>
            Type of Account
            <select required>
              <option value="">Select your gender</option>
              <option value="healthcare provider">Healthcare Provider</option>
              <option value="health seeker">Health Seeker</option>
            </select>
          </label>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <form className="login-form">
          <label>
            Email
            <input type="email" placeholder="Enter your email" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="Enter your password" required />
          </label>
          <div className="forgot-password">
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
          <div className="signup-link">
            Don't have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                setIsLogin(false); // Toggle to Register view
              }}
            >
              Sign up
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default RegistrationPage;
