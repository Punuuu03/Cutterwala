import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SmallNavbar from './components/SmallNavbar';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Second from './components/Second';
import ImpactSection from './components/ImpactSection';
import ProductGrid from './components/ProductGrid';
import UniqueContactForm from './components/UniqueContactForm';
import ProductDisplay from './components/ProductDisplay';
import Square from './components/Square'; 
import About1 from './components/About1';
import VisionMission from './components/VisionMission';
import Secupro625 from './components/Secupro625'; 
import Secunorm540 from './components/Secunorm540'; 
import Secunorm125 from './components/Secunorm125';
import Secunorm380 from './components/Secunorm380';
import Secumax150 from './components/Secumax150';
import Secumax350 from './components/Secumax350';
import InterestForm from './components/InterestForm'; 
import Sliding from './components/Sliding';
import Vision1 from './components/Vision1';
import EnquiryForm from './components/CustomEnquiryForm'; // Import the EnquiryForm component
import BoxCutters from './components/BoxCutters';
import Secumax148 from './components/Secumax148';
import Microblade from './components/Microblade';

function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFormVisible(true);
    }, 15000); // Show form after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <SmallNavbar/>
        
        <Routes>
          <Route
            path='/'
            element={
              <>
                <HeroSection/>
                <AboutUs/>
                <Second/>
                <Vision1/>
                <ImpactSection/>
              </>
            }
          />
          <Route path="/about" element={
            <>
            <About1/>
            <VisionMission/>
              <Square/>
              <ProductDisplay />
              
             
            </>
          } /> 
          <Route path="/products" element={
            <>
              <Sliding/>
              <ProductGrid />
            </>
          } />
          <Route path="/contact" element={<UniqueContactForm/>} />
          <Route path="/microblade" element={<Microblade/>}/>
          <Route path="/boxcutters" element={<BoxCutters/>}/>
          <Route path="/secumax148" element={<Secumax148/>}/>
          <Route path="/secupro625" element={<Secupro625 />} />
          <Route path="/secunorm540" element={<Secunorm540 />} /> 
          <Route path="/secunorm125" element={<Secunorm125 />} />
          <Route path="/secunorm380" element={<Secunorm380 />} />
          <Route path="/secumax150" element={<Secumax150 />} />
          <Route path="/secumax350" element={<Secumax350 />} />
          <Route path="/interestform" element={<InterestForm />} /> 
        </Routes>
        
        <Footer />

        {/* Conditionally render the EnquiryForm */}
        {isFormVisible && <EnquiryForm onClose={handleCloseForm} />}
      </div>
    </Router>
  );
}

export default App;
