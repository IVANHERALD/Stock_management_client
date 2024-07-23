import '../AdminDashboard/AdminDashBoard.css'

import { Button, TextField } from '@mui/material'
import React,{useState} from 'react'

import { addStock } from '../../services/api'

function AdminDashBoard() {
    const [id, setId] = useState('')
    const [Name, setName] = useState('')
    const [Category, setCategory] = useState('')
    const [Quantity, setQuantity] = useState('')
    const [Price, setPrice] = useState('')

    const handleStock = async () => {
        const stockDetails = {
          id,
          Name,
          Category,
          Quantity,
          Price
        };
    
        try {
          const response = await addStock(stockDetails);
          console.log(response);
          if (response.status === 201) {
            console.log('Stock Added Sucessfully'); 
          } else {
            console.error('Stocking Not added');
          }
        } catch (error) {
          console.error('Error during stock adding:', error);
        }
      };
  return (
    <div>
        <div className='admin_form'>
           {/* <div className='dashboard'>*/}
           <div className='title'>ADD STOCK</div>
        <TextField variant='outlined' label="ID" value={id} onChange={(e)=>setId(e.target.value)} sx={{backgroundColor:"#ffff",borderRadius:'5px'}}/>
        <TextField variant='outlined' label="Name" value={Name} onChange={(e)=>setName(e.target.value)} sx={{backgroundColor:"#ffff",borderRadius:'5px'}}/>
        <TextField variant='outlined' label="Category" value={Category} onChange={(e)=>setCategory(e.target.value)} sx={{backgroundColor:"#ffff",borderRadius:'5px'}}/>
        <TextField variant='outlined' label="Quantity" value={Quantity} onChange={(e)=>setQuantity(e.target.value)} sx={{backgroundColor:"#ffff",borderRadius:'5px'}}/>
        <TextField variant="outlined" label="PRICE/UNIT"value={Price} onChange={(e)=>setPrice(e.target.value)} sx={{backgroundColor:"#ffff",borderRadius:'5px'}}/>
        <Button variant='outlined' onClick={handleStock} sx={{backgroundColor:"#ffff",borderRadius:'5px',borderColor:"black",color:"black",'&:hover':{backgroundColor:'#ffff',color:"green",borderColor:"#ffff"

        }}}>Add Stock</Button>
        </div>
        </div>



      
    
  )
}

export default AdminDashBoard
