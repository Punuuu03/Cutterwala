import React from 'react';
import '../styles/Microblade.css';

const Secupro = () => {
  return (
    <div className="secupro-container">
      

      <div className="secupro-content">
        <div className="secupro-description">
          <h1>Micro-Blade Cutter</h1>
          <p>
           The Slice Safety Cutter has ergonomic mouse shape, combined with a rubberized non-slip grip, provides comfort and ease when 
           performing tasks such as cutting, trimming, and opening. The cutter features a unique micro-blade with 
           minimal exposure, making it finger-friendly and safe for various materials. Its compact size ensures 
           portability, and with a built-in magnet and key ring hole, it offers convenient storage and easy access. 
           Slice’s effectiveness in industrial settings has made it a trusted choice, and it’s now recognized as a 
           leading safety cutter in homes. Whether on production floors or in daily home use, the Safety Cutter 
           ensures safer environments.
          </p>
          
          <p>
          <h2><strong>Key Features:</strong></h2>
                    <li>Finger-friendly micro-blade with minimal exposure for enhanced safety</li>
                  <li>Ergonomic design with a comfortable, rubberized non-slip grip.</li>
                  <li>Highly portable due to its compact and lightweight design.</li>
                  <li>Convenient storage with a built-in magnet and key ring hole.</li>
                  <li>Suitable for both left- and right-handed users.</li>
                  <li>Slice blades are known to last 11.2 times longer than traditional blades.</li>
          </p>
            

          <div className="product-details">
            <h2><strong>Ideal For:</strong></h2>
            <p>
            <li>Slicing food packaging</li>
                  <li>Opening boxes, packages, and envelopes</li>
                  <li>Cutting through tough clamshell and blister packaging</li>
                  <li>Handling shrink wrap, bags, labels, and tape</li>
                  <li>Providing a user-friendly option for individuals with arthritis</li>
            </p>
          </div>
        </div>

        <div className="secupro-image">
          <div className="gallery">
            <img src="M3.webp" alt="Product Detail 1" />
            <img src="M4.webp" alt="Product Detail 2" />
            <img src="M8.webp" alt="Product Detail 3" />
          </div>
          <img className="main-image" src="Micro-1.png" alt="SECUPRO 625 NO. 625001" />
        </div>
      </div>
    </div>
  );
};

export default Secupro;
