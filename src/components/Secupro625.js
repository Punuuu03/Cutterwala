import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Secupro625.css';

const Secupro625 = () => {
  const navigate = useNavigate();

  const handleExpressInterestClick = () => {
    navigate('/interestform');
  };

  return (
    <div className="secupro625-container">
      <h1>Secupro 625</h1>
      <div className="secupro625-images">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S625-1.png" alt="Secupro 625" />
            </div>
            <div className="flip-card-back">
              <div className="secupro625-section">
                <strong className="secupro625-heading">Product Overview:</strong>
                <p className="secupro625-info">
                  The Secupro625 is a high-quality utility knife designed for cutting a variety of materials with precision and ease.
                  It is known for its ergonomic design, safety features, and durability, making it an ideal tool for professionals
                  in various industries, including packaging, logistics, and manufacturing.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="S625-2.webp" alt="Secupro 625" />
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
              <img src="S625-5.png" alt="Secupro 625" />
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
              <img src="S625-4.jpg" alt="Secupro 625" />
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
      </div>
      <div className="secupro625-description">
        <h2>About Product</h2>
        <p>
          - Long lever.<br />
          - Long blade.<br />
          - Long-lasting enjoyment.<br />
          - With rounded-tip trapezoid blade.
        </p>
        <p>
          The SECUPRO 625 is at the forefront of our ergonomic squeeze-grip knives. Its aspiration is very clear: premium.
          Because it offers all that professional users require: an aluminium handle, an easy and smooth lever to release the blade,
          a large cutting depth combined with a very high safety due to the fully automatic blade retraction and a comfortable blade change.
          All in all, you will know that you have a high-end cutting tool in your hands.
        </p>
        <button className="express-interest-button" onClick={handleExpressInterestClick}>
          Express Interest
        </button>
      </div>
    </div>
  );
};

export default Secupro625;
