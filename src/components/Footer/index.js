import React from "react";
import "./Footer.scss";
import visaIcon from "../../assets/visa.webp";
import mastercardIcon from "../../assets/mastercard.webp";

const Footer = () => (
  <footer className="footer">
    <div>
      <div className="container">
        <div>
          <h2>PlantMe</h2>
          <form action="">
            <label>
              <p>
                Subscribe and be the first to know about our news and promotions.
              </p>
              <input type="email" name="email" />
            </label>
            <input type="submit" value="Subscribe" />
          </form>
        </div>
        <div className="footer__menu">
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
          <a href="/">Blog</a>
          <a href="/">Site Map</a>
        </div>
        <div className="footer__contacts">
          <h3>Contacts</h3>
          <a href="tel:+38 063 072 0121">+38 063 072 0121</a>
          <a href="mailto:plantme.store@gmail.com">plantme.store@gmail.com</a>
          <div>
            <img src={visaIcon} alt="Visa" />
            <img src={mastercardIcon} alt="Mastercard" />
          </div>
        </div>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="container">
        <div></div>
        <p>© 2022 PlantMe. All Rights Reserved</p>
        <div className="footer__links">
          <a href="/">Privacy Policy</a>
          <a href="/">Terms of service</a>
          <a href="/">Language</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
