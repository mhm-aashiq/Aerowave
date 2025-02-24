import React from 'react';
import './Gallery.css';


const Worldmap = require('../img/world_1.jpg');
const Imp_Exp = require('../img/delivery_guy.jpg');
const Ontime = require('../img/Ontime.jpg');
const Happy_cus = require('../img/happy_cus.jpg');

const images = [
  { src: Worldmap, text: 'WorldWide Shipping' },
  { src: Imp_Exp, text: 'We Delivery at Your Door' },
  { src: Ontime , text: 'Real time Tracking & Deliver' },
  { src: Happy_cus, text: 'Your Happiness is our success' },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image.src} alt={`Gallery ${index + 1}`} />
          <div className="overlay">
            <span>{image.text}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
