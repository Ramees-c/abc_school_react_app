import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';

function AdminHeader() {
 const nav_titles = [
    {
      path: '/admin',
      display: 'Home'
    },
    {
      path: '/addteam',
      display: 'Add Team'
    },
    {
      path: '/addprogram',
      display: 'Add Program'
    },
    {
      path: '/allteams',
      display: 'All Teams'
    },
    {
      path: '/addprogramtoteam',
      display: 'Manage Programs'
    }
      ]
  return (
    //Admin Header section
    <header>
      <div className="header_section">
        <Container>
          <Navbar expand="lg">
            <Container>
              <Navbar.Brand href="#home" className='logo'>ADMIN</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  {
                    nav_titles.map((titles,index) => (
                      <Link to={titles.path} key={index} style={{textDecoration:"none"}}>
                        <Nav className='me-5 text-white fw-bold fs-5 nav_link'>{titles.display}</Nav>
                      </Link>
                    ))
                  }
                  
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>
    </header>
  
  )
}

export default AdminHeader
