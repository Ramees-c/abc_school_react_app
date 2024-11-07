import React, { useState, useEffect } from "react";
import "./EditTeam.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";

function EditTeam() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [editTeam, setEditTeam] = useState({});
  const [getInput, setGetInput] = useState({
    name: "",
    image: "",
  });
  const [fileError, setFileError] = useState("")
  const [imagePreview, setImagePreview] = useState();

  const handleInputName = (e) => {
    setGetInput({ ...getInput, name: e.target.value });
  };
  const handleInputImage = (e) => {
    setGetInput({ ...getInput, image: e.target.files[0] });

    if (e.target.files[0]) {

      if(e.target.files[0].size < 1 * 1000 * 1024) {
        setGetInput({...getInput, image: e.target.files[0]})
        setFileError("");
      }else {
        setFileError("File with maximum size of 1MB is allowed");
      }
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setImagePreview(objectUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const f = new FormData();
    f.append("name", getInput.name);
    f.append("image", getInput.image);

    try {
      const response = await axios.put(`${BASE_URL}/updateteamBy/${id}`, f, {
        headets: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Post Updated", response.data);
      navigate("/allteams");
    } catch (error) {
      console.error("Error update", error);
    }
  };

  useEffect(() => {
    const getEditTeam = async (id) => {
      const response = await axios.get(`${BASE_URL}/getTeamById/${id}`);
      setEditTeam(response.data);
      setGetInput({
        name: response.data.name,
        image: response.data.image,
      });
    };
    getEditTeam(id);
  }, [id]);

  return (
    <div>
      <AdminHeader />

      {/* Edit team section */}

      <div className="edit_team_section">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="form_container">
                <h1 className="text-center my-5">Edit Team</h1>
                <div className="form_section">
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Enter name</Form.Label>
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Enter name"
                        name="name"
                        defaultValue={editTeam.name}
                        onChange={handleInputName}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                      <Form.Label>Image</Form.Label>
                      <Form.Control
                        type="file"
                        size="lg"
                        name="team_image"
                        onChange={handleInputImage}
                      />
                    </Form.Group>
                    <p className='file_error'>{fileError}</p>
                    <div className="image_section">
                      {imagePreview ? (
                        <img src={imagePreview} alt="team_image" />
                      ) : (
                        <img
                          src={`http://192.168.1.27:5000/teamImages/${editTeam.image}`}
                          alt="team_image"
                        />
                      )}
                    </div>
                    <button type="submit" className="edit_team_btn mt-3">
                      Update Team
                    </button>
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

export default EditTeam;
