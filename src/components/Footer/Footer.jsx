import React from 'react';
import facebookIcon from '../../assets/facebook_icon.png';
import linkedinIcon from '../../assets/linkedin_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';


import './Footer.css';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            {/* <img src={assets.logo} alt="" /> */}
            <p>At Quick Bites, customer satisfaction is at the heart of everything we do. We are passionate about creating a memorable dining experience. We aim to offer a friendly atmosphere where great food and great service come together seamlessly.</p>
            <div className="footer-social-icons">
            <img src={facebookIcon} alt="Facebook" />
<a href="https://www.linkedin.com/in/preetilk"><img src={linkedinIcon} alt="LinkedIn" /></a>
<img src={twitterIcon} alt="Twitter" />

            </div>
        </div>
        <div className="footer-content-center">
            <h2>Quick Bites</h2>
            <ul>
              <a href="/">Home</a>
              <a href="#explore-menu">Explore Menu</a>
                <a href="#about">About Us</a>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-212-456-7890</li>
                <li>contact@quickites.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Quickbites.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
