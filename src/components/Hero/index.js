import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/heroimage.webp";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div>
        <h1>Lorem ipsum dolor sit amet</h1>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
          tincidunt posuere eu risus cursus. Senectus sed maecenas viverra
          tempus at. Nulla aliquam ac diam amet, sagittis, ut ultricies. Urna
          hendrerit morbi sed gravida. Nulla aliquam ac diam amet, sagittis, ut
          ultricies. Urna hendrerit morbi sed gravida. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.{" "}
        </p>
        <a href="#buy">Buy Now</a>
      </div>
      <img src={heroImage} alt="" height="648" width="648" />
    </div>
  </section>
);

export default Hero;
