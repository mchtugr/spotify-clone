import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FaSpotify } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <nav className='header'>
      <Link to='/'>
        <img src='logo.png' alt='' width='auto' height='40px' />
      </Link>
      <ul className='nav-items-container'>
        <li className='nav-items'>Premium</li>
        <li className='nav-items'>Destek</li>
        <li className='nav-items'>İndir</li>
        <li className='seperator'>|</li>
        <li className='nav-items nav-items-secondary'>Kaydol</li>
        <li className='nav-items nav-items-secondary'>Oturum aç</li>
      </ul>
    </nav>
    // <Navbar
    //   bg='dark'
    //   variant='dark'
    //   expand='lg'
    //   collapseOnSelect
    //   className='header'
    // >
    //   <Container>
    //     <LinkContainer to='/'>
    //       <Navbar.Brand className='d-flex align-items-center'>
    //         <img src='logo.png' alt='' width='auto' height='40px' />
    //       </Navbar.Brand>
    //     </LinkContainer>
    //     <Navbar.Toggle aria-controls='spotify-navbar' className='toggle-icon' />
    //     <Navbar.Collapse id='spotify-navbar'>
    //       <Nav>
    //         <Nav.Link className='navbar-items'>Premium</Nav.Link>
    //         <Nav.Link className='navbar-items'>Destek</Nav.Link>
    //         <Nav.Link className='navbar-items'>Indir</Nav.Link>
    //         <Nav.Link className='navbar-items'>|</Nav.Link>
    //         <Nav.Link className='navbar-items'>Kaydol</Nav.Link>
    //         <Nav.Link className='navbar-items'>Oturum Ac</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Header
