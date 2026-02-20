import React from 'react';
import "../styles.css";

interface ProjectMeta {
  label: string;
  value: string;
  icon: string; // You can use react-icons here
}

const ProjectDetail: React.FC = () => {
  const projectInfo: ProjectMeta[] = [
    { label: "Client Project", value: "Romotheme Studio", icon: "👤" },
    { label: "Project Date", value: "Romotheme Studio", icon: "📅" },
    { label: "What Project", value: "Website Design", icon: "📁" },
  ];

  return (
    <div className="detail-page">
      {/* --- Header Section (Reusable from Portfolio) --- */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="outline-text">Details.</h1>
          <h1 className="main-title">Project Detail</h1>
          <p>Better Design for your Digital Product.</p>
          <span className="breadcrumb">Home / Project Detail</span>
        </div>
        <div className="hero-image">
          <img src="https://via.placeholder.com/300x400" alt="Author" />
          <div className="social-sidebar">
             {/* Icons here */}
          </div>
        </div>
      </header>

      {/* --- Large Gallery Image --- */}
      <section className="featured-gallery">
        <div className="gallery-container">
          <img src="https://via.placeholder.com/1200x600" alt="Project Showcase" />
        </div>
      </section>

      {/* --- Project Content --- */}
      <article className="project-description">
        <h2>Interact with Consumers Everywhere.</h2>
        
        <blockquote className="quote-box">
          <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo ”</p>
          <span className="quote-mark">99</span>
        </blockquote>

        <div className="text-content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis imperdiet nibh id lobortis. Sed eu elit non ligula, vel porttitor arcu. Integer ut massa molestie purus porttitor porttitor...</p>
          <p>Ut volutpat aliquam mi sed malesuada. Vestibulum tristique mattis euismod. Aliquam et pulvinar tellus, vel semper mi. In turpis leo, tincidunt id commodo vitae, pulvinar ut enim...</p>
        </div>
      </article>

      {/* --- Project Info & Newsletter Grid --- */}
      <section className="meta-section">
        <div className="meta-grid">
          {/* Column 1: Project Info */}
          <div className="meta-col">
            <h3>Project Info.</h3>
            {projectInfo.map((info, index) => (
              <div key={index} className="info-item">
                <span className="info-icon">{info.icon}</span>
                <div>
                  <p className="info-label">{info.label}</p>
                  <p className="info-value">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Head Project */}
          <div className="meta-col">
            <h3>Head Project.</h3>
            <div className="author-card">
              <img src="https://via.placeholder.com/50" alt="Head" />
              <div>
                <p className="author-name">Brant Connor</p>
                <p className="author-role">Designer & Web Developer</p>
              </div>
            </div>
            <p className="author-desc">The project consectetur lectus, a accumsan est varius ac. Curabitur vestibulum diam quis eleifend bibendum.</p>
          </div>

          {/* Column 3: Newsletter */}
          <div className="meta-col newsletter-col">
            <div className="newsletter-box">
              <h3>Subscribe Our Newsletter.</h3>
              <input type="email" placeholder="Email" />
              <button className="subscribe-btn">SUBSCRIBE NOW →</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;