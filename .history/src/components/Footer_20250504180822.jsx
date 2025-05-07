import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <p>© 2025 Keith Selim. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/PEEZYBEE" data-name="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://instagram.com/yourusername" data-name="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://wa.me/+254769818227" data-name="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="https://facebook.com/yourprofile" data-name="Facebook">
            <i className="fa-brands fa-facebook"></i>
            
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;