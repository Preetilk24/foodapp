import React, { useState } from 'react';
import { food_list } from '../../assets/assets';
import './Header.css';

const Header = () => {
  const images = [
    '/images/header1.jpg',
    '/images/header2.jpg',
    '/images/header3.jpg',
    '/images/header4.jpg',
    '/images/header5.jpg', // add more images if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Navigate to the next slide
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Navigate to the previous slide
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="header-container">
      <div
        className="header-slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: 'transform 0.5s ease-in-out',
        }}
      >
        {images.map((image, index) => (
          <div
            className="header-slide"
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="header-text">
              <h2>Order your favourite food here</h2>
              <p>
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
              </p>
              <button onClick={food_list}>View Menu</button>
            </div>
          </div>
        ))}
      </div>

      <button className="prev-btn" onClick={handlePrev}>
        &#10094; {/* Left arrow */}
      </button>
      <button className="next-btn" onClick={handleNext}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Header;
