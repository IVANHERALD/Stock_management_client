import '../DashBoard/DashBoard.css'
import '../AdminDashboard/AdminDashBoard.css'

import { Button, TextField } from '@mui/material'

import React from 'react'

function Profile() {
  return (
    <div className='admin_form'>
      <div className='title' >  PROFILE</div>
      <div>
        <TextField variant='outlined' label="Company Name" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }}/><br/><br/>
        <TextField variant='outlined' label="E-mail" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }}/><br/><br/>
        <TextField variant='outlined' label="Phone Number" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }}/><br/><br/>
       <center> <Button label="Update" variant='outlined' sx={{
          backgroundColor: "#ffff", borderRadius: '5px', borderColor: "black", color: "black", '&:hover': {
            backgroundColor: '#ffff', color: "green", borderColor: "#ffff"

          }
        }} >UPDATE </Button></center>


      </div>
      
    </div>
  )
}

export default Profile
