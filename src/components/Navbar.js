import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import '../styles/Navbar.css';
import { FaHome, FaInfoCircle, FaBox, FaEnvelope } from 'react-icons/fa'; // Import icons
import logo from '../assets/logo.png'; // Use your logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-img" />
        <span className="brand-name">Cutter<span>Wala</span></span>
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaHome className="icon" /> HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaInfoCircle className="icon" /> ABOUT US
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/products" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaBox className="icon" /> PRODUCTS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            <FaEnvelope className="icon" /> CONTACT US
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
