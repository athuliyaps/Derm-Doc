import React, { useState } from 'react'
import { Col, Container, FloatingLabel,Form, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'





const Appointment = () => {
  
  const [details,setDetails]= useState({
    Name:"",Phoneno:"",concern:""
  })
  console.log(details);
  const[invalidPhn,setInvalidPhn] =useState(false)

  const navigate =useNavigate();
  
  const handleConfirm =()=>{
  const {Name,Phoneno,concern}=details
  console.log(details);
  const ValidPhone = /^\+?[1-9]\d{1,14}$/
  if(Name && Phoneno && concern){
    
    if(ValidPhone.test(Phoneno.trim())){
     setInvalidPhn(false)
     alert("Booked succesfully")
     navigate('/confirmation')
    }else{
      setInvalidPhn(true)
    }
    
   
    
  }else{
    alert("Please fill the form completely")
  }
  }

  
  
  return (
    <div>
    <div className='d-flex justify-content-center align-items-center min-vh-100 ' id='appointment'>
        <Row className='justify-content-center'>
          <Col xs={12} md={8} lg={12}>
          
                <div className='text-center mt-5 border border-rounded p-5 shadow-lg p-3 mb-5 bg-body-secondary rounded ' id='booking'>
                <h1 className='text-info'>Book Appointment</h1>
                <p className='fw-bolder'>Please fill the form below and 
                    <br />expedite your consultation process.</p>
                    <FloatingLabel
                    style={{width:'400px'}}
                    controlId="floatingInput"
                    label="Name"
                    className="mb-3"
                   
                  >
                    <Form.Control  onChange={e=>setDetails({...details,Name:e.target.value})}   type="text" placeholder="name" />
                  </FloatingLabel>
                  <FloatingLabel  style={{width:'400px'}} className='mb-3' controlId="floatingPassword" label="Phone number">
                    <Form.Control name='phonenumber'  onChange={e=>setDetails({...details,Phoneno:e.target.value})} type="text" placeholder="Phone number" />
                  </FloatingLabel>
                  {
                    invalidPhn && <div className='text-danger'>Invalid Phone number</div>
                  }
                 
                  <FloatingLabel  style={{width:'400px'}} controlId="floatingPassword" label="Concern">
                    <Form.Control  onChange={e=>setDetails({...details,concern:e.target.value})}  type="text" placeholder="Concern" />
                  </FloatingLabel>
                  <button onClick={handleConfirm} className='btn btn-success w-25 mt-3'>confirm</button>
               
                </div>
                </Col>
        </Row>
        </div>
         <Footer/></div>
  )
}


export default Appointment