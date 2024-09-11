import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2>About Us</h2>
        <p>
          Cutterwala is a leading provider of high-quality cutting tools, dedicated to ensuring the safety and precision of our users. Established with a passion for excellence, Cutterwala has grown over the years to become a trusted name in the industry. Our commitment to quality and safety is unwavering, and we strive to provide cutting solutions that meet the highest standards of performance and reliability. Whether for professional use or everyday tasks, Cutterwala's tools are designed to make cutting safer, easier, and more efficient.
        </p>
      </div>
      <div className="founder-message">
        <p><i><strong>Message from the Founder</strong></i></p>
        <p className="quote">
          "Safety is not just a feature; it's a fundamental necessity. At Cutterwala, we believe that every tool should be crafted with the utmost care, ensuring that it protects as well as it performs. Our dedication to safety drives everything we do, from design to delivery." <br/>— [Founder's Name], Founder of Cutterwala
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
