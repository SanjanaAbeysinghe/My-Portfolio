import React from "react";
import "../styles.css";

interface Services {
  id: number;
  title: string;
  date: string;
  image: string;
}

const Services: Services[] = [
  {
    id: 1,
    title: "Web Development",
    date: "React, Spring Boot, HtML, CSS, JavaScript",
    image: "/src/components/image/ervices.jpg",
  },
  {
    id: 2,
    title: "AL/ML intergration",
    date: "AL,ML",
    image: "/src/components/image/ArtIntell.jpg",
  },
  {
    id: 3,
    title: "Cloud Services",
    date: "AWS",
    image: "/src/components/image/Untitled-design-88.png",
  },
  {
    id: 4,
    title: "E-commerce Solution",
    date: "E-commerce web,fb page handling",
    image: "/src/components/image/e-commerce-img.webp",
  },
  {
    id: 5,
    title: "Database Management",
    date: "SQL, MongoDB",
    image: "/src/components/image/db-management-sys-1170x658.png",
  },
  {
    id: 6,
    title: "Web Scraping and Automation",
    date: "January 25, 2023",
    image: "/src/components/image/Automation-by-Broadcom-AI-WLA-Hero-Image-1200x675-1-1024x576.avif",
  },
  {
    id: 6,
    title: "UI/UX Consulting",
    date: "Modern & Perfect UI/UX",
    image: "/src/components/image/admec-internal-ui-design-future-prospect-1.jpg"
  },
];

const Service: React.FC = () => {
  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="hero7">
        <div className="hero7-text">
          <h1>Our Services.</h1>
          <p>Better design for your digital product</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-section">
        <p className="section-subtitle">NEWS & ARTICLES</p>
        <h2>Latest News</h2>

        <div className="blog-grid">
          {Services.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <div className="blog-content">
                <span>{post.date}</span>
                <h3>{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Service;
