import React, { useState, useContext } from "react";

import "./Login.css";
import { Container, Form } from "react-bootstrap";
import login_img from "../../assets/images/login_img.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../ApiService/Api";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

function Login() {
  const { login, user, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const [getInput, setGetInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setGetInput((prevState) => ({ ...prevState, [name]: value }));
  };


  
  return (
    // Login section
    <div className="login_section">
      <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="heading text-center">
              <h1 className="fw-bold">Log In</h1>
            </div>
          </div>
        </div>
        <div className="form_container">
          <div className="row">
            <div className="col-lg-6 col-sm-12 image_section">
              <img src={login_img} className="login_img img-fluid" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12 form_contents">
              <div className="form_section">
                <Form onSubmit={(e) => login(e, getInput)}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      size="lg"
                      placeholder="Enter email"
                      name="email"
                      onChange={handleInput}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      size="lg"
                      placeholder="Password"
                      name="password"
                      onChange={handleInput}
                    />
                  </Form.Group>
                  <button className="login_btn">Login</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div className="create_new_account text-center ">
          <Link className="link" to="/signup">
            Create a new account
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Login;
