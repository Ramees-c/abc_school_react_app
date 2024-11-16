import React, { useState, useEffect } from "react";
import "./AddProgramToTeam.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Form } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

function AddProgramToTeam() {
  const navigate = useNavigate();
  // state
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
  const [teamType, setTeamType] = useState("");
  const [isEdit, setIsEdit] = useState(true);

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
    if (isEdit === true) {
      try {
        const response = await axios.post(
          `${BASE_URL}/addTeamToProgram`,
          getInput
        );
        console.log("Post created", response.data);
        navigate("/allteams");
      } catch (error) {
        console.error("Error creating post:", error);
      }
    } else {
      try {
        const response = await axios.put(
          `${BASE_URL}/editTeamInProgram`,
          getInput
        );
        console.log("Post updated", response.data);
      } catch (error) {
        console.error("Error updating post", error);
      }
    }
  };

  const handleEditProgram = async () => {
    if (getInput.teamId === "" || getInput.teamId === null) {
      setTeamProgramError({ teamError: "Please select team" });
    } else if (getInput.programId === "") {
      setTeamProgramError({ programError: "Please select program" });
    } else {
      try {
        const response = await axios.get(
          `${BASE_URL}/getTeamProgramDetails?teamId=${getInput.teamId}&programId=${getInput.programId}`
        );
        setEditInput(response.data);
        if (editInput.isGroup === true) {
          setTeamType("group");
        } else {
          setTeamType("single");
        }
      } catch (error) {
        console.error("Error getting team program details:", error);
        setTeamProgramError({ programError: "Program not added in team  " });
      }
    }

    setIsValue(true);
    setIsEdit(false);
  };

  const handleDelete = () => {
    if (getInput.teamId === "" || getInput.teamId === null) {
      setTeamProgramError({ teamError: "Please select team" });
    } else if (getInput.programId === "") {
      setTeamProgramError({ programError: "Please select program" });
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            const response = axios.delete(`${BASE_URL}/deleteTeamFromProgram`);
            console.log("Deleted", response.data);
            swalWithBootstrapButtons.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons.fire({
              title: "Cancelled",
              text: "Your imaginary file is safe :)",
              icon: "error",
            });
          }
        });
    }
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
                      {team.map((teams, index) => (
                        <option value={teams._id} key={index}>
                          {teams.name}
                        </option>
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
                      {programs.map((program, index) => (
                        <option value={program._id} key={index}>
                          {program.label}
                        </option>
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
                      value={teamType}
                    >
                      <option>Select team type</option>
                      <option value="single">Single</option>
                      <option value="group">Group</option>
                    </Form.Select>

                    <button type="submit" className="add_team_btn mt-3">
                      {isEdit ? "Submit" : "Update"}
                    </button>
                  </Form>
                  <button
                    type="button"
                    className="edit_program_btn mt-3"
                    onClick={handleEditProgram}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className="del_program_btn mt-3"
                    onClick={handleDelete}
                  >
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
