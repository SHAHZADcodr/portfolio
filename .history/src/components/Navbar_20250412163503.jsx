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

  // Hide/show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (Math.abs(prevScrollpos - currentScrollPos) > 5) {
        setNavbarVisible(prevScrollpos > currentScrollPos || currentScrollPos < 10);
        setPrevScrollpos(currentScrollPos);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollpos]);

  // Dynamically adjust body padding based on navbar height
  useEffect(() => {
    const updateBodyPadding = () => {
      const navbarEl = document.querySelector('.navbar');
      if (navbarEl) {
        const navHeight = navbarEl.offsetHeight;
        document.body.style.paddingTop = `${navHeight}px`;
      }
    };

    updateBodyPadding();
    window.addEventListener('resize', updateBodyPadding);

    return () => window.removeEventListener('resize', updateBodyPadding);
  }, []);

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
      style={{
        top: navbarVisible ? '0' : '-80px',
        transition: 'top 0.3s',
        zIndex: '1000', // Ensures it stays on top
      }}
    >
      <Container>
        <Navbar.Brand href="#home" id="logo">SHADY</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-70} // Matches navbar height
                  onClick={() => setExpanded(false)}
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
