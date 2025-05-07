import React, { useState } from 'react';
import './contact.css'; 
import './footer.css';

const Contact = () => {
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (formData) => {
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const subject = formData.get('subject').trim();
    const phone = formData.get('phone').trim();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (!name || name.length > 50) return "Name is required and must be 50 characters or less.";
    if (!email || !emailRegex.test(email)) return "A valid email is required.";
    if (!message || message.length < 10 || message.length > 500) return "Message must be between 10 and 500 characters.";
    if (!subject) return "Subject is required.";
    if (phone && !/^\d{10}$/.test(phone)) return "Phone number must be 10 digits.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');
    setIsLoading(true);

    const form = e.target;
    const data = new FormData(form);
    const validationError = validateForm(data);

    if (validationError) {
      setStatus(validationError);
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        form.reset();
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-form">
      <h2>Get in Touch</h2>
      <p>If you’d like to collaborate, ask a question, or just say hello, feel free to send a message below.</p>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        onSubmit={handleSubmit}
        noValidate
        aria-live="polite"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          aria-label="Name"
          autoComplete="name"
          maxLength="50"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          aria-label="Email"
          autoComplete="email"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number (Optional)"
          aria-label="Phone"
          autoComplete="tel"
          pattern="\d{10}"
          maxLength="10"
        />
        <select name="subject" required aria-label="Subject">
          <option value="">Select a Subject</option>
          <option value="General Inquiry">General Inquiry</option>
          <option value="Support">Support</option>
          <option value="Feedback">Feedback</option>
          <option value="Other">Other</option>
        </select>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          aria-label="Message"
          autoComplete="off"
          maxLength="500"
          minLength="10"
        ></textarea>
        <input
          type="file"
          name="attachment"
          aria-label="Attachment"
        />
        <button type="submit" disabled={isLoading} aria-busy={isLoading}>
          {isLoading ? (
            <span className="spinner" aria-hidden="true"></span>
          ) : (
            "Send Message"
          )}
        </button>
        {status && (
          <p
            className={`status-message ${status.includes('success') ? 'success' : 'error'}`}
            role="alert"
          >
            <span className={`status-icon ${status.includes('success') ? 'success-icon' : 'error-icon'}`}></span>
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
