import React, { useState } from 'react';
import "./index.css";
const ContactForm = () => {
  // State hooks for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // State hook for handling form submission
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  // Handle input change
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (you can integrate an API here)
    setTimeout(() => {
      setFormStatus('Your message has been sent successfully!');
      setIsSubmitting(false);
      // Optionally, clear form data after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        {/* Subject */}
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
        />

        {/* Message */}
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>

      {/* Status message */}
      {formStatus && <p>{formStatus}</p>}
    </div>
  );
};

export default ContactForm;
