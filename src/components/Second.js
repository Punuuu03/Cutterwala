import React from 'react';
import '../styles/Second.css';

const Second = () => {
    return (
        <div className="second-container">
            <h2 className="why-title">Why Use Proper Cutters</h2>
            <p className="why-description">
                Using the right cutter is essential for ensuring safety, precision, and efficiency in any cutting task.
                Different materials require specific types of cutters to achieve the best results without compromising on safety.
            </p>
            <div className="hexagon1-container">
                <div className="hexagon1">
                    <div className="hexagon1-content">
                        <h3>For cutting wood</h3>
                        <p>A saw blade or wood-specific cutter is necessary to ensure smooth edges and avoid splintering.</p>
                    </div>
                </div>
                <div className="hexagon1">
                    <div className="hexagon1-content">
                        <h3>A metal shear</h3>
                        <p>A hacksaw is crucial for cutting metal accurately, preventing material damage, and ensuring worker safety.</p>
                    </div>
                </div>
                <div className="hexagon1">
                    <div className="hexagon1-content">
                        <h3>Plastic cutters</h3>
                        <p>Utility knives are designed to cut through plastic cleanly, reducing the risk of cracks or uneven edges.</p>
                    </div>
                </div>
                <div className="hexagon1">
                    <div className="hexagon1-content">
                        <h3>Glass cutters</h3>
                        <p>Precision tools that score the surface of the glass, allowing for clean breaks without shattering.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Second;
