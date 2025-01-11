import React, { useState } from 'react';
import { FloatingLabel, Form, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const Appointment = () => {
  const [details, setDetails] = useState({
    Name: '',
    Phoneno: '',
    concern: '',
  });
  const [invalidPhn, setInvalidPhn] = useState(false);

  const navigate = useNavigate();

  const handleConfirm = () => {
    const { Name, Phoneno, concern } = details;
    const ValidPhone = /^\+?[1-9]\d{1,14}$/;
    if (Name && Phoneno && concern) {
      if (ValidPhone.test(Phoneno.trim())) {
        setInvalidPhn(false);
        alert('Booked successfully');
        navigate('/confirmation');
      } else {
        setInvalidPhn(true);
      }
    } else {
      alert('Please fill the form completely');
    }
  };

  return (
    <div id="appointment">
      <Container className="d-flex justify-content-center align-items-center min-vh-100" >
        <Row className="justify-content-center w-100">
          <Col xs={12} md={8} lg={6}>
            <div className="text-center border border-rounded p-5 shadow-lg bg-body-secondary rounded" id="booking">
              <h1 className="text-info">Book Appointment</h1>
              <p className="fw-bolder">
                Please fill the form below and
                <br />
                expedite your consultation process.
              </p>
              <FloatingLabel controlId="floatingInput" label="Name" className="mb-3">
                <Form.Control
                  onChange={(e) => setDetails({ ...details, Name: e.target.value })}
                  type="text"
                  placeholder="Name"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Phone number" className="mb-3">
                <Form.Control
                  name="phonenumber"
                  onChange={(e) => setDetails({ ...details, Phoneno: e.target.value })}
                  type="text"
                  placeholder="Phone number"
                />
              </FloatingLabel>
              {invalidPhn && <div className="text-danger">Invalid Phone number</div>}
              <FloatingLabel controlId="floatingConcern" label="Concern">
                <Form.Control
                  onChange={(e) => setDetails({ ...details, concern: e.target.value })}
                  type="text"
                  placeholder="Concern"
                />
              </FloatingLabel>
              <button onClick={handleConfirm} className="btn btn-success w-100 mt-3">
                Confirm
              </button>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Appointment;
