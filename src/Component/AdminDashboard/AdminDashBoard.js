import { Button, TextField } from '@mui/material'
import React from 'react'
import '../AdminDashboard/AdminDashBoard.css'
function AdminDashBoard() {
  return (
    <div>
        <div className='admin_form'>
        <TextField variant='outlined' label="ID" />
        <TextField variant='outlined' label="Name" />
        <TextField variant='outlined' label="Category" />
        <TextField variant='outlined' label="Stock" />
        <TextField variant="outlined" label="PRICE/UNIT" />
        <Button variant='outlined'>Add Stock</Button>
        </div>



      
    </div>
  )
}

export default AdminDashBoard
