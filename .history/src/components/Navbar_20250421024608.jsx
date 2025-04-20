import React, { useState } from 'react';
import '/Navbar.css';

const Navbar = () => {
  // State to manage active link
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle active link change
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="navbar">
      <a href="#home" className="logo">SoftwareDev</a>
      <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a 
              href="#home" 
              className={activeLink === 'home' ? 'active' : ''}
              onClick={() => handleLinkClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a 
              href="#skills" 
              className={activeLink === 'skills' ? 'active' : ''}
              onClick={() => handleLinkClick('skills')}
            >
              Skills
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeLink === 'projects' ? 'active' : ''}
              onClick={() => handleLinkClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeLink === 'contact' ? 'active' : ''}
              onClick={() => handleLinkClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
