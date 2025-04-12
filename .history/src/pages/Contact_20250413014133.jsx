import React from 'react';
import Section from '../components/Section';
import "../"

const Contact = () => (
  <Section id="contact" title="Contact Me">
    <div className="contact-container">
      <p>Email: <a className="contact-link" href="mailto:you@example.com">you@example.com</a></p>
      <div className="social-links">
        <a className="social-icon" href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="social-icon" href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        {/* Add more social icons here */}
      </div>
    </div>
  </Section>
);

export default Contact;
