import React from "react";
import "./Signup.css";
import { Container, Form } from "react-bootstrap";
import signup_img from "../../assets/images/signup_image.jpg";
import { Link } from 'react-router-dom';

function Signup() {
  
  return (
    // Signup section
    <div className="signup_section">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h1 className='fw-bold'>Sign Up</h1>
            </div>
          </div>
        </div>
        <div className="form_container">
          <div className="row">
            <div className="col-lg-6 image_section">
              <img src={signup_img} className="signup_img img-fluid" alt="" />
            </div>
            <div className="col-lg-6 form_contents">
              <div className="form_section">
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" size="lg" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" size="lg" placeholder="Password" />
                  </Form.Group>
                  <button className="signup_btn">Sign up</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="already_account_section text-center ">
            <Link className='link' to='/login'>Already have an account?</Link>
        </div>
      </Container>
    </div>
  );
}

export default Signup;
