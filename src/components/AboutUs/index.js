import React from "react";
import "./AboutUs.scss";
import aboutUsImage from "../../assets/aboutus.webp";

const AboutUs = () => (
  <section className="about-us" id="about-us">
    <div className="container">
      <div className="about-us__item">
        <div>
          <img src={aboutUsImage} alt="" width="180" height="230" />
        </div>
        <div>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
            tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
            hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis,
            ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu
            risus cursus.
          </p>
          <a href="#about-us">Learn more about →</a>
        </div>
      </div>
      <div className="about-us__item">
        <div>
          <img src={aboutUsImage} alt="" width="180" height="230" />
        </div>
        <div>
          <h2>About Us 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
            tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
            tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
            hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis,
            ut ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Eleifend tincidunt posuere eu
            risus cursus.
          </p>
          <a href="#about-us">Learn more about →</a>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
