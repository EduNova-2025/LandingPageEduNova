import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <Navbar 
      expanded={expanded}
      expand="lg" 
      fixed="top" 
      className="header bg-white"
    >
      <Container>
        <Navbar.Brand className="logo">EduNova</Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="navbar-nav" 
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              onClick={() => scrollToSection('quienes-somos')}
              className="nav-link"
            >
              Quiénes Somos
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('beneficios')}
              className="nav-link"
            >
              Beneficios
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('caracteristicas')}
              className="nav-link"
            >
              Características
            </Nav.Link>
            <Nav.Link 
              onClick={() => scrollToSection('capturas')}
              className="nav-link"
            >
              Capturas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;