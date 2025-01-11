import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Header = () => {
  return (

    <div style={{zIndex:1}} className=" w-100">
      <Navbar id='navbar'  variant="dark" expand="lg"  data-bs-theme="dark">
        <Container>
            <Link to={'/'} style={{textDecoration:"none"}}></Link>
          <Navbar.Brand href="#home">
          <Link to={'/'}  style={{textDecoration:'none' }} className='fw-bolder fs-3 text-info' >  <i class="fa-solid fa-diamond me-2 "> </i>DermDoc</Link>
         </Navbar.Brand>
    {/* Toggle Button for Small Screens */} 
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* Collapsible Navbar Content */}
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Item className="ms-auto d-flex justify-content-between">
            <Nav.Item  href="#home" style={{color:'white' }} ><Link to={'/'} style={{textDecoration:"none" }} className='me-5 text-info '>Home</Link></Nav.Item>
            <Nav.Item href="#features" style={{color:'white' }}><Link to={'/appointment'} style={{textDecoration:"none" }} className='me-5 text-info nav-link'>Appointment</Link></Nav.Item>
            <Nav.Item href="#features" style={{color:'white' }}><Link to={'/contact'} style={{textDecoration:"none" }} className='nav-link text-info'>Contact</Link></Nav.Item>

          </Nav.Item>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </div>
  )
}

export default Header