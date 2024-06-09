import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Ideas into Seamless and
          Visually Web Solutions
        </p>
        <p className="hero-info">
          I am a junior frontend developer with a strong passion for web
          technologies. I am eager to join a company that fosters learning and
          professional growth, allowing me to continuously develop my skills and
          expertise in the field.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/iconReact.webp" alt="Tech Icon" />
          </div>
          <img src="./assets/images/IMG_3546.jpg" alt="Person Icon" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/iconHtml.webp" alt="HTML Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/iconCss.webp" alt="CSS Icon" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/iconJs.webp" alt="JavaScript Icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
