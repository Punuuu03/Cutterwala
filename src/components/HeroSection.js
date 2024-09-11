import React, { useRef } from 'react';
import '../styles/HeroSection.css';
import coverImage from '../assets/125secunorm.jpg';

const HeroSection = () => {
  const videoRef = useRef(null);

  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <img src={coverImage} alt="Cover" className="cover-image hidden" />
      <video
        ref={videoRef}
        id="background-video"
        className="background-video"
        loop
        muted
        autoPlay
      >
        <source src={require('../assets/Video.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>Precision and Safety with Every Cut</h1>
        <p>Explore the best cutting tools in the industry</p>
      </div>
    </div>
  );
};

export default HeroSection;
