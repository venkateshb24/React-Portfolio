import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="animate-fade-in">
      <div className="container">
        <div className="hero-content">
          <span className="hero-greeting">Hi, my name is</span>
          <h1 className="hero-title">Venkatesh B.</h1>
          <h2 className="hero-subtitle gradient-text">AI & Fulll-Stack MERN Developer.</h2>
          <p className="hero-desc">
            I'm an aspiring Software Engineer with a focus on Artificial Intelligence and Full-Stack Web Development. I love solving complex problems and building seamless digital experiences.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
