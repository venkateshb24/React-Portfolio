import React from 'react';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">My <span>Experience</span></h2>
        
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="card experience-item">
            <div className="exp-header">
              <div>
                <h3 className="exp-role">MERN Intern</h3>
                <span className="exp-company">BetterTomorrow</span>
              </div>
              <span className="exp-date">2025</span>
            </div>
            
            <ul className="exp-list">
              <li>Built a full-stack College Event Management System using MongoDB, Express.js, React.js, and Node.js during hands-on training.</li>
              <li>Implemented JWT authentication, role-based access control, REST APIs, and real-time capacity tracking with secure admin management.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
