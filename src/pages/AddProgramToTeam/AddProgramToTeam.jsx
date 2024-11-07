import React, { useState, useEffect } from "react";
import "./AddProgramToTeam.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";

function AddProgramToTeam() {
  const [team, setTeam] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [isSingle, setIsSingle] = useState();
  const [isGroup, setIsGroup] = useState();
  const [getInput, setGetInput] = useState({
    teamId: "",
    programId: "",
    score: "",
    rank: "",
    isSingle: false,
    isGroup: false,
  });
  const [teamProgramError, setTeamProgramError] = useState({
    teamError: "",
    programError: "",
  });
  const [editInput, setEditInput] = useState({});
  const [isValue, setIsValue] = useState(false);
  const [team_type, setTeam_type] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;

    setGetInput((prevState) => ({ ...prevState, [name]: value }));

    if (name === "team_type") {
      if (isSingle !== "" && isGroup !== "") {
        if (e.target.value === "single") {
          setIsSingle(true);
          setIsGroup(false);
          setGetInput({ ...getInput, isGroup: false, isSingle: true });
        } else if (e.target.value === "group") {
          setIsGroup(true);
          setIsSingle(false);
          setGetInput({ ...getInput, isSingle: false, isGroup: true });
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/addTeamToProgram`,
        getInput
      );
      console.log("Post created", response.data);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  console.log(editInput);
  

  const handleEditProgram = async () => {
    if (getInput.teamId === "" || getInput.teamId === null) {
      setTeamProgramError({ teamError: "Please select team" });
    } else if (getInput.programId === "" || getInput.programId === null) {
      setTeamProgramError({ programError: "Please select program" });
    } else {
      const response = await axios.get(
        `${BASE_URL}/getTeamProgramDetails?teamId=${getInput.teamId}&programId=${getInput.programId}`
      );
      setEditInput(response.data);
      if(editInput.isGroup === true) {
        setTeam_type("Group")
      } else{
        setTeam_type("Single")
      }
    }
    
    setIsValue(true);
  };

  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BASE_URL}/getAllteams`);
      setTeam(response.data);
      const response2 = await axios.get(`${BASE_URL}/getAllPrograms`);
      setPrograms(response2.data);
    };
    fetchData();
  }, []);

  
var a = "Single"
  return (
    <div>
      <AdminHeader />

      {/* Add program to team section */}
      <div className="add_program_to_team_section">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="add_program_container">
                <h1 className="text-center mb-5">Add Program To Team</h1>
                <div className="form_section">
                  <Form onSubmit={handleSubmit}>
                    <Form.Label>Team</Form.Label>
                    <Form.Select
                      className="mb-3"
                      size="lg"
                      aria-label="Default select example"
                      name="teamId"
                      onChange={handleInput}
                    >
                      <option>Select a team</option>
                      {team.map((teams) => (
                        <option value={teams._id}>{teams.name}</option>
                      ))}
                    </Form.Select>
                    <p style={{ color: "red" }}>{teamProgramError.teamError}</p>
                    <Form.Label>Program</Form.Label>
                    <Form.Select
                      className="mb-3"
                      size="lg"
                      aria-label="Default select example"
                      name="programId"
                      onChange={handleInput}
                    >
                      <option>Select a program</option>
                      {programs.map((program) => (
                        <option value={program._id}>{program.label}</option>
                      ))}
                    </Form.Select>
                    <p style={{ color: "red" }}>
                      {teamProgramError.programError}
                    </p>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Score</Form.Label>
                      <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Enter score"
                        name="score"
                        onChange={handleInput}
                        defaultValue={isValue ? editInput.score : null}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                      <Form.Label>Rank</Form.Label>
                      <Form.Control
                        type="number"
                        size="lg"
                        placeholder="Enter rank"
                        name="rank"
                        onChange={handleInput}
                        defaultValue={isValue ? editInput.rank : null}
                        required
                      />
                    </Form.Group>
                    <Form.Label>Team Type</Form.Label>
                    <Form.Select
                      className="mb-3"
                      size="lg"
                      aria-label="Default select example"
                      name="team_type"
                      onChange={handleInput}
                      defaultValue=""
                    >
                      <option>Select team type</option>
                      <option value="single">Single</option>
                      <option value="group">Group</option>
                    </Form.Select>

                    <button type="submit" className="add_team_btn mt-3">
                      Submit
                    </button>
                  </Form>
                  <button
                    type="button"
                    className="edit_program_btn mt-3"
                    onClick={handleEditProgram}
                  >
                    Edit
                  </button>
                  <button type="button" className="del_program_btn mt-3">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default AddProgramToTeam;
