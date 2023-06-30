import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display:'flex', justifyContent:"space-around", backgroundColor:"teal", padding:"10px", color:"white"}}>
        <Link to="/dashboard">DashBoard</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
    </div>
  )
}

export default Navbar