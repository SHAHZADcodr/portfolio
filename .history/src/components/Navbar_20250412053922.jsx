import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../customcss/Nav.css'; // Import the custom CSS file

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false); // Track if navbar is expanded on mobile

  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  return (
    <Navbar
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      bg="dark"
      variant="dark"
      fixed="top"
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="your-logo.png" // Replace with your logo path
            alt="Logo"
            style={{ maxWidth: '120px', height: 'auto' }} // Adjust logo size
          />
        </Navbar.Brand>
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
