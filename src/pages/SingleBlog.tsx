import React from "react";
import "./SingleBlog.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const SingleBlog: React.FC = () => {
  return (
    <div className="single-blog-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Single Blog.</h1>
          <p>Better design for your digital product</p>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="profile"
          />
        </div>
      </section>

      {/* BLOG CONTENT */}
      <section className="blog-container">
        <div className="featured-image">
          <img
            src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
            alt="featured"
          />
        </div>

        <div className="blog-meta">
          <span>👤 Admin</span>
          <span>💬 3 Comments</span>
          <span>📁 Design</span>
        </div>

        <h2 className="blog-title">
          Build a Creative Agency Website in 4 Steps.
        </h2>

        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            suscipit, purus vitae interdum hendrerit, justo massa tempor velit,
            nec posuere sapien lorem ut libero. Curabitur facilisis eros eget
            velit dictum, vitae luctus lacus efficitur.
          </p>

          <p>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Sed consequat odio nec mi tincidunt, vel
            viverra turpis dictum. Proin vitae orci nec risus fermentum
            facilisis.
          </p>

          <p>
            Integer nec libero quis arcu volutpat luctus. Aenean in neque
            feugiat, tristique odio sed, efficitur lorem. Praesent euismod
            ultrices elit, vel tincidunt elit feugiat sed.
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-left">
          <h2>Brant</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="footer-right">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <div className="social-icons">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SingleBlog;
