import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductGrid.css";

const ProductGrid = () => {
  const products = [
    { name: "Box Cutters", image: "BoxCutters.webp", link: "/boxcutters" },
    { name: "Micro blade", image: "Microblade.png", link: "/microblade" },
    { name: "Secumax 148", image: "Secumax148.png", link: "/secumax148" },
    { name: "Secupro 625", image: "625secupro.jpg", link: "/secupro625" },
    { name: "Secunorm 540", image: "540secunorm.jpg", link: "/secunorm540" },
    { name: "Secunorm 125", image: "125secunorm.jpg", link: "/secunorm125" },
    { name: "Secunorm 380", image: "Secunorm380-1.jpg", link: "/secunorm380" },
    { name: "Secumax 150", image: "150secumax.png", link: "/secumax150" },
    { name: "Secumax 350", image: "350secumax.jpg", link: "/secumax350" },
  ];

  return (
    <div className="product-grid-container">
      <h2 className="product-grid-heading">Products</h2>
      <div className="product-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            {product.link ? (
              <Link to={product.link}>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-name">{product.name}</div>
              </Link>
            ) : (
              <>
                <img src={product.image} alt={product.name} className="product-image" />
                <div className="product-name">{product.name}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
