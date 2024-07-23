import '../Vendor/Vendor.css';

import { Button, TextField } from '@mui/material'
import React,{useState} from 'react'

function Vendor() {
    const [customer_id, setcustomer_id] = useState('')
    const [Name, setName] = useState('')
    const [Category, setCategory] = useState('')
    const [email, setemail] = useState('')
    const handleVendor = async () => {
        // Create a registration object with the user's data
        const AddVendor = {
          customer_id,
          Name,
          Category,
          email
          
        };
    
        try {
          const response = await fetch('stock/addvendor', { // Replace with your server URL
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(AddVendor),
          });
          if (response.status === 201) {
            // Registration was successful, you can handle success here
            console.log('Vendor Added Sucessfully');
            
          } else {
            // Registration failed, handle the error
            console.error('Vendor Not added');
          }
        } catch (error) {
          // Handle any network or other errors
          console.error('Error during Vendor adding:', error);
        }
      };
    
  return (
    <div className='admin_form'>
       <div className='title'> ADD VENDOR DETAILS</div>
        <TextField variant='outlined' label="Customer_id" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={customer_id} onChange={(e)=>setcustomer_id(e.target.value)}></TextField>
        <TextField variant='outlined' label="Name" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={Name} onChange={(e)=>setName(e.target.value)}></TextField>
        <TextField variant='outlined' label="Category" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={Category} onChange={(e)=>setCategory(e.target.value)}></TextField>
        <TextField variant='outlined' label="E-mail" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={email} onChange={(e)=>setemail(e.target.value)}></TextField>
        <Button variant='outlined' onClick={handleVendor}  sx={{backgroundColor:"#ffff",borderRadius:'5px',borderColor:"black",color:"black",'&:hover':{backgroundColor:'#ffff',color:"black",borderColor:"black"

}}}>ADD VENDOR</Button>
      
    </div>
  )
}

export default Vendor
