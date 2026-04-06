import React from 'react';

const About = () => {
  return (
    <section id="about" className="animate-fade-in">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am currently pursuing my B.E.(CSE)-AIML at Sri Eshwar College of Engineering. I have a strong foundation in Data Structures, Algorithms, and Full-Stack Web Development.
            </p>
            <p>
              My goal is to leverage my skills in AI and web technologies to build impactful and scalable applications. Besides coding, I actively participate in hackathons and competitive programming.
            </p>

            <div className="education">
              <h3 style={{ marginTop: '2rem', color: 'var(--accent-light)'}}>Education</h3>
              <div className="education-item">
                <h4>B.E. (CSE) - Artificial Intelligence & Machine Learning</h4>
                <p>Sri Eshwar College of Engineering</p>
                <span className="education-meta">2024 - 2028 | CGPA: 7.93 (upto 3rd Sem)</span>
              </div>
              <div className="education-item">
                <h4>HSC (12th Grade)</h4>
                <p>Infant Jesus Matric Higher Secondary School</p>
                <span className="education-meta">2022 - 2024 | 90%</span>
              </div>
            </div>
          </div>

          <div className="coding-profiles">
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--accent-light)'}}>Coding Profiles</h3>
            <div className="profiles-grid">
              <div className="card profile-card">
                <div className="profile-info">
                  <h4>LeetCode</h4>
                  <span className="profile-stats">Solved 300+ problems | Contest Rating(Max): 1560</span>
                </div>
              </div>
              <div className="card profile-card">
                <div className="profile-info">
                  <h4>SkillRack</h4>
                  <span className="profile-stats">Solved 900+ problems | Bronze Medals: 315</span>
                </div>
              </div>
              <div className="card profile-card">
                <div className="profile-info">
                  <h4>CodeChef</h4>
                  <span className="profile-stats">Solved 50+ problems | Bronze Badge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
