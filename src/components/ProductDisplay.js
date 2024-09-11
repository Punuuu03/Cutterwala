import React from "react";
import "../styles/ProductDisplay.css";

const ProductDisplay = () => {
  const products = [
    {
      name: "Secunorm 185",
      image: "185secunorm.png",
      info: [
        "Blade Type: Retractable safety blade",
        "Blade Length: 25 mm",
        "Handle Material: High-impact plastic",
        "Number of Cutting Edges:Four replaceable cutting edges",

        "Special Features: Integrated eyelet for strap attachment",
        "Usage: Versatile cutting, ideal for various materials"
      ]
    },
    {
      name: "Secunorm 500",
      image: "500secunorm.png",
      info: [
        "Blade Type:Retractable safety blade",
        "Blade Length: 25 mm",
        "Replaceable Blade Mechanism: Tool-free blade change",
        "Handle Material: Ergonomic silver aluminum",
        "Special Features: Soft-grip slider, tool-free blade change,",
        "Usage: General cutting, comfortable for extended use"
      ]
    },
    {
      name: "Secunorm 175",
      image: "175secunorm.png",
      info: [
        "Blade Type: Fixed blade",
        "Blade Length: 25 mm",
        "Handle Material: Ergonomic plastic",
        "Safety: Integrated blade guard for secure use",
        "Special Features: Compact design",
        "Usage: Precision cutting"
      ]
    },
    {
      name: "Secumax 145",
      image: "145secumax.png",
      info: [
        "Blade Type: Fixed blade",
        "Blade Length: 9 mm",
        "Safety: Automatic blade retraction for enhanced safety",
        "Handle Material: Ergonomic plastic",
        "Special Features: Secure blade locking mechanism",
        "Usage: Comfortable for general use"
      ]
    },
    {
      name: "Secunorm 300",
      image: "Normsecu300.png",
      info: [
        "Blade Type: Fixed blade",
        "Blade Length: 9 mm",
        "Handle Material: Durable plastic",
        "Special Features: High durability, easy blade replacement",
        "Usage: Heavy-duty tasks"
      ]
    },
    {
      name: "Secumax 320",
      image: "320secumax.png",
      info: [
        "Blade Type: Fixed blade",
        "Blade Length: 9 mm",
        "Handle Material: High-impact plastic",
        "Special Features: Anti-slip grip",
        "Usage: Heavy-duty cutting tasks"
      ]
    }
  ];

  const formatInfo = (info) => {
    return info.map(detail => {
      const [label, value] = detail.split(':');
      return `<li><strong>${label.trim()}:</strong> ${value.trim()}</li>`;
    }).join('');
  };

  return (
    <div className="product-display">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <div className="product-card-inner">
            <div className="product-card-front">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-name-front">{product.name}</div>
            </div>
            <div className="product-card-back">
              <div className="product-info">
                <h3>{product.name}</h3>
                <ul dangerouslySetInnerHTML={{ __html: formatInfo(product.info) }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductDisplay;
