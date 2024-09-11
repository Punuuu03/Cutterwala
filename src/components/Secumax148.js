import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secumax148.css';

const Secumax148 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secumax148-container">
      <h1>Secumax 148</h1>
      <div className="secumax148-images">
        {/* Flip cards similar to Secumax150 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S148-1.png" alt="Secumax 148 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax148-section">
                <strong className="secumax148-heading">Product Overview:</strong>
                <p className="secumax148-info">
                  The Secumax148 offers safety and precision, with a compact design that ensures ease of use. It's perfect for various light-duty cutting tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S148-3.jpg" alt="Secumax 148 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax148-section">
                <strong className="secumax148-heading">Usage Details:</strong>
                <ul className="secumax148-info">
                  <li><strong>Material Cutting:</strong> Ideal for cutting paper, foil, and other light materials.</li>
                  <li><strong>Precision Cutting:</strong> Suitable for detailed cuts, thanks to its sharp blade.</li>
                  <li><strong>Safety Features:</strong> Includes a safety guard to reduce the risk of injury.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S0-1.png" alt="Secumax 148" />
            </div>
            <div className="flip-card-back">
              <div className="secumax148-section">
                <strong className="secumax148-heading">Product Details:</strong>
                <ul className="secumax148-info">
                  <li><strong>Blade Type:</strong> Fixed stainless steel blade.</li>
                  <li><strong>Handle Material:</strong> Lightweight plastic with ergonomic design.</li>
                  <li><strong>Blade Length:</strong> 15 mm for most cutting tasks.</li>
                  <li><strong>Safety Mechanism:</strong> Includes a blade guard for safety.</li>
                  <li><strong>Dimensions:</strong> Compact and easy to carry.</li>
                  <li><strong>Weight:</strong> Lightweight for easy handling.</li>
                  <li><strong>Color:</strong> Available in various colors.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S148-4.png" alt="Secumax 148 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax148-section">
                <strong className="secumax148-heading">Product Use:</strong>
                <ul className="secumax148-info">
                  <li><strong>Step 1:</strong> Ensure the blade is secure before use.</li>
                  <li><strong>Step 2:</strong> Align the cutter with the material you need to cut.</li>
                  <li><strong>Step 3:</strong> Apply gentle pressure and guide the cutter along the desired line.</li>
                  <li><strong>Step 4:</strong> Clean and maintain the cutter regularly to ensure longevity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards */}
      </div>
      <div className="secumax148-description">
        <h2>About Product</h2>
        <p>
          - Safety-focused design.<br />
          - Compact and lightweight.<br />
          - Sharp blade.<br />
          - Comfortable handle.
        </p>
        <p>
          The SECUMAX 148 is designed for precision and safety, making it ideal for light-duty cutting tasks in various applications.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secumax148;
