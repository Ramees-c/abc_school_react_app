import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";
import { useParams } from "react-router-dom";

function UserProgramList() {
  const { id } = useParams();
  // state
  const [programs, setPrograms] = useState([]);
  const [programDetails, setProgramDetails] = useState({});

  useEffect(() => {
    const getTeamAndProgram = async (id) => {
      const response = await axios.get(`${BASE_URL}/getTeamById/${id}`);
      setProgramDetails(response.data);
    };
    getTeamAndProgram(id);
  }, [id]);

  return (
    <div>
      <Header />

      <div className="userprogram_list_section py-5">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1 className="text-center mb-5">Program Details</h1>
              </div>
            </div>
            <div className="col-lg-12 mb-5">
              <img
                src={`http://192.168.1.27:5000/teamImages/${programDetails.image}`}
                alt={programDetails.image}
                style={{ width: "100px", height: "80px" }}
              />
              <h3 className="mt-3">{programDetails.name}</h3>
            </div>
            {programDetails.programs?.map((program, index) => (
              <div key={index} className="col-lg-3 mb-5">
                <h3>Program: {program.programId.value}</h3>
                <h3>Rank: {program.rank}</h3>
                <h3>Score: {program.score}</h3>
                <h3>Type: {program.isGroup ? "Group" : "single"}</h3>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default UserProgramList;
