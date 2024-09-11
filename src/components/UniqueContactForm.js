import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/UniqueContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setFormError('');

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            setFormError('Please enter a valid 10-digit mobile number.');
            setIsSubmitting(false);
            return;
        }

        const formDataObj = new FormData();
        formDataObj.append('access_key', '86794a67-a1e7-4ca7-bf5f-5142840296ed');
        formDataObj.append('subject', 'New Contact Form Submission');
        formDataObj.append('firstName', formData.firstName);
        formDataObj.append('lastName', formData.lastName);
        formDataObj.append('email', formData.email);
        formDataObj.append('phone', formData.phone);
        formDataObj.append('message', formData.message);

        try {
            const response = await axios.post('https://api.web3forms.com/submit', formDataObj, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent',
                    text: 'Your message has been sent successfully!'
                });

                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setFormError('Failed to send your message. Please try again later.');
            }
        } catch (error) {
            console.error('Error details:', error.response ? error.response.data : error.message);
            setFormError('An error occurred. Please try again later.');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="unique-contact-form-container">
            <h1 className="unique-contact-form-title">Contact Us</h1>
            <p className="unique-contact-form-subtitle">Any question or remarks? Just write us a message!</p>

            <div className="unique-contact-form-content">
                <div className="unique-contact-info">
                    <h2>Contact Information</h2>
                    <p>Say something to start a live chat!</p>
                    <ul>
                        <li><i className="fas fa-phone"></i> +0123456789</li>
                        <li><i className="fas fa-envelope"></i> demo@gmail.com</li>
                        <li><i className="fas fa-map-marker-alt"></i> Pune, Pimpri-Chinchwad, Maharashtra</li>
                    </ul>
                </div>
                <div className="unique-form-section">
                    <form onSubmit={handleSubmit}>
                        <div className="unique-form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="unique-form-input"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                className="unique-form-input"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="unique-form-group">
                            <input
                                type="email"
                                name="email"
                                className="unique-form-input full-width"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="unique-form-group">
                            <input
                                type="tel"
                                name="phone"
                                className={`unique-form-input full-width ${formError && formError.includes('10-digit mobile number') ? 'invalid' : ''}`}
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                            {formError && formError.includes('10-digit mobile number') && (
                                <p className="phone-error">{formError}</p>
                            )}
                        </div>
                        {/* Removed the file input section */}
                        <div className="unique-form-group">
                            <textarea
                                name="message"
                                className="unique-form-input"
                                placeholder="Write your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="unique-form-submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>
                    {formError && !formError.includes('10-digit mobile number') && (
                        <p className="form-error">{formError}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
