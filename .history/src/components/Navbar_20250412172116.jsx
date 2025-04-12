// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../customcss/Nav.css'; // You can adjust custom styles if needed

const NavigationBar = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // Hide navbar if screen width is less than 768px (Bootstrap's mobile breakpoint)
      setShowNavbar(window.innerWidth >= 768);
    };

    // Initial check
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!showNavbar) return null; // Don't render navbar on small screens

  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#home" id="logo">SHADY</Navbar.Brand>
        <Nav className="ms-auto">
          {navItems.map((item) => (
            <Nav.Link key={item} as="span">
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
              >
                {item}
              </Link>
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
