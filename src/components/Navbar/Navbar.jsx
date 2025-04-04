import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";



const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <Link to={"/"}>
        <h1> Yummy</h1>
      </Link>
      <ul className="navbar-menu">
        <Link
          to={"/"}
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact-Us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to={"/cart"}>
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>SIGN IN</button>
      </div>
    </div>
  );
};

export default Navbar;
