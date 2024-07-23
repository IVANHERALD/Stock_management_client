import '../EditModal/EditModal.css';

import React,{useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { updateStock } from '../../services/api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  padding: '42px',
  border: '2px solid #B0BEC5',
  boxShadow: 50,
  p: 4,
  borderRadius:8,
  backgroundColor:"#FFFF",
};

const EditModal = ({ open, handleClose, item }) => {
    
    const[quantity,setQuantity]=useState();
    const handleupdate=async(item)=>{
        const response = updateStock(item?.Name,quantity);
        try {
            if (response==200) {
              console.log("updated successfully")
              handleClose();
            } else {
              console.log("Error in updation");
            }
          } catch (error) {
            console.error('Error updating quantity in the backend:', error);
          }

    }
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <div className='edit_name'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Edit<br/>{item?.Name}
        </div></Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <div className='update_modal' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
            <TextField label="Quantity" variant='outlined' onChange={(e)=>setQuantity(e.target.value)}></TextField><br/><br/>
            <Button variant='outlined' onClick={()=>handleupdate(item)} >UPDATE</Button>
            <Button variant='outlined' onClick={handleClose}>Close</Button>
            
          </div>
        </Typography>
        
      </Box>
    </Modal>
  );
};

export default EditModal;
