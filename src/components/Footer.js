import React from 'react';
import '../styles/Footer.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaHome, FaInfoCircle, FaProductHunt,  FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h1 className="logo-text">Cutter<span>Wala</span></h1>
          <p className="footer-description">
            Leading provider of high-quality cutting tools with a commitment to safety and precision.
          </p>
        </div>
        <div className="footer-section links">
          <ul>
            <li><FaHome className="footer-icon" /><a href="/">Home</a></li>
            <li><FaInfoCircle className="footer-icon" /><a href="/about">About Us</a></li>
            <li><FaProductHunt className="footer-icon" /><a href="/products">Products</a></li>
            <li><FaEnvelope className="footer-icon" /><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact-info">
          <p><strong>Address:</strong> 123 Precision Lane, Tool City, TX 75001</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> info@cutterwala.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
        </div>
        <p>© 2024 Cutterwala. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
