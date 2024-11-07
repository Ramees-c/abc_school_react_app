import React, { useState, useEffect } from "react";
import "./TeamDetails.css";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Container, Card, Button } from "react-bootstrap";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../ApiService/Api";

function TeamDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [teamDetails, setTeamDetails] = useState({});

  useEffect(() => {
    const viewProduct = async (id) => {
      const response = await axios.get(`${BASE_URL}/getTeamById/${id}`);
      setTeamDetails(response.data);
    };
    viewProduct(id);
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete") === true) {
      const response = await axios.delete(`${BASE_URL}/deleteteamBy/${id}`);
      console.log("deleted", response);
      navigate("/allteams");
    } else {
      console.log("Not deleted");
    }
  };

  return (
    <div>
      <AdminHeader />

      {/* Team Details section */}

      <div className="team_details_section">
        <Container>
          <div className="row">
            <div className="col-lg-12">
              <h1 className="text-center py-5">Team Details</h1>
            </div>
            <div className="col-lg-12">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`http://192.168.1.27:5000/teamImages/${teamDetails.image}`}
                />
                <Card.Body>
                  <Card.Title className="text-center">
                    {teamDetails.name}
                  </Card.Title>

                  <div className="buttons mt-4">
                    <Link to={`/editteam/${teamDetails._id}`}>
                      <Button variant="primary" style={{ width: "100px" }}>
                        Edit
                      </Button>
                    </Link>
                    <Button
                      variant="danger"
                      onClick={handleDelete}
                      style={{ width: "100px" }}
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default TeamDetails;
