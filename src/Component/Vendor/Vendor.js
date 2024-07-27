import '../Vendor/Vendor.css';

import { Button, TextField } from '@mui/material'
import React,{useState,useEffect} from 'react'

import { addVendor,fetchNextId } from '../../services/vendor';

function Vendor() {
    const [customer_id, setcustomer_id] = useState('')
    const [Name, setName] = useState('')
    const [Category, setCategory] = useState('')
    const [email, setemail] = useState('')
    async function fetchNextVendorId() {
      try{
        const response = await fetchNextId();
        if(response.ok)
        {
          const data = await response.json();
          setcustomer_id(data.nextId);
        }
      }
      catch(error){
        console.log(error);
      }
    }

    useEffect(()=>{
      fetchNextVendorId();
    },[])
    const handleVendor = async () => {
        // Create a registration object with the user's data
        const vendorDetails = {
          customer_id,
          Name,
          Category,
          email
          
        };
    
        try {
          const response = await addVendor(vendorDetails);

          if (response.status === 201) {
            console.log('Vendor Added Sucessfully');
            
          } else {
            console.error('Vendor Not added');
          }
        } catch (error) {
          console.error('Error during Vendor adding:', error);
        }
      };
    
  return (
    <div className='admin_form'>
       <div className='title'> ADD VENDOR DETAILS</div>
        <TextField variant='outlined' label="Customer_id" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={customer_id} disabled></TextField>
        <TextField variant='outlined' label="Name" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={Name} onChange={(e)=>setName(e.target.value)}></TextField>
        <TextField variant='outlined' label="Category" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={Category} onChange={(e)=>setCategory(e.target.value)}></TextField>
        <TextField variant='outlined' label="E-mail" sx={{backgroundColor:"#ffff",borderRadius:'5px'}} value={email} onChange={(e)=>setemail(e.target.value)}></TextField>
        <Button variant='outlined' onClick={handleVendor}  sx={{backgroundColor:"#ffff",borderRadius:'5px',borderColor:"black",color:"black",'&:hover':{backgroundColor:'#ffff',color:"black",borderColor:"black"

}}}>ADD VENDOR</Button>
      
    </div>
  )
}

export default Vendor
