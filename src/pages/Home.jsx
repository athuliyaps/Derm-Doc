import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import feature1 from '../assets/Dermdoc.gif'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'





const Home = () => {
  return (
  <div style={{backgroundColor:'rgb(246, 244, 240)'}} >
     <div className='p-5'> 
        <div className=" text-center ">
          <h1 className='text-info'>Welcome to DermDoc</h1>
          <p>We provide expert dermatology services for all your skin care needs.</p>
          <Container>
          <Row className='justify-content-center'>
            <Col xs={12} md={8} lg={6} >
            <Image src={feature1} fluid rounded />
            </Col>
            </Row>
            </Container>
          <p className='mt-2 text-dark fw-bold'>Book your appointment today for personalized care.</p>
          <Link to={'/appointment'}><button className='btn btn-success'>Appointment</button></Link>
          
          
        </div>
    
     </div>
     <div className='mt-1'></div>
     <Footer/>
  </div>
  )
}

export default Home