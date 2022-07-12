import React from "react";
import logo from "../../assets/logo.svg";
import arrowDown from "../../assets/arrowDown.svg";
import searchIcon from "../../assets/searchIcon.svg";
import "./Header.scss";

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header-left">
        <img src={logo} alt="logo" />
        <nav>
          <a href="#about-us">About Us</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#blog">Blog</a>
          <a href="#site-map">Site Map</a>
          <a href="#language">
            Eng <img src={arrowDown} alt="language dropdown" />
          </a>
        </nav>
      </div>
      <form action="" className="header-search">
        <input type="search" name="search" placeholder="Search this site" />
        <button>
          <img src={searchIcon} alt="search" />
        </button>
      </form>
    </div>
  </header>
);

export default Header;
