import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secunorm125.css';

const Secunorm125 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secunorm125-container">
      <h1>Secunorm 125</h1>
      <div className="secunorm125-images">
        {/* Flip cards similar to Secupro625 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S125-1.png" alt="Secunorm 125" />
            </div>
            <div className="flip-card-back">
              <div className="secunorm125-section">
                <strong className="secunorm125-heading">Product Overview:</strong>
                <p className="secunorm125-info">
                  The Secunorm 125 is a compact and efficient utility knife designed for precision and ease of use. Its ergonomic handle and sharp blade make it ideal for detailed cutting tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S125-2.png" alt="Secupro 625" />
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
              <img src="S125.png" alt="Secupro 625" />
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
                  <li><strong>Weight:</strong> Light enough for extended use without causing hand fatigue.</li>
                  <li><strong>Color:</strong> Typically available in a range of colors to suit user preferences.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S125-4.png" alt="Secupro 625" />
            </div>
            <div className="flip-card-back">
              <div className="secupro625-section">
                <strong className="secupro625-heading">Product Use:</strong>
                <ul className="secupro625-info">
                  <li><strong>Step 1:</strong> Ensure the blade is retracted before use. If necessary, extend the blade by sliding the control mechanism.</li>
                  <li><strong>Step 2:</strong> Align the cutter with the material you need to cut.</li>
                  <li><strong>Step 3:</strong> Apply gentle pressure and guide the cutter along the desired cutting line.</li>
                  <li><strong>Step 4:</strong> After completing the cut, retract the blade back into the handle to ensure safety.</li>
                  <li><strong>Step 5:</strong> Clean and maintain the cutter regularly to ensure optimal performance and longevity.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Additional flip cards */}
      </div>
      <div className="secunorm125-description">
        <h2>About Product</h2>
        <p>
          - Compact design.<br />
          - Ergonomic handle.<br />
          - High safety standards.
        </p>
        <p>
          The SECUNORM 125 offers a compact form with enhanced safety and ergonomic features, perfect for precise cutting tasks.
        </p>
        <p>
          - Automatic Blade Retraction:The Secunorm 125 is equipped with automatic blade retraction to minimize the risk of injuries. The blade retracts into the handle as soon as it leaves the material being cut.<br></br>
          - Ambidextrous Design:The handle is designed to be equally comfortable for both left and right-handed users, enhancing usability for a wider audience.
        </p>
        <p>
          <strong >Applications:</strong><br></br>
          - Warehouse Operations: Ideal for opening boxes, cutting packaging materials, and other warehouse tasks.<br></br>
          - Craft and Hobby Projects: The precision and ease of use make it perfect for detailed craft work, including cutting paper, foam, and fabric.<br></br>
          - Maintenance and Repair:Useful for general-purpose cutting tasks in maintenance and repair jobs, such as cutting tapes, ropes, and insulation materials.<br></br>
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secunorm125;
