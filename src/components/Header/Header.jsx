import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";

function Header() {
  const nav_titles = [
    {
      path: '/',
      display: 'Home',
    },
    {
      path: '/teams',
      display: 'Teams',
    },
    {
      path: '/programs',
      display: 'Programs',
    },
    
  ]
  return (
    // Header section
    <header>
      <div className="header_section">
        <Container>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home" className='logo'>ABC <span>SCHOOL</span> </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {
                    nav_titles.map((title) => (
                      <Nav.Link href="#home" className='me-5 text-white fw-bold fs-5 nav_link'>{title.display}</Nav.Link>
                    ))
                  }
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </header>
  );
}

export default Header;
