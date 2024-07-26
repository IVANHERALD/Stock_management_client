import '../DashBoard/DashBoard.css'
import '../AdminDashboard/AdminDashBoard.css'

import { Button, TextField } from '@mui/material'

import React, { useState } from 'react'
import { addadmin } from '../../services/admin';

function Profile() {
  const [companyname,setcompanyname]=useState();
  const [email,setemail]=useState();
  const [phonenumber,setphonenumber]=useState();
   console.log(companyname,email,phonenumber);
   const handleupdate=async()=>{
    const adminDetails = {
      companyname,
      email,
      phonenumber
    };
    try {
      const response = await addadmin(adminDetails);
      console.log(response);
      if (response.status === 201) {
        console.log('Admin Added Sucessfully'); 
      } else {
        console.error('Admin Not added');
      }
    } catch (error) {
      console.error('Error during Admin adding:', error);
    }
  };

   
  return (
    <div className='admin_form'>
      <div className='title' >  PROFILE</div>
      <div>
        <TextField variant='outlined' label="Company Name" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }} onChange={(e)=>setcompanyname(e.target.value)}/><br/><br/>
        <TextField variant='outlined' label="E-mail" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }} onChange={(e)=>setemail(e.target.value)}/><br/><br/>
        <TextField variant='outlined' label="Phone Number" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }} onChange={(e)=>setphonenumber(e.target.value)}/><br/><br/>
       <center> <Button label="Update"  onClick={handleupdate} variant='outlined' sx={{
          backgroundColor: "#ffff", borderRadius: '5px', borderColor: "black", color: "black", '&:hover': {
            backgroundColor: '#ffff', color: "green", borderColor: "#ffff"

          }
        }} >UPDATE </Button></center>


      </div>
      
    </div>
  )
}

export default Profile
