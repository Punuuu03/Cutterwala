import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/CustomEnquiryForm.css'; // Ensure the correct path to your CSS

const CustomEnquiryForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const formStatus = localStorage.getItem('formStatus');
    const lastOpened = localStorage.getItem('lastOpened');
    const now = Date.now();

    if (formStatus === 'submitted') {
      return; // Do nothing if form already submitted
    }

    if (!lastOpened || now - lastOpened >= 15 * 60 * 1000) {
      // Show form if it hasn't been shown recently
      setTimeout(() => {
        if (localStorage.getItem('formStatus') !== 'submitted') {
          setShowForm(true);
        }
      }, 15 * 1000); // Show after 15 seconds
    } else {
      const nextOpenTime = parseInt(lastOpened, 10) + 5 * 60 * 1000; // 5 minutes later
      if (now >= nextOpenTime) {
        setTimeout(() => {
          if (localStorage.getItem('formStatus') !== 'submitted') {
            setShowForm(true);
          }
        }, 15 * 1000); // Show after 15 seconds if conditions met
      }
    }

    // Clean up old data
    const version = '1.0'; // Update version if schema changes
    localStorage.setItem('formVersion', version);
    if (localStorage.getItem('formVersion') !== version) {
      localStorage.clear();
    }
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === 'phone') {
      // Validate phone number
      const phoneRegex = /^[0-9]{10}$/; // Example: 10 digits
      if (!phoneRegex.test(value)) {
        setPhoneError('Please enter a valid 10-digit phone number.');
      } else {
        setPhoneError('');
      }
    }

    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for phone validation error before submitting
    if (phoneError) {
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: '86794a67-a1e7-4ca7-bf5f-5142840296ed',
        subject: 'New Enquiry',
        from_name: `${formData.firstName} ${formData.lastName}`, // Fixed interpolation
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your enquiry has been submitted successfully!',
        });

        // Clear form data after success
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        });

        // Update local storage to prevent form from showing again
        localStorage.setItem('formStatus', 'submitted');
        setShowForm(false);
      } else {
        setFormError('Failed to submit your enquiry. Please try again later.');
      }
    } catch (error) {
      setFormError('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      {showForm && (
        <div className="custom-enquiry-form-overlay">
          <div className="custom-enquiry-form-container">
            <button className="custom-close-button" onClick={onClose}>×</button>
            <h2 className="custom-enquiry-form-title">Enquiry Form</h2>
            <p className="custom-enquiry-form-subtitle">
              If you have any queries, kindly take a moment to fill up this form. Our representatives will contact you shortly.
            </p>

            <form className="custom-enquiry-form" onSubmit={handleSubmit}>
              <div className="custom-form-row">
                <div className="custom-form-group">
                  <label htmlFor="firstName">First Name <span>*</span></label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="custom-form-group">
                  <label htmlFor="lastName">Last Name <span>*</span></label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="custom-form-group">
                <label htmlFor="email">Email Address <span>*</span></label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="custom-form-group">
                <label htmlFor="phone">Phone Number <span>*</span></label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {phoneError && <p className="custom-form-error">{phoneError}</p>}
              </div>
              <div className="custom-form-group">
                <label htmlFor="message">Message <span>*</span></label>
                <textarea
                  id="message"
                  placeholder="Your Queries"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="custom-submit-button" disabled={isSubmitting || phoneError}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>

            {formError && <p className="custom-form-error">{formError}</p>}

            <div className="custom-contact-info">
              <p><FaMapMarkerAlt /> Address: Pune, Pimpri-Chinchwad, Maharashtra</p>
              <p><FaPhone /> Contact No: 9999999999</p>
              <p><FaEnvelope /> cutterwala01@gmail.com</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomEnquiryForm;
