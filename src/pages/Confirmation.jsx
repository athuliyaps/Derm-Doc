import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Confirmation = () => {
  return (
    
      <div >
        <div >
          <Row className='justify-content-center align-items-center'>
           <Col xs={12} md={8} lg={12}>
              <div className='d-flex justify-content-center align-items-center  mb-0' >
                <div  className='text-center mt-5'>
          
                <div className='d-flex justify-content-around'>
                  <i class="fa-regular fa-circle-check display-3 text-info mt-5  ">   
                  </i>
                  <h1 className='mt-5 text-info fw-bolder me-3 display-4 '>Thank you </h1>
                </div>
              <p className=' text-info fw-semibold ' >Your details have been saved successfully <br /> we will get back to you soon</p>
          
                </div>
              
                </div>
           </Col>
          </Row>
            
        </div>
      </div>
   
   
  )
}

export default Confirmation