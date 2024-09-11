import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secunorm380.css';

const Secunorm380 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secunorm380-container">
      <h1>Secunorm 380</h1>
      <div className="secunorm380-images">
        {/* Flip cards for product information */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S380-1.png" alt="Secunorm 380" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm380-section">
                <strong className="secunorm380-heading">Product Overview:</strong>
                <p className="secunorm380-info">
                  The Secunorm 380 is designed for professionals who require a reliable cutting tool for daily tasks. Its innovative design includes a long blade extension, making it ideal for cutting thicker materials. The lightweight and durable construction ensures that it can withstand heavy use while providing a comfortable grip for extended periods.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S380-2.png" alt="Secunorm 380 - Usage Details" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm380-section">
                <strong className="secunorm380-heading">Usage Details:</strong>
                <ul className="secunorm380-info">
                  <li><strong>Extended Reach:</strong> The long blade extension is perfect for cutting through thick foam, insulation, and multi-layered materials.</li>
                  <li><strong>Precision Cuts:</strong> The sharp blade ensures clean and precise cuts, making it suitable for both professional and industrial use.</li>
                  <li><strong>Safety First:</strong> Equipped with a dual-sided blade lock mechanism to prevent accidental blade exposure during use.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S380-3.png" alt="Secunorm 380 - Product Details" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm380-section">
                <strong className="secunorm380-heading">Product Details:</strong>
                <ul className="secunorm380-info">
                  <li><strong>Blade Type:</strong> Extra-long, retractable blade designed for deep cuts.</li>
                  <li><strong>Blade Length:</strong> Extended blade length for deeper and more versatile cutting applications.</li>
                  <li><strong>Safety Mechanism:</strong> Dual-sided blade lock and auto-retract feature to enhance user safety.</li>
                  <li><strong>Dimensions:</strong> Slim and ergonomic, designed to fit comfortably in the hand.</li>
                  <li><strong>Weight:</strong> Lightweight design reduces hand fatigue during prolonged use.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S380-4.png" alt="Secunorm 380 - Product Use" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm380-section">
                <strong className="secunorm380-heading">Product Use:</strong>
                <ul className="secunorm380-info">
                  <li><strong>Step 1:</strong> Ensure the blade is retracted before use. To extend the blade, slide the control mechanism forward until it locks into place.</li>
                  <li><strong>Step 2:</strong> Align the blade with the material and apply steady pressure while guiding the cutter along the desired cutting path.</li>
                  <li><strong>Step 3:</strong> After completing the cut, slide the control mechanism backward to retract the blade into the handle.</li>
                  <li><strong>Step 4:</strong> Regularly check the blade for sharpness and replace when necessary to maintain optimal cutting performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards */}
      </div>
      <div className="secunorm380-description">
        <h2>About Product</h2>
        <p>
          - Innovative design for extended reach.<br />
          - Extra-long blade for deeper cuts.<br />
          - Lightweight and durable construction.<br />
          - Dual-sided safety lock for secure operation.
        </p>
        <p>
          The SECUNORM 380 is the go-to tool for professionals who need a reliable cutter with the capability to handle thicker and more demanding materials. Its extended blade and safety features make it an essential tool for various industrial applications.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secunorm380;
