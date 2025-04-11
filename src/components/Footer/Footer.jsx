import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>YUMMY</h2>
          <p>
            At Yummy, we believe every bite tells a story. From fresh salads to
            indulgent desserts, we serve love on every plate to satisfy your
            cravings and delight your senses.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
            <img src={assets.twitter_icon} alt="Twitter" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-9923457234</li>
            <li>contact@yummy.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">© Yummy.com - All Rights Reserved</p>
    </div>
  );
};

export default Footer;
