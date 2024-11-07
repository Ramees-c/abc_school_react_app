import React, { useState } from "react";
import "./AddProgram.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";

function AddProgram() {
  const [getInput, setGetInput] = useState({
    value: "",
    label: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setGetInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(`${BASE_URL}/createProgram`, getInput);
      console.log("Post created", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };
  return (
    <div>
      <AdminHeader />

      {/* Add program section */}
      <div className="add_program_section">
        <Container />
        <div className="row">
          <div className="col-lg-12">
            <div className="form_container">
              <h1 className="text-center my-5">Add Program</h1>
              <div className="form_section">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Value</Form.Label>
                    <Form.Control
                      type="text"
                      size="lg"
                      placeholder="Enter value"
                      name="value"
                      onChange={handleInput}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Label</Form.Label>
                    <Form.Control
                      type="text"
                      size="lg"
                      placeholder="Enter Label"
                      name="label"
                      onChange={handleInput}
                    />
                  </Form.Group>
                  <button className="add_team_btn mt-3">Add Team</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProgram;
