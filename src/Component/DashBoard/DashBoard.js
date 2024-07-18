import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Button, TextField } from '@mui/material'
import '../DashBoard/DashBoard.css'
import AdminDashBoard from '../AdminDashboard/AdminDashBoard'
function DashBoard() {
  return (
    <div>
    <div className="dashboard">
      <TextField label="Name" variant='outlined'/><br/><br/>
      <TextField label="Quantity" variant='outlined'/><br/><br/>
      <Button label="Update" variant='outlined'>Enter</Button>
      

    </div>
    </div>
  )
}

export default DashBoard
