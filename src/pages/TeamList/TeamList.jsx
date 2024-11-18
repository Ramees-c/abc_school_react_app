import React,{useState,useEffect} from "react";
import "./TeamList.css";
import { Container,Card } from "react-bootstrap";
import axios from 'axios';
import { BASE_URL } from "../../ApiService/Api";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import { Link } from 'react-router-dom'

function TeamList() {
    const [teamList, setTeamList] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${BASE_URL}/getAllteams`)
            setTeamList(response.data)
            
        }
        fetchData();
    }, [])
    
  return (
    <div>
      <AdminHeader/>
      <div className="team_list_section">
      <Container>
        <div className="row">
          <div className="col-lg-12 py-5">
            <h1 className="text-center">All Teams</h1>
          </div>
          {
            teamList.map((team, index) => (
                <div key={index} className="col-lg-3 mb-5 ms-5">
            <Card style={{ width: "18rem" }} className='text-center'>
              <Card.Img variant="top" src={`http://192.168.1.16:5000/teamImages/${team.image}`} style={{height:'200px'}} />
              <Card.Body>
                <Card.Title>{team.name}</Card.Title>
                <Link to={`/teamdetails/${team._id}`}>
                <button className='add_program_btn'>View</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
            ))
          }
        </div>
      </Container>
    </div>
    </div>
  );
}

export default TeamList;
