import React, { useState } from 'react';
import '../styles/ImpactSection.css';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImpactSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const impacts = [
    {
      title: 'Precision in Aerospace Manufacturing',
      text: 'At AeroTech Industries, switching from standard metal shears to aerospace-grade cutters improved component accuracy for aircraft engines. This change led to a 30% reduction in material waste and a 20% boost in production efficiency, enhancing component quality and aircraft safety.',
      rating: 4,
    },
    {
      title: 'Efficiency in High-End Carpentry',
      text: 'WoodCraft Studio upgraded to specialized woodworking cutters, resulting in 25% faster project completion and cleaner cuts. This upgrade reduced material waste, improved furniture quality, and allowed the studio to take on more complex designs, increasing client satisfaction.',
      rating: 3,
    },
    {
      title: 'Innovation in Automotive Design',
      text: 'AutoTech Innovators implemented precision cutters for car interiors, achieving 40% faster assembly times and a 15% reduction in material costs. The new cutters enhanced the quality of the final products, leading to higher customer satisfaction and repeat business.',
      rating: 5,
    },
    {
      title: 'Advancements in Medical Equipment Manufacturing',
      text: 'MediCraft Solutions switched to high-precision cutters, which improved the accuracy of medical device components by 35%. This change decreased the error rate in production, significantly improving patient safety and increasing the company’s market reputation.',
      rating: 4,
    },
    {
      title: 'Streamlining Apparel Production',
      text: 'FashionDesign Studio adopted advanced fabric cutters, resulting in 30% less material waste and a 20% increase in production speed. This allowed the company to respond quickly to fashion trends while maintaining high-quality standards.',
      rating: 4,
    },
    {
      title: 'Enhancing Packaging Efficiency',
      text: 'PackPro Industries switched to precision cutters for packaging materials, which reduced waste by 25% and improved production speed by 20%. The new cutters also enhanced the durability of packaging, leading to better product protection and customer satisfaction.',
      rating: 5,
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 2 + impacts.length) % impacts.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 2) % impacts.length);
  };

  return (
    <div className="impact-section">
      <h2 className="impact-title">The Impact of Using the Right Cutter</h2>
      <div className="impact-carousel">
        <FaArrowLeft className="arrow-left" onClick={handlePrevClick} />
        <div className="impact-cards-container slide-animation">
          {impacts.slice(currentIndex, currentIndex + 2).map((impact, index) => (
            <div key={index} className="impact-card">
              <h3 className="impact-card-title">{impact.title}</h3>
              <p className="impact-card-text">{impact.text}</p>
              <div className="impact-card-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={`star ${i < impact.rating ? '' : 'empty'}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
        <FaArrowRight className="arrow-right" onClick={handleNextClick} />
      </div>
    </div>
  );
};

export default ImpactSection;
