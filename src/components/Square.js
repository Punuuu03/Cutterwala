import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Square.css';

const Square = () => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    switch (product) {
      case 'Secupro 625':
        navigate('/Secupro625');
        break;
      case 'Secunorm 540':
        navigate('/Secunorm540');
        break;
      case 'Secunorm 125':
        navigate('/Secunorm125');
        break;
      case 'Secunorm 380':
        navigate('/Secunorm380');
        break;
      case 'Secumax 150':
        navigate('/Secumax150');
        break;
      case 'Secumax 350':
        navigate('/Secumax350');
        break;
      default:
        break;
    }
  };

  return (
    <div className="square-container">
      <div className="square-left-section">
        {/* Hexagon Images */}
        <div className="hex-row hex-row-1">
          <HexagonImage src="AA.png" />
        </div>
        <div className="hex-row hex-row-2">
          <HexagonImage src="BB.png" />
          <HexagonImage src="CC.png" />
        </div>
        <div className="hex-row hex-row-3">
          <HexagonImage src="DD.png" />
          <HexagonImage src="EE.png" />
          <HexagonImage src="FF.png" />
        </div>
      </div>

      <div className="square-right-container">
        <div className="square-right-section">
          <h2>Our Products</h2>
          <ul className="product-list">
            <li onClick={() => handleProductClick('Secupro 625')}>Secupro 625</li>
            <li onClick={() => handleProductClick('Secunorm 540')}>Secunorm 540</li>
            <li onClick={() => handleProductClick('Secunorm 125')}>Secunorm 125</li>
            <li onClick={() => handleProductClick('Secunorm 380')}>Secunorm 380</li>
            <li onClick={() => handleProductClick('Secumax 150')}>Secumax 150</li>
            <li onClick={() => handleProductClick('Secumax 350')}>Secumax 350</li>
            
          </ul>
        </div>
        <div className="icons-container">
          {/* <img src="Knif.webp" alt="Knife" className="icon-knife" />
          <img src="Chainsaw.png" alt="Chainsaw" className="icon-chainsaw" /> */}
        </div>
      </div>
    </div>
  );
};

const HexagonImage = ({ src }) => {
  return (
    <div className="hexagon" style={{ backgroundImage: `url(${src})` }}></div>
  );
};

export default Square;
