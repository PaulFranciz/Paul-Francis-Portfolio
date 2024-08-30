import React, { useEffect, useRef } from 'react';
import '../components/Style/about.css';

// Import skill icons
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const About = () => {
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML', icon: HTML },
    { name: 'CSS', icon: CSS },
    { name: 'JAVASCRIPT', icon: JavaScript },
    { name: 'REACT', icon: ReactImg },
    { name: 'GITHUB', icon: GitHub },
    { name: 'NODE JS', icon: Node },
    { name: 'MONGO DB', icon: Mongo },
    { name: 'TAILWIND', icon: Tailwind },
    { name: 'FIREBASE', icon: FireBase },
  ];

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      },
      { threshold: 0.1 }
    );
  
    if (currentRef) {
      observer.observe(currentRef);
    }
  
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="badass-about" ref={sectionRef}>
      <div className="content-wrapper">
        <h2 className="section-title" data-text="ABOUT ME">ABOUT ME</h2>
        <div className="badass-content">
          <p className="about-me">
            I am a <span className="highlight">Frontend Developer</span> with a passion for creating
            <span className="highlight"> dynamic user experiences</span>. My journey in tech is driven by
            transforming ideas into <span className="highlight">beautifully crafted code</span>.
          </p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <img src={skill.icon} alt={`${skill.name} icon`} className="skill-icon" />
                <p className="skill-name">{skill.name}</p>
              </div>
            ))}
          </div>
          <p className="outro">
            From startups to established companies, I deliver
            <span className="highlight"> high-quality, performant code</span> that elevates user satisfaction.
            Ready to take your project to the next level?
          </p>
          <a href="/contact" className="cta-about-button">Let's Create Magic</a>
        </div>
      </div>
    </section>
  );
};

export default About;