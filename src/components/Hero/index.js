import React from "react";
import "./Hero.scss";
import heroImage from "../../assets/heroImage.jpg";

const Hero = () => (
  <section>
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
      <img src={heroImage} alt="" />
    </div>
  </section>
);

export default Hero;
