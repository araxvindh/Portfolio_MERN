import "../css/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="nav-header">
      <nav className="nav">
        <ul className="nav-list">
          <li><Link className="nav-link" to="/home">Home</Link></li>
          <li><Link className="nav-link" to="/about">About</Link></li>
          <li><Link className="nav-link" to="/skills">Skills</Link></li>
          <li><Link className="nav-link" to="/project">Project</Link></li>
          <li><Link className="nav-link" to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
