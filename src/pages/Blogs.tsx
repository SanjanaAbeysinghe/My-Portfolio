import React from "react";
import "../styles.css";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Software Engineering in the Age of AI",
    date: "January 25, 2023",
    image: "/src/components/image/1743224459264.jpeg",
  },
  {
    id: 2,
    title: "Cloud Computing Explained for Modern Developers",
    date: "January 25, 2023",
    image: "/src/components/image/3-9-1024x868.png",
  },
  {
    id: 3,
    title: "Cybersecurity Basics Every Software Developer Should Know",
    date: "January 25, 2023",
    image: "/src/components/image/cybsec-80.jpg",
  },
  {
    id: 4,
    title: "The Importance of Data Structures and Algorithms in Real-World Projects",
    date: "January 25, 2023",
    image: "/src/components/image/Untitled-1-02-1.png",
  },
  {
    id: 5,
    title: "Frontend vs Backend vs DevOps: Understanding Modern IT Roles",
    date: "January 25, 2023",
    image: "/src/components/image/font-end-vs-backend.webp",
  },
  {
    id: 6,
    title: "Building Scalable Web Applications: Best Practices",
    date: "January 25, 2023",
    image: "/src/components/image/Types-of-Scalability-visual-selection-2048x1479.png",
  },
];

const Blog: React.FC = () => {
  return (
    <div className="blog-page">
      {/* HERO */}
      <section className="hero7">
        <div className="hero7-text">
          <h1>Our Blog.</h1>
          <p>Better design for your digital product</p>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="blog-section">
        <p className="section-subtitle">NEWS & ARTICLES</p>
        <h2>Latest News</h2>

        <div className="blog-grid">
          {blogPosts.map((post) => (
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

export default Blog;
