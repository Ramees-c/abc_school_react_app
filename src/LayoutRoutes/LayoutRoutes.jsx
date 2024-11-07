import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import UserHome from '../pages/UserHome/UserHome'
import AdminPage from '../pages/AdminPage/AdminPage'
import Signup from '../pages/SignUp/Signup'
import Login from '../pages/Login/Login'
import Footer from '../components/Footer/Footer'
import AddTeam from '../pages/AddTeam/AddTeam'
import AddProgram from '../pages/AddProgram/AddProgram'
import TeamList from '../pages/TeamList/TeamList'
import TeamDetails from '../pages/TeamDetails/TeamDetails'
import EditTeam from '../pages/EditTeam/EditTeam'
import AddProgramToTeam from '../pages/AddProgramToTeam/AddProgramToTeam'

function LayoutRoutes() {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<UserHome/>} />
            <Route path='/admin' element={<AdminPage/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/addteam' element={<AddTeam/>} />
            <Route path='/addprogram' element={<AddProgram/>} />
            <Route path='/allteams' element={<TeamList/>} />
            <Route path='/teamdetails/:id' element={<TeamDetails/>} />
            <Route path='/editteam/:id' element={<EditTeam/>} />
            <Route path='/addprogramtoteam' element={<AddProgramToTeam/>}/> 
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default LayoutRoutes
