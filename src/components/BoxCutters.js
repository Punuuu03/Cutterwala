import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/BoxCutters.css';

const BoxCutters = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="boxcutters-container">
      <h1>Box Cutters</h1>
      <div className="boxcutters-images">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="AR0.png" alt="Auto-Retractable Pen Cutter" />
              <div className="image-label">Auto-Retractable Pen Cutter</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Auto-Retractable Pen Cutter</strong>
                <ul className="boxcutters-info">
                  <li><strong>Blade Type:</strong> Auto-retractable safety blade</li>
                  <li><strong>Blade Length:</strong> 9 mm</li>
                  <li><strong>Handle Material:</strong> Slim, ergonomic design</li>
                  <li><strong>Number of Cutting Edges:</strong> Single replaceable cutting edge</li>
                  <li><strong>Special Features:</strong> Sleek design with auto-retraction for safety</li>
                  <li><strong>Usage:</strong> Ideal for precision cutting of paper, cardboard, and thin plastics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="AR1.png" alt="Auto-Retractable Slim Cutter" />
              <div className="image-label">Auto-Retractable Slim Cutter</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Auto-Retractable Slim Cutter</strong>
                <ul className="boxcutters-info">
                  <li><strong>Blade Type:</strong> Auto-retractable safety blade</li>
                  <li><strong>Blade Length:</strong> 25 mm</li>
                  <li><strong>Handle Material:</strong> High-impact plastic</li>
                  <li><strong>Number of Cutting Edges:</strong> Four replaceable cutting edges</li>
                  <li><strong>Special Features:</strong> Integrated eyelet for strap attachment</li>
                  <li><strong>Usage:</strong> Versatile cutting, ideal for various materials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="AutoRetractable.png" alt="Auto-Retractable Utility Knife" />
              <div className="image-label">Auto-Retractable Utility Knife</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Auto-Retractable Utility Knife</strong>
                <ul className="boxcutters-info">
                  <li><strong>Blade Type:</strong> Retractable stainless steel blade</li>
                  <li><strong>Blade Length:</strong> 18 mm</li>
                  <li><strong>Handle Material:</strong> Ergonomic, anti-slip grip</li>
                  <li><strong>Safety Mechanism:</strong> Blade guard and lock</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="ManualUtility.png" alt="Manual Utility Knife" />
              <div className="image-label">Manual Utility Knife</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Manual Utility Knife</strong>
                <ul className="boxcutters-info">
                <li><strong>Blade Type:</strong> Fixed blade</li>
          <li><strong>Blade Length:</strong> 25 mm</li>
          <li><strong>Handle Material:</strong> Durable plastic with non-slip grip</li>
          <li><strong>Number of Cutting Edges:</strong> Single replaceable cutting edge</li>
          <li><strong>Special Features:</strong> Manual blade exposure with robust locking mechanism</li>
          <li><strong>Usage:</strong> Heavy-duty cutting for materials like cardboard, leather, and rope</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="AS1.png" alt="Adjustable Slim Cutter" />
              <div className="image-label">Adjustable Slim Cutter</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Adjustable Slim Cutter</strong>
                <ul className="boxcutters-info">
                <li><strong>Blade Type:</strong> Adjustable retractable blade</li>
          <li><strong>Blade Length:</strong> 9 mm to 18 mm (adjustable)</li>
          <li><strong>Handle Material:</strong> Slim, ergonomic design with adjustable feature</li>
          <li><strong>Number of Cutting Edges:</strong> Single replaceable cutting edge</li>
          <li><strong>Special Features:</strong> Adjustable blade length for different cutting depths</li>
          <li><strong>Usage:</strong> Precision and versatile cutting for paper, cardboard, and light plastics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="MP0.png" alt="Manual Pen Cutter" />
              <div className="image-label">Manual Pen Cutter</div>
            </div>
            <div className="flip-card-back">
              <div className="boxcutters-section">
                <strong className="boxcutters-heading">Manual Pen Cutter</strong>
                <ul className="boxcutters-info">
                <li><strong>Blade Type:</strong> Fixed blade</li>
          <li><strong>Blade Length:</strong> 15 mm</li>
          <li><strong>Handle Material:</strong> Lightweight aluminum with pen-like grip</li>
          <li><strong>Number of Cutting Edges:</strong> Single replaceable cutting edge</li>
          <li><strong>Special Features:</strong> Compact design for easy portability and storage</li>
          <li><strong>Usage:</strong> Ideal for detailed cutting tasks such as trimming paper or opening packages</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="boxcutters-description">
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default BoxCutters;
