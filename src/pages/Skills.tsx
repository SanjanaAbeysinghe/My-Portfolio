import React from "react";
import "../styles.css";

interface Skills {
  id: number;
  title: string;
  sub: string;
}

const Skills: Skills[] = [
  {
    id: 1,
    title: "Programming Language",
    sub: "Java, Python, JavaScript, PHP, SQL",
    
  },
  {
    id: 2,
    title: "Framework & Libraries",
    sub: "React, Spring Boot, HTML/CSS",
    
  },
  {
    id: 3,
    title: "Currently Learning",
    sub: "AL/ML, Node.js",
    
  },
  {
    id: 4,
    title: "Cloud Computing",
    sub: "AWS",
    
  },
  {
    id: 5,
    title: "Database Management",
    sub: "SQL, MONGO DB",
    
  },
  {
    id: 6,
    title: "Clear Explanation For others",
    sub: "I'm a teacher",
    
  },
];

const Skill: React.FC = () => {
  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="hero7">
        <div className="hero7-text">
          <h1>Skills.</h1>
          <p>Better design for your digital product</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-section">
        <p className="section-subtitle">NEWS & ARTICLES</p>
        <h2></h2>

        <div className="blog-grid">
          {Skills.map((post) => (
            <div key={post.id} className="blog-card">
              <div className="blog-content">
                <span>{post.sub}</span>
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skill;