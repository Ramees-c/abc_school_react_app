import React, { useState, useEffect } from "react";
import "./UserTeamList.css";
import Header from "../../components/Header/Header";
import { Container, Table, Button } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";
import { Link } from "react-router-dom";

function UserTeamList() {
  // states
  const [teamList, setTeamList] = useState([]);
  const [sortedTotalScore, setSortedTotalScore] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getAllteams`);
        setTeamList(response.data);
      } catch (error) {
        console.error("Error getting teams", error);
      }
    };
    fetchData();
  }, []);
  

  teamList.sort((a, b) => (
    a-b
    
  ))
  
  console.log(teamList);
  
  
  return (
    <div>
      <Header />

      {/* team list */}

      <div className="user_team_list_section py-5">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h1 className="text-center mb-5">Team List</h1>
              </div>
              <div className="table_section">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Image</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamList.map((team, index) => (
                      <tr key={index}>
                        <td>{team._id.slice(0, 5)}</td>
                        <td>{team.name}</td>
                        <td>
                          <img
                            src={`http://192.168.1.27:5000/teamImages/${team.image}`}
                            alt={team.image}
                            style={{ width: "60px" }}
                          />
                        </td>
                        <td>
                          <Link to={`/userprogramlist/${team._id}`}>
                            <Button>View programs</Button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default UserTeamList;
