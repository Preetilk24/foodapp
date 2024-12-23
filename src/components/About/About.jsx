import React from 'react';
import { assets } from '../../assets/assets';
import './About.css';
const About = () => {
  return (
    <div className="about-page" id='about'>
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover who we are and what we do.</p>
      </div>
      <div className="about-content">
        <div className="image">
          <img
            src={assets.profile_image}
            alt="profile"
          />
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
          We offer a wide range of carefully crafted dishes that cater to every taste, from classic comfort foods to innovative, healthy options. Each meal is prepared with love, ensuring that every bite is bursting with flavor. Our commitment to quality extends to the way we source our ingredients, partnering with local farms and sustainable suppliers to ensure freshness and environmental responsibility
          </p>
          <p>
          At Quick Bites, customer satisfaction is at the heart of everything we do. We are passionate about creating a memorable dining experience, whether you’re enjoying a meal at one of our locations, ordering for delivery, or grabbing a quick bite on the go. We aim to offer a friendly atmosphere where great food and great service come together seamlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
