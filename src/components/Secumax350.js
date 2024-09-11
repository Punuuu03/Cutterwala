import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secumax350.css';

const Secumax350 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secumax350-container">
      <h1>Secumax 350</h1>
      <div className="secumax350-images">
        {/* Flip cards with updated internal information */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S350-1.png" alt="Secumax 350 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax350-section">
                <strong className="secumax350-heading">Product Overview:</strong>
                <p className="secumax350-info">
                  The Secumax 350 offers an innovative design focused on user safety and cutting precision. Engineered with a concealed blade, it's the ideal tool for reducing the risk of injuries in busy work environments.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S350-2.png" alt="Secumax 350 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax350-section">
                <strong className="secumax350-heading">Usage Details:</strong>
                <ul className="secumax350-info">
                  <li><strong>Versatile Applications:</strong> Suitable for cutting various materials like cardboard, shrink wrap, and plastic straps.</li>
                  <li><strong>Effortless Handling:</strong> The ergonomic design ensures minimal hand strain during extended use.</li>
                  <li><strong>Enhanced Safety:</strong> The concealed blade minimizes the risk of accidental cuts, making it perfect for high-speed work environments.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S350-3.png" alt="Secumax 350 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax350-section">
                <strong className="secumax350-heading">Product Details:</strong>
                <ul className="secumax350-info">
                  <li><strong>Blade Type:</strong> Concealed stainless steel blade for maximum safety.</li>
                  <li><strong>Blade Length:</strong> Optimized for general-purpose cutting tasks.</li>
                  <li><strong>Safety Mechanism:</strong> Includes a dual-sided blade, safety guard, and an automatic blade retraction system.</li>
                  <li><strong>Dimensions:</strong> Compact and lightweight, easy to carry and store.</li>
                  <li><strong>Weight:</strong> Lightweight design to prevent hand fatigue during prolonged use.</li>
                  <li><strong>Color:</strong> Available in safety-oriented bright colors for easy identification.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S350-4.png" alt="Secumax 350 " />
            </div>
            <div className="flip-card-back">
              <div className="secumax350-section">
                <strong className="secumax350-heading">Product Use:</strong>
                <ul className="secumax350-info">
                  <li><strong>Step 1:</strong> Start with the blade retracted and ensure the safety lock is engaged.</li>
                  <li><strong>Step 2:</strong> Position the Secumax 350 over the material to be cut, aligning it with the intended cutting line.</li>
                  <li><strong>Step 3:</strong> Extend the blade by releasing the safety lock and applying steady pressure as you guide the tool.</li>
                  <li><strong>Step 4:</strong> After cutting, retract the blade fully and re-engage the safety lock before storing.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards can be added here */}
      </div>
      <div className="secumax350-description">
        <h2>About Product</h2>
        <p>
          - Advanced safety features.<br />
          - Ergonomic design for ease of use.<br />
          - Ideal for precision cutting.<br />
          - Lightweight and durable.
        </p>
        <p>
          The SECUMAX 350 is the perfect tool for professionals who need a reliable, safe, and efficient cutting tool for various materials.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secumax350;
