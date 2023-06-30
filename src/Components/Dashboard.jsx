import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Tracker from './DashComp/Tracker'
import { Link } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import Analytics from './DashComp/Analytics'
import History from './DashComp/History'

function Dashboard() {
  return (
    <div>
<Routes>
    <Route path='/tracker' element={<Tracker/>}/>
    <Route path='/analytics' element={<Analytics/>}/>
    <Route path='/dashboard/history' element={<History/>}/>
</Routes>
<br />

<Link to="/tracker"><Button colorScheme='blue'>Tracker</Button></Link> &nbsp; &nbsp; &nbsp;
<Link to="/dashboard/analytics"><Button colorScheme='blue'>Anatytics</Button></Link> &nbsp; &nbsp; &nbsp;

<Link to="/dashboard/history"><Button colorScheme='blue'>History</Button></Link>
    </div>
  )
}

export default Dashboard