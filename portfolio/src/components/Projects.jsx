import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Student Productivity & DSA Consistency Tracker",
      year: "2026 (Ongoing)",
      description: "Built a full-stack web app using MERN stack to track DSA practice, coding streaks, and academic goals with secure JWT-based authentication. Designed an interactive dashboard for CRUD operations and streak visualization.",
      techStack: ["MongoDB", "Express.js", "React Hooks", "Node.js", "JWT"]
    },
    {
      title: "E-Commerce Web Application",
      year: "2025 (Web Dev Intern)",
      description: "Developed a responsive e-commerce platform with product search, filtering, cart management, and secure localStorage-based authentication. Implemented Context API for global state management.",
      techStack: ["React.js", "Tailwind CSS", "JavaScript", "useContext", "localStorage"]
    },
    {
      title: "AI-Powered Accident Detection System",
      year: "2025",
      description: "Built a real-time accident detection system using YOLO and OpenCV to identify incidents from live video feeds. Integrated GPS and Twilio APIs to send automated alerts with live location data to reduce emergency response time. Won 3rd Place at Freshathon 2k25.",
      techStack: ["Python", "OpenCV", "YOLO", "IP webcam app", "Twilio", "Google Maps API"]
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured <span>Projects</span></h2>
        
        <div className="projects-grid">
          {projectData.map((project, index) => (
            <div className="card project-card" key={index}>
              <span className="project-year">{project.year}</span>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.techStack.map((tech, idx) => (
                  <span className="tech-tag" key={idx}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
