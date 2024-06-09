import React from "react";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="section-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/icons8-gmail-50.png"
            text="karen.martirosyan20000@gmail.com"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assets/images/icons8-github-50.png"
            text="https://github.com/Karenn2000"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
