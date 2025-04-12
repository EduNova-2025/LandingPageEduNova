import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  const navLinks = [
    { id: 'quienes-somos', text: 'Quiénes Somos' },
    { id: 'beneficios', text: 'Beneficios' },
    { id: 'caracteristicas', text: 'Características' },
    { id: 'capturas', text: 'Capturas' }
  ];

  return (
    <Navbar 
      expanded={expanded}
      expand="lg" 
      fixed="top" 
      className="navbar py-3"
    >
      <Container>
        <Navbar.Brand>EduNova</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {navLinks.map(({ id, text }) => (
              <Nav.Link 
                key={id}
                onClick={() => scrollToSection(id)}
              >
                {text}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;