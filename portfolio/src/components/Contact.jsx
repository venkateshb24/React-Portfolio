import React from 'react';

const Contact = () => {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2>Let's <span>Connect</span></h2>
        <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
        
        <div className="contact-links">
          <a href="mailto:venkatesh.b2024aiml@sece.ac.in" className="contact-link">
            <span>Email Me</span>
          </a>
          <a href="tel:8667797045" className="contact-link">
            <span>866-779-7045</span>
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer" className="contact-link">
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/venkateshb24" target="_blank" rel="noreferrer" className="contact-link">
            <span>GitHub</span>
          </a>
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} Venkatesh B. Built with React.
        </div>
      </div>
    </footer>
  );
};

export default Contact;
