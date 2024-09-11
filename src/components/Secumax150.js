import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secumax150.css';

const Secumax150 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secumax150-container">
      <h1>Secumax 150</h1>
      <div className="secumax150-images">
        {/* Flip cards similar to Secupro625 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S150-1.png" alt="Secumax 150 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax150-section">
                <strong className="secumax150-heading">Product Overview:</strong>
                <p className="secumax150-info">
                  The Secumax150 offers a blend of safety and efficiency, with a robust design that ensures longevity. Its sharp blade is ideal for various cutting tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S150-8.png" alt="Secupro 625 " />
            </div>
            <div className="flip-card-back">
              <div className="secupro625-section">
                <strong className="secupro625-heading">Usage Details:</strong>
                <ul className="secupro625-info">
                  <li><strong>Material Cutting:</strong> Ideal for cutting cardboard, plastic, foil, and other materials.</li>
                  <li><strong>Precision Cutting:</strong> Suitable for detailed and straight cuts, thanks to its sharp and retractable blade.</li>
                  <li><strong>Safety Features:</strong> Equipped with a blade guard and safety lock to minimize the risk of accidents.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S150-9.png" alt="Secupro 625" />
            </div>
            <div className="flip-card-back">
              <div className="secupro625-section">
                <strong className="secupro625-heading">Product Details:</strong>
                <ul className="secupro625-info">
                  <li><strong>Blade Type:</strong> Retractable stainless steel blade.</li>
                  <li><strong>Handle Material:</strong> Ergonomic, anti-slip grip handle for comfortable use.</li>
                  <li><strong>Blade Length:</strong> Standard blade length suitable for most cutting tasks.</li>
                  <li><strong>Safety Mechanism:</strong> Blade guard, retractable blade, and safety lock.</li>
                  <li><strong>Dimensions:</strong> Compact and lightweight for easy handling and storage.</li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S150-2.png" alt="Secupro 625 " />
            </div>
            <div className="flip-card-back">
              <div className="secupro625-section">
                <strong className="secupro625-heading">Product Use:</strong>
                <ul className="secupro625-info">
                  <li><strong>Step 1:</strong> Ensure the blade is retracted before use. If necessary, extend the blade by sliding the control mechanism.</li>
                  <li><strong>Step 2:</strong> Align the cutter with the material you need to cut.</li>
                  <li><strong>Step 3:</strong> Apply gentle pressure and guide the cutter along the desired cutting line.</li>
                  <li><strong>Step 4:</strong> After completing the cut, retract the blade back into the handle to ensure safety.</li>
                  <li><strong>Step 5:</strong> Clean and maintain the cutter regularly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards */}
      </div>
      <div className="secumax150-description">
        <h2>About Product</h2>
        <p>
          - Safety-focused design.<br />
          - Durable construction.<br />
          - Sharp blade.<br />
          - Comfortable handle.
        </p>
        <p>
          The SECUMAX 150 is engineered for safety and durability, making it a reliable tool for a wide range of cutting applications.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secumax150;