// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../customcss/Nav.css'; // Import the custom CSS file

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); // Track if navbar is expanded on mobile
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [navbarVisible, setNavbarVisible] = useState(true);

  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setNavbarVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollpos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      style={{ top: navbarVisible ? '0' : '-80px', transition: 'top 0.3s' }} // Adjust based on your navbar height
    >
      <Container>
        <Navbar.Brand href="#home" id="logo">SHA</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setExpanded(false)} // Close the menu when a link is clicked
                >
                  {item}
                </Link>
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;