import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
  <div>
       <div id='contactheading'>
            <div className='d-flex justify-content-center align-items-center  p-4'>
                <div >
                    <p className='text-light mt-5 fw-bolder fs-1 mt-5' >   Have any questions or need assistance?<span className='fs-3 ' > <br />Get in touch with us,  we'll respond as soon as possible.</span></p>
                   <div className='d-flex justify-content-center align-items-center mt-5'>
                        <i class="fa-solid fa-phone text-light fs-1 me-3 "></i>
                        <p className='text-center text-light  fw-bolder fs-2 mb-1'>Contact Us</p>
                   </div>
                    <p className='text-center text-light  fw-semibold fs-3 mt-2'>+91  9539417589 <br /> +91  8935248792</p>
                    <p className='text-center text-light  fw-semibold fs-3'>Email id: dermDoc@co.in</p>
                    
                    </div>  
                </div>
            </div>
            
       <div id='available'>
        <div  className='d-flex justify-content-center align-items-center'>
            <div >
                            <p className='mt-2 mb-2'>Available us on</p>
                            <div className='d-flex justify-content-around align-items-center py-2'>
                             <a href=""><i class="fa-brands fa-instagram"></i></a>
                             <a href=""><i class="fa-brands fa-facebook"></i></a>
                             <a href=""><i class="fa-brands fa-twitter"></i></a>
                            </div>
           </div>
        </div>
  </div>
  <Footer/>
  </div>
  )
}

export default Contact