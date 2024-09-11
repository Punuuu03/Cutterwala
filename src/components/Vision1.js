import React from 'react';
import '../styles/AboutUs.css';
import visionLogo from '../assets/VM1.webp'; // Replace with your logo path

const Vision1 = () => {
  return (
    <div className="vision-mission-content">
      
      <div className="vision-mission-logo">
        <img src={visionLogo} alt="Vision Logo" />
      </div>
      <h3>Vision Statement</h3>
      <p>
        To be the world's most trusted provider of cutting tools, revolutionizing the industry through innovation, quality, and a relentless focus on user safety.
      </p>
      <h3>Mission Statement</h3>
      <p>
        At Cutterwala, our mission is to lead the cutting tools industry by consistently delivering products that combine advanced technology with unparalleled safety features. We are committed to continuous innovation, ensuring that our tools not only meet but exceed the expectations of our customers. We aim to empower professionals and hobbyists alike with tools that enhance their precision, productivity, and peace of mind.
      </p>
    </div>
  );
};

export default Vision1;
