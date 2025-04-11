import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin, isLoggedIn, onLogout }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Yummy</h2>
      </Link>

      {/* Hamburger Button */}
      <button className="menu-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`navbar-menu ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            <h3>Cart</h3>
          </Link>
        </li>
        <li>
          <Link to="/order" onClick={() => setMenuOpen(false)}>
            <h3>Orders</h3>
          </Link>
        </li>
      </ul>

      {/* Auth Buttons */}
      <div className="navbar-right">
        {isLoggedIn ? (
          <button onClick={onLogout} className="auth-button">
            Logout
          </button>
        ) : (
          <button onClick={() => setShowLogin(true)} className="auth-button">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
