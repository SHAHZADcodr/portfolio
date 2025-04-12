// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../customcss/Nav.css'; // Import the custom CSS file

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To handle mobile menu toggle
  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1></h1> {/* Replace this with your logo */}
      </div>
      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map(item => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-60}
              activeClass="active"  // Automatically adds 'active' class to the active link
              onClick={() => setIsMenuOpen(false)} // Close the menu when a link is clicked
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
