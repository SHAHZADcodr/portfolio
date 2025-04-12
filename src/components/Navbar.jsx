import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../customcss/Nav.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);
  const navItems = ['home', 'about', 'education', 'projects', 'contact'];

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="navbar-custom"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand href="#home" id="logo">SHADY</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navItems.map((item) => (
              <Nav.Link key={item} as="span">
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  offset={-60}
                  onClick={() => setExpanded(false)} // 🔥 close on click
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
