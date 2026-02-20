import "../styles.css";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About: React.FC = () => {
  return (<section>
    <section className="about">
      <div className="about-content">
        <h3>Who am I?</h3>
        <h2>I’m Sanjana Deshan, a Visual UX/UI Designer and Web Developer</h2>
        <p>
          I am a passionate ICT undergraduate currently pursuing a Bachelor of Information and Communication Technology 
          (BICT) in Sri Lanka. I am highly interested in Software Engineering and Artificial Intelligence, and I enjoy building 
          modern, user-friendly web applications using technologies like React and TypeScript.
        </p>
        <p>I started my programming journey with Python during my A/Ls, where I also built small projects that strengthened 
          my problem-solving skills. Currently, I am focused on improving my frontend development skills and learning advanced 
          concepts in AI to become a skilled Software Engineer in the future.
        </p>
        <p>I am a fast learner, self-motivated, and always excited to explore new technologies. My goal is to combine creativity 
          with technical knowledge to build impactful digital solutions.
        </p>       
        <button className="btn">Download CV</button>
      </div>
      </section>

    <section>
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero1">
        <div className="hero1-text">
          <h1>Contact Us.</h1>
          <p>Better design for your digital product</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-form">
          <h2>Get In Touch.</h2>
          <p>Ask for quotation or just say hello!</p>

          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Phone" />
            <textarea placeholder="Message" rows={5} required />
            <button type="submit">SEND MESSAGE →</button>
          </form>
        </div>

        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>📍 Western Province, Sri Lanka</p>
          <p>📧 sanjana.abeysinghe@gmail.com</p>
          <p>📞 +94 76 269 3959</p>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </section>
    </div>
    </section>
    
    </section>
  );
};

export default About;

