import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secunorm540.css';

const Secunorm540 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secunorm540-container">
      <h1>Secunorm 540</h1>
      <div className="secunorm540-images">
        {/* Flip cards for product information */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S540-1.png" alt="Secunorm 540" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm540-section">
                <strong className="secunorm540-heading">Product Overview:</strong>
                <p className="secunorm540-info">
                  The Secunorm 540 is an advanced cutting tool designed for demanding industrial applications. With a focus on durability and user safety, it features a heavy-duty retractable blade and a robust handle, making it ideal for cutting tough materials like reinforced cardboard and thick plastic. The tool's ergonomic design ensures comfort during extended use.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S540-2.png" alt="Secunorm 540 - Usage Details" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm540-section">
                <strong className="secunorm540-heading">Usage Details:</strong>
                <ul className="secunorm540-info">
                  <li><strong>Heavy-Duty Applications:</strong> Ideal for cutting thick, reinforced cardboard, heavy-duty plastic, and other industrial materials.</li>
                  <li><strong>Precision Cutting:</strong> The sharp blade allows for clean, accurate cuts, essential for tasks requiring precision.</li>
                  <li><strong>Safe Operation:</strong> Features an auto-retract mechanism that reduces blade exposure when not in use, enhancing user safety.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S540-3.png" alt="Secunorm 540 - Product Details" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm540-section">
                <strong className="secunorm540-heading">Product Details:</strong>
                <ul className="secunorm540-info">
                  <li><strong>Blade Type:</strong> Industrial-grade, retractable stainless steel blade.</li>
                  <li><strong>Handle Material:</strong> Reinforced polymer handle with an ergonomic, anti-slip grip.</li>
                  <li><strong>Blade Length:</strong> Extended blade length for deeper cuts.</li>
                  <li><strong>Safety Mechanism:</strong> Dual-safety with an auto-retract and blade guard.</li>
                  <li><strong>Dimensions:</strong> Compact yet sturdy, optimized for industrial use.</li>
                  <li><strong>Weight:</strong> Balanced for both control and comfort during heavy use.</li>
                  <li><strong>Color:</strong> Available in industrial colors to match workspace environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S540-4.png" alt="Secunorm 540 - Product Use" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm540-section">
                <strong className="secunorm540-heading">Product Use:</strong>
                <ul className="secunorm540-info">
                  <li><strong>Step 1:</strong> Ensure the blade is fully retracted before handling. To use, slide the blade control forward to expose the blade.</li>
                  <li><strong>Step 2:</strong> Position the cutter at the starting point of the material. Use steady pressure to guide the cutter along the intended line.</li>
                  <li><strong>Step 3:</strong> For safety, retract the blade immediately after the cut is complete.</li>
                  <li><strong>Step 4:</strong> Regularly clean the blade and handle to maintain optimal cutting performance.</li>
                  <li><strong>Step 5:</strong> Store the cutter in a safe place to prevent accidental injuries.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards */}
      </div>
      <div className="secunorm540-description">
        <h2>About Product</h2>
        <p>
          - Dual-safety mechanism with auto-retract feature.<br />
          - Designed for heavy-duty industrial applications.<br />
          - Ergonomic and user-friendly design.<br />
          - High-quality materials for long-lasting durability.
        </p>
        <p>
          The SECUNORM 540 is the ideal tool for professionals in demanding environments. Its safety features, combined with its powerful cutting capabilities, make it a reliable choice for industrial and commercial use.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secunorm540;
