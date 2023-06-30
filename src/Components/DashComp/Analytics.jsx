import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Dashboard'
function Analytics() {
  return (
    <div>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Link to="/dashboard"><Button colorScheme='blue'>Back to Dashboard</Button></Link> &nbsp; &nbsp; &nbsp;
    </div>
  )
}

export default Analytics