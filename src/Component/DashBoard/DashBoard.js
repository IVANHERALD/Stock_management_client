import '../DashBoard/DashBoard.css'
import '../AdminDashboard/AdminDashBoard.css'

import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { deductStock, fetchStock } from '../../services/api'

import AdminDashBoard from '../AdminDashboard/AdminDashBoard'
import Navbar from '../Navbar/Navbar'

function DashBoard() {
  const [stock,setStock]=useState([]);
  const [Name,setName]=useState('');
  const [quantity,setQuantity]=useState();
  
  const loadStock = async () => {
    try {
        const data = await fetchStock();
        setStock(data.stock);
    } catch (error) {
        console.error('Error loading stock data:', error);
    }
};

useEffect(() => {
    loadStock();
}, []);
  const handleupdate=async()=>{
    console.log(Name,quantity);
    const response = await deductStock(Name,quantity);
    try {
        if (response.ok) {
          console.log("updated successfully");
        } else {
          console.log("Error in updation");
        }   
      } catch (error) {
        console.error('Error updating quantity in the backend:', error);
      }
  
  }
  return (
    <div>
    <div className="dashboard">
    <div className='title'>INVENTORY DEDUCTION</div><br/><br/>
    <Autocomplete
        freeSolo
        options={stock.map((item)=>item.Name)}
        value={Name}
        onChange={(event, newValue) => setName(newValue)}
        inputValue={Name}
        onInputChange={(event, newInputValue) => setName(newInputValue)}
        renderInput={(params) => (
      <TextField {...params} label="Name" variant='outlined'sx={{backgroundColor:"#ffff",borderRadius:'5px',width:"210px"}} onChange={(e)=>setName(e.target.value)}/>)}
      /><br/><br/>
      <TextField label="Quantity" variant='outlined' sx={{backgroundColor:"#ffff",borderRadius:'5px'}} onChange={(e)=>setQuantity(e.target.value)}/><br/><br/>
      <Button label="Update" variant='outlined' sx={{backgroundColor:"#ffff",borderRadius:'5px',borderColor:"black",color:"black",'&:hover':{backgroundColor:'#ffff',color:"green",borderColor:"#ffff"

}}} onClick={handleupdate}>UPDATE QUANTITY</Button>
      

    </div>
    </div>
  )
}

export default DashBoard
