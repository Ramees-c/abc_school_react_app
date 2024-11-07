import React,{useState} from "react";
import { Container, Form } from "react-bootstrap";
import "./AddTeam.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { BASE_URL } from "../../ApiService/Api";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTeam() {
  const navigate = useNavigate();

  const [getInput, setGetInput] = useState({
    name: "",
    image: ""
  })

  const [fileError, setFileError] = useState("");

  const handleInputName = (e) => {
    setGetInput({...getInput, name: e.target.value})
  }

  const handleInputImage = (e) => {
    if (e.target.files[0]) {
      if(e.target.files[0].size < 1 * 1000 * 1024) {
        setGetInput({...getInput, image: e.target.files[0]})
        setFileError("");
      }else {
        setFileError("File with maximum size of 1MB is allowed");
      }
    }
    
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let f = new FormData();
    f.append('name', getInput.name);
    f.append('image', getInput.image);

    try {
      const response = await axios.post(`${BASE_URL}/addteam`, f, {
        headers: {
          // 'Accept': 'application/json',
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post created", response.data);
      navigate('/allteams')
    } catch (error) {
      console.error("Error creating post:", error);
    }
  }
  return (
    <div>
      <AdminHeader />
      {/* Add team section */}

      <div className="add_team_section">
        <Container>
        <div className="row">
          <div className="col-lg-12">
            <div className="form_container">
              <h1 className="text-center my-5">Add Team</h1>
              <div className="form_section">
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Enter name</Form.Label>
                    <Form.Control
                      type="text"
                      size="lg"
                      placeholder="Enter name"
                      onChange={handleInputName}
                      name='name'
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" size="lg" onChange={handleInputImage} name='team_image' />
                  </Form.Group>
                  <p className='file_error'>{fileError}</p>
                  <button type='submit' className="add_team_btn mt-3">Add Team</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        </Container>
        
      </div>
    </div>
  );
}

export default AddTeam;
