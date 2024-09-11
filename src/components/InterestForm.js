import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'; 
import Select from 'react-select'; // Import react-select
import '../styles/InterestForm.css';
import { FaUser, FaEnvelope, FaPhone, FaProductHunt,   FaCommentDots, FaMapMarkerAlt, FaTruck } from 'react-icons/fa';

const InterestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    productName: [], // Change to an array to hold multiple products
    description: '',
    location: '',
    delivery: 'Yes',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formErrors, setFormErrors] = useState({
    contact: '',
    email: '',
  });

  const productOptions = [
    { value: 'Secupro625', label: 'Secupro 625' },
    { value: 'Secunorm380', label: 'Secunorm 380' },
    { value: 'Secunorm540', label: 'Secunorm 540' },
    { value: 'Secunorm125', label: 'Secunorm 125' },
    { value: 'Secumax150', label: 'Secumax 150' },
    { value: 'Secumax350', label: 'Secumax 350' },

    { value: 'Secunorm175', label: 'Secunorm 175' },
    { value: 'Secumax320', label: 'Secumax 320' },
    { value: 'Secunorm185', label: 'Secunorm 185' },
    { value: 'Secumax145', label: 'Secumax 145' },
    { value: 'Secunorm500', label: 'Secunorm 500' },
    { value: 'Secunorm300', label: 'Secunorm 300' },

    { value: 'Secumax148', label: 'Secumax 148' },
    { value: 'Auto-Retractable Pen Cutter', label: 'Auto-Retractable Pen Cutter' },
    { value: 'Manual Utility Knife', label: 'Manual Utility Knife' },
    { value: 'Auto-Retractable Slim Cutter', label: 'Auto-Retractable Slim Cutter' },
    { value: 'Auto-Retractable Utility Knife', label: 'Auto-Retractable Utility Knife' },
    { value: 'Manual Pen Cutter', label: 'Manual Pen Cutter' },
    { value: 'Adjustable Slim Cutter', label: 'Adjustable Slim Cutter' },
    { value: 'Micro-Blade Cutter', label: 'Micro-Blade Cutter' },
    // Add more products as needed
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Set the form data
    setFormData({ ...formData, [name]: value });

    // Validation for mobile number
    if (name === 'contact') {
      const mobilePattern = /^[0-9]{10}$/; // Regular expression for a 10-digit number
      if (!mobilePattern.test(value)) {
        setFormErrors({ ...formErrors, contact: 'Please enter a valid 10-digit mobile number.' });
      } else {
        setFormErrors({ ...formErrors, contact: '' });
      }
    }
     // Validation for email
     if (name === 'email') {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
      if (!emailPattern.test(value)) {
        setFormErrors({ ...formErrors, email: 'Please enter a valid email address.' });
      } else {
        setFormErrors({ ...formErrors, email: '' });
      }
    }
  
  };

  const handleProductChange = (selectedOptions) => {
    setFormData({ ...formData, productName: selectedOptions });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');

    // Check for validation errors
    if (formErrors.contact) {
      setIsSubmitting(false);
      setFormError('Please correct the errors before submitting.');
      return;
    }

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: '86794a67-a1e7-4ca7-bf5f-5142840296ed',  
        subject: 'New Interest Form Submission',
        name: formData.name,
        email: formData.email,
        contact: formData.contact,
        productName: formData.productName.map(option => option.value).join(', '), // Join selected products
        
        reason: formData.description,
        location: formData.location,
        delivery: formData.delivery
      });

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Your interest form has been submitted successfully!',
        });

        // Clear form data after success
        setFormData({
          name: '',
          email: '',
          contact: '',
          productName: [],
          quantity: '',
          
          description: '',
          location: '',
          delivery: 'Yes',
        });
      } else {
        setFormError('Failed to submit your interest form. Please try again later.');
      }
    } catch (error) {
      setFormError('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="interest-form-container">
      <h2 className="interest-form-title">Interest Form</h2>
      <form className="interest-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="label-container">
            <FaUser className="label-icon user-icon" /> Name:
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-container">
            <FaEnvelope className="label-icon email-icon" /> Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="label-container">
            <FaPhone className="label-icon phone-icon" /> Contact No.:
          </label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
          {formErrors.contact && <p className="form-error">{formErrors.contact}</p>}
        </div>

        <div className="form-group">
          <label className="label-container">
            <FaProductHunt className="label-icon product-icon" /> Product Name:
          </label>
          <Select
            isMulti
            name="productName"
            options={productOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            value={formData.productName}
            onChange={handleProductChange}
            placeholder="Select or type products..."
            required
          />
        </div>

       

        

        <div className="form-group full-width">
          <label className="label-container">
            <FaCommentDots className="label-icon reason-icon" /> Description:
          </label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label className="label-container">
            <FaMapMarkerAlt className="label-icon location-icon" /> Location:
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group full-width">
          <label className="label-container">
            <FaTruck className="label-icon delivery-icon" /> Delivery:
          </label>
          <div className="delivery-options">
            <label>
              <input
                type="radio"
                name="delivery"
                value="Yes"
                checked={formData.delivery === 'Yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="delivery"
                value="No"
                checked={formData.delivery === 'No'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>

      {formError && <p className="form-error">{formError}</p>}
    </div>
  );
};

export default InterestForm;