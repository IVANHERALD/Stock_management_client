import '../DashBoard/DashBoard.css'
import '../AdminDashboard/AdminDashBoard.css'

import { Button, TextField } from '@mui/material'

import {Loginimg} from '../../Asset/Login.jpg'
import React from 'react'

function Login() {
  return (
    <div>
        <div>
            <img src="Loginimg"></img>
        </div>
        
        <div className='dashboard'>
            <div className='title'>LOGIN</div><br/>
      <TextField variant='outlined' label="UserName" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }}/><br/>
      <TextField variant='outlined' label="Password" sx={{ backgroundColor: "#ffff", borderRadius: '5px' }}/><br/>
      <Button variant='outlined' sx={{
          backgroundColor: "#ffff", borderRadius: '5px', borderColor: "black", color: "black", '&:hover': {
            backgroundColor: '#ffff', color: "green", borderColor: "#ffff"

          }}}
>LOGIN</Button>
      </div>
    </div>
  )
}

export default Login
