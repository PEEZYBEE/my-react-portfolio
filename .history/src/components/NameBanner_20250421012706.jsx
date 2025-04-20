import React from "react";
import "./Hero.css";  // Make sure to import the CSS file

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="name-banner">
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
        </h1>
        <h2>Full-Stack Developer</h2>
        <p>Building digital experiences that bring creativity to life through technology</p>
        <p className="highlight">Specializing in modern web development and AI</p>
        <a href="#contact" className="cta-button">Let's Connect</a>
      </div>

      <div className="hero-image">
        <img src="profile.jpg" alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Hero;
