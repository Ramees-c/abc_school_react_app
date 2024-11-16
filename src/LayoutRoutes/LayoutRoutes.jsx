import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserHome from "../pages/UserHome/UserHome";
import AdminPage from "../pages/AdminPage/AdminPage";
import Signup from "../pages/SignUp/Signup";
import Login from "../pages/Login/Login";
import Footer from "../components/Footer/Footer";
import AddTeam from "../pages/AddTeam/AddTeam";
import AddProgram from "../pages/AddProgram/AddProgram";
import TeamList from "../pages/TeamList/TeamList";
import TeamDetails from "../pages/TeamDetails/TeamDetails";
import EditTeam from "../pages/EditTeam/EditTeam";
import AddProgramToTeam from "../pages/AddProgramToTeam/AddProgramToTeam";
import UserTeamList from "../pages/UserTeamList/UserTeamList";
import UserProgramList from "../pages/UserProgramList/UserProgramList";

import { AuthContext } from "../context/authContext";
import FourNotFout from "../components/FourNotFour/FourNotFout";

function LayoutRoutes() {
  const { user, isAuthenticated } = useContext(AuthContext);

 
  
  

  return (
    <>
      <Routes>
        <Route path="/" element={<UserHome />} />

        <Route path="/login" element={<Login />} />
        {isAuthenticated ? (
          <Route path="/admin" element={<AdminPage />} />
        ) : (
          <Route path="/admin" element={<Navigate to="/login" />} />
        )}
        <Route path="/signup" element={<Signup />} />

        <Route path="/addteam" element={<AddTeam />} />
        <Route path="/addprogram" element={<AddProgram />} />
        <Route path="/allteams" element={<TeamList />} />
        <Route path="/teamdetails/:id" element={<TeamDetails />} />
        <Route path="/editteam/:id" element={<EditTeam />} />
        <Route path="/addprogramtoteam" element={<AddProgramToTeam />} />
        <Route path="/userteamlist" element={<UserTeamList />} />
        <Route path="/userprogramlist/:id" element={<UserProgramList />} />
        <Route path="*" element={<FourNotFout />} />
      </Routes>
      <Footer />
    </>
  );
}

export default LayoutRoutes;
