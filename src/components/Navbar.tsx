import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/" className="nav-links">Home</Link></li>
        <li><Link to="/about"className="nav-links">About</Link></li>
        <li><Link to="/skills"className="nav-links">Skills</Link></li>
        <li><Link to="/blogs"className="nav-links">Blogs</Link></li>
        <li><Link to="/services"className="nav-links">Services</Link></li>
      </ul>
      <button className="btn-primary">Let's Talk</button>
    </nav>
  );
}

export default Navbar;
