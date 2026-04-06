import React from 'react';

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Technical <span>Skills</span></h2>
        
        <div className="skills-container">
          <div className="skill-category">
            <h3>Programming & Core Concepts</h3>
            <div className="skill-list">
              <span className="skill-item">C / C++</span>
              <span className="skill-item">Java</span>
              <span className="skill-item">Data Structures</span>
              <span className="skill-item">OOP</span>
              <span className="skill-item">DBMS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web Technologies</h3>
            <div className="skill-list">
              <span className="skill-item">HTML / CSS</span>
              <span className="skill-item">JavaScript</span>
              <span className="skill-item">React.js</span>
              <span className="skill-item">Node.js</span>
              <span className="skill-item">Express.js</span>
              <span className="skill-item">REST APIs</span>
              <span className="skill-item">JWT Authentication</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases & Tools</h3>
            <div className="skill-list">
              <span className="skill-item">MySQL</span>
              <span className="skill-item">MongoDB</span>
              <span className="skill-item">Git / GitHub</span>
              <span className="skill-item">VSCode</span>
              <span className="skill-item">Postman</span>
            </div>
          </div>
          
          <div className="skill-category" style={{marginTop: '2rem'}}>
            <h3>Certifications</h3>
            <div className="skill-list">
              <span className="skill-item">GFG 160 Days of Problem Solving</span>
              <span className="skill-item">C & C++ Training Completion (IIT Bombay)</span>
              <span className="skill-item">C Programming Course (Hands-On, Skill Rack)</span>
              <span className="skill-item">C for Beginners (Great Learning)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
