import React from 'react'
import "./Footer.css"
import {assets} from "../../assets/assets"

const Footer = () => {
  return (
    <div className="footer" id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h2>YUMMY</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab eum optio modi commodi doloribus dignissimos necessitatibus cumque asperiores maxime exercitationem?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
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
        <p className="footer-copyright">CopyrightC Tomato.com-All Right Reserved</p>
    </div>
  )
}

export default Footer