import React from "react";
import "./ContactUs.scss";
import facebookIcon from "../../assets/facebook.svg";

const ContactUs = () => (
  <section className="contact-us">
    <div className="container">
      <div className="contact-us__info">
        <div>
          <h2>Contact Us</h2>
          <p>
            Fill up the form and ur Team will get back to you within 24 hours.
            Happy to see your message!
          </p>
          <ul>
            <li>
              <img src={facebookIcon} alt="" />
              <a href="tel:+380 93 15 32 456">+380 93 15 32 456</a>
            </li>
            <li>
              <img src={facebookIcon} alt="" />
              <a href="mailto:example@gmail.com">example@gmail.com</a>
            </li>
            <li>
              <img src={facebookIcon} alt="" />
              Pidmurma 5a, Lviv
            </li>
          </ul>
        </div>
        <div>
          <a href="facebook.com" className="social-icon">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="facebook.com" className="social-icon">
            <img src={facebookIcon} alt="" />
          </a>
          <a href="facebook.com" className="social-icon">
            <img src={facebookIcon} alt="" />
          </a>
        </div>
      </div>
      <form action="" className="form">
        <label className="required">
          <span>First Name</span>
          <input type="text" name="firstName" placeholder="John" />
        </label>
        <label className="required">
          <span>Last Name</span>
          <input type="text" name="lastName" placeholder="Doe" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" name="email" placeholder="example@gmail.com" />
        </label>
        <label>
          <span>Phone Number</span>
          <input type="tel" name="phone" placeholder="00 000 00 00" />
        </label>
        <div className="form__positions">
          <label>
            <input type="radio" name="position" />
            <span>UI Developer</span>
          </label>
          <label>
            <input type="radio" name="position" />
            <span>UI/UX Designer</span>
          </label>
          <label>
            <input type="radio" name="position" />
            <span>Accessibility Expert</span>
          </label>
          <label>
            <input type="radio" name="position" />
            <span>QA Engineer</span>
          </label>
          <label>
            <input type="radio" name="position" />
            <span>Other</span>
          </label>
        </div>
        <label className="form__message">
          <span>Message</span>
          <textarea name="message" cols="30" rows="10"></textarea>
        </label>
        <div className="form__terms">
          <label>
            <input type="checkbox" name="terms" />
            <span>Accept the Terms</span>
          </label>
          <label>
            <input type="checkbox" name="terms2" />
            <span>Accept the Terms2</span>
          </label>
        </div>
        <div className="form__submit">
          <input type="submit" value="Send Message" />
        </div>
      </form>
    </div>
  </section>
);

// TODO: links

export default ContactUs;
