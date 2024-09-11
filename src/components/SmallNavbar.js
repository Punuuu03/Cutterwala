import React from 'react';
import '../styles/SmallNavbar.css';

const SmallNavbar = () => {
  return (
    <div className="small-navbar">
      <div className="contact-info">
        <span className="contact-item">📞 +91 1234567890</span>
        <span className="contact-item">✉️ info@cutterwala.com</span>
        <span className="contact-item">📍 123 Main Street, City, Country</span>
      </div>
    </div>
  );
};

export default SmallNavbar;
