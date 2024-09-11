import React, { useState, useEffect } from 'react';
import '../styles/Sliding.css';

const images = [
  'AB5.jpg',
  'AB4.webp',
  'AB3.jpg',
  'AB.png',
  'Back.jpeg',
];

function Sliding() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sliding-section">
      <div className="sliding-images-container" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className="sliding-image"
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <div className="content-container">
        <ul className="list-left">
          <li>Prevents Accidents</li>
          <li>User-Friendly</li>
          <li>Versatile Application</li>
          <li>Durable Design</li>
          <li>Low Maintenance</li>
        </ul>
        <ul className="list-right">
          <li>Advanced Technology</li>
          <li>Compliance Standards</li>
          <li>Customizable Settings</li>
          <li>Power Source</li>
          <li>Emergency Override</li>
        </ul>
      </div>
     
    </div>
  );
}

export default Sliding;
