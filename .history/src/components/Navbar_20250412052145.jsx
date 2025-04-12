// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-scroll';
import '../customcss/'; // Import the custom CSS file

const Navbar = () => {
  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  return (
    <nav className="navbar">
      <ul>
        {navItems.map(item => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-60}
              activeClass="active"  // Automatically adds 'active' class to the active link
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
