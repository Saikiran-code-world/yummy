import React, { useState, useEffect } from 'react';
import "./Login.css";
import { assets } from '../../assets/assets';

const Login = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreed: false,
  });

  useEffect(() => {
    // Check if the user is already logged in
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.isLoggedIn) {
      setShowLogin(false); // Close the login modal if the user is logged in
    }
  }, [setShowLogin]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agreed) {
      alert("Please agree to the terms to continue.");
      return;
    }

    if (currentState === "Sign Up" && !formData.name.trim()) {
      alert("Name is required for Sign Up.");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    if (currentState === "Sign Up") {
      // Check if user already exists
      const userExists = existingUsers.find((user) => user.email === formData.email);
      if (userExists) {
        alert("User already exists with this email.");
        return;
      }

      // Create a new user
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      // Store the new user in localStorage
      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Mark the user as logged in
      localStorage.setItem("currentUser", JSON.stringify({ ...newUser, isLoggedIn: true }));

      alert("Sign Up successful!");
      setShowLogin(false); // Close the modal on success
    } else if (currentState === "Login") {
      // Validate login credentials
      const matchedUser = existingUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
      );

      if (!matchedUser) {
        alert("Invalid email or password.");
        return;
      }

      // Set user as logged in in localStorage
      localStorage.setItem("currentUser", JSON.stringify({ ...matchedUser, isLoggedIn: true }));

      alert("Login successful!");
      setShowLogin(false); // Close the modal on success
    }
  };

  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="close" />
        </div>
        <div className="login-input">
          {currentState === "Sign Up" && (
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-condition">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.agreed}
            onChange={handleChange}
            required
          />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p>
          {currentState === "Login" ? (
            <>
              Create a New Account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
            </>
          ) : (
            <>
              Already have an Account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login; 
