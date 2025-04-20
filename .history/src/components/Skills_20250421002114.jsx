import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Technical Expertise</h2>
      <div className="skills-grid">
        <div className="skill-card">
          <i className="fa-solid fa-code"></i>
          <h3>Frontend Development</h3>
          <p>React, HTML5, CSS3, JavaScript</p>
        </div>
        <div className="skill-card">
          <i className="fa-solid fa-server"></i>
          <h3>Backend Developer</h3>
          <p>Node.js, Python, PostgreSQL</p>
        </div>
        <div className="skill-card">
          <i className="fa-solid fa-paintbrush"></i>
          <h3>UI/UX Design</h3>
          <p>Figma, Adobe XD, Prototyping, User Testing</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
