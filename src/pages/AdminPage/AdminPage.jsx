import React, { useState, useEffect, useContext } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Table } from "react-bootstrap";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";
import { AuthContext } from "../../context/authContext";

function AdminPage() {
  // States
  const [teamList, setTeamList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user, isAuthenticated } = useContext(AuthContext);

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

  

  return (
    <div>
      <AdminHeader />

      {/* Team list */}
      <div className="admin_team_list_section py-5">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <div className="heading mb-5">
                <h1 className="text-center">Team List</h1>
              </div>
              <div className="table_section">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Team Name</th>
                      <th>Team Image</th>
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

export default AdminPage;
