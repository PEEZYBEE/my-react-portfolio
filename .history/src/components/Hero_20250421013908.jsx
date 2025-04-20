import React from 'react';
import './Hero.css';
import profileImage from './assets/profile.jpg';


const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Full-Stack Developer</h1>
        <p>Building digital experiences that bring creativity to life through technology</p>
        <p className="highlight">Specializing in modern web development and AI</p>
        <a href="#contact" className="cta-button">Let's Connect</a>
      </div>
     
      <div className="hero-image-container">
      

        <div className="name-banner">
        <h2 className="bouncing-letters" style={{ textAlign: "center", fontSize: "30px" }}>
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
