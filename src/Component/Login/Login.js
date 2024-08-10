import '../Login/Login.css'

import { Button, InputAdornment, TextField } from '@mui/material'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import React from 'react'
import login2 from '../../Asset/l2.jpeg'
import login3 from '../../Asset/l3.jpeg'

function Login() {
  return (
    <div className='login_main'>
        <div className='login_sub'>
                  <div className='img_container'>
            <img className="img" src={login3}/>
        </div>
        <div className='login'> 
            <h1>Welcome</h1>
            <h3>Sign in to your Account</h3>  
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AlternateEmailIcon />
            </InputAdornment>
          ),
          style: { borderRadius: '25px' } 
        }} variant='outlined' label="UserName" sx={{ '& .MuiOutlinedInput-root': {
      borderRadius: '25px'},backgroundColor: "#ffff",borderRadius:'25px'}}/><br/><br/>
      <TextField InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
          style: { borderRadius: '25px' } 
        }} variant='outlined' label="Password" sx={{ '& .MuiOutlinedInput-root': {
      borderRadius: '25px'},backgroundColor: "#ffff",borderRadius:'25px'}}/><br/><br/>
      <Button variant='outlined' sx={{
          backgroundColor: "#ffff", borderRadius: '5px', borderColor: "black", color: "black", '&:hover': {
            backgroundColor: '#ffff', color: "green", borderColor: "#ffff"
          }}}
>SIGN IN</Button>
      </div>
      </div>
      </div>
  
    
  )
}

export default Login
