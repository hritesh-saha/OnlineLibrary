import logo from "./icon.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ backgroundColor: "beige", border: "solid" }}>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} className="logo" alt="icon" />
          <span className="brand-name">
            <Link to="/home">InfiniteLibrary</Link>
          </span>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
          <div className={`bar ${isOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li className="link">
            <Link to="/home">Home</Link>
          </li>
          <li className="link">
            <Link to="/subject">Subjects</Link>
          </li>
          <li className="link">
            <Link to="/">Login/SignUp</Link>
          </li>
          <li className="link">
            <Link to="/review">Reviews</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
