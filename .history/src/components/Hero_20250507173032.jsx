import React from 'react';
import './Hero.css';
import profileImage from '../assets/profile.jpg';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleConnectClick = () => {
    navigate('/contact');
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Full-Stack Developer</h1>
        <p>Building digital experiences that bring creativity to life through technology</p>
        <p className="highlight">Specializing in modern web development and AI</p>
        <button onClick={handleConnectClick} className="cta-button">
          Let's Connect
        </button>
      </div>

      <div className="hero-image-container">
        <div className="profile-wrapper">
          <img src={profileImage} alt="Profile" className="profile-img" />
          <h2 className="bouncing-letters">
            <span>K</span>
            <span>E</span>
            <span>I</span>
            <span>T</span>
            <span>H</span>
            <span>&nbsp;</span>
            <span>S</span>
            <span>E</span>
            <span>L</span>
            <span>I</span>
            <span>M</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
