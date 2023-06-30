import React from 'react'
import Dashboard from './Dashboard'
import Login from './Login'
import Signup from './Signup'
import Welcome from './Welcome'
import PrivateRoute from './PrivateRoute'
import Analytics from './DashComp/Analytics'
import History from './DashComp/History'
import Tracker from './DashComp/Tracker'
import {Route, Routes}from 'react-router-dom'

function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/dashboard" element={<PrivateRoute>  <Dashboard/> </PrivateRoute>}/>
            <Route path='/tracker' element={<Tracker/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/dashboard/history' element={<History/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes