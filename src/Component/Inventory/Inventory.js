import './Inventory.css';

import {Button, IconButton, Pagination, Paper, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import React,{useEffect, useState} from 'react'

import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditModal from '../EditModal/EditModal';
import { fetchStock, deleteStock } from '../../services/api';
import { useNavigate } from 'react-router-dom';

function Inventory() {
    const [stock, setStock] = useState([]);
    const [page, setPage] = useState(1);
    const [open, setOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    
    let history=useNavigate();
    const itemsPerPage = 6;

    const displayItems = stock.slice((page - 1) * itemsPerPage, page * itemsPerPage);
    
    const addproduct=()=>{
        let path='/AdminDashboard';
        history(path);
    };
    const mailvendor=()=>{
        let path='/MailVendor';
        history(path);
    }
    
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
    
    
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleOpenModal = (item) => {
        setSelectedItem(item);
        setOpen(true);
      };
    
      const handleCloseModal = () => {
        setOpen(false);
        setSelectedItem(null);
        loadStock();
        
      };
      
      const handleStockDelete = async (item) => {
        try {
            const response = await deleteStock(item?.Name);
             if (response.ok) {
               console.log("Stock deleted SuccessFully");
               loadStock();
             } else {
               console.error("Error in deletion");
             }
           } catch (error) {
             console.error('Error deleting Stock:', error);
           }
      };

  return (
    <div>
        <div className='button_add'>
        <Button variant='outlined' endIcon={<AssignmentTurnedInOutlinedIcon/>} sx={{backgroundColor:'#17BBC0',color:'#FFFFFF',borderColor:'#333333',':hover': {
                        backgroundColor: '#17BBC0',
                        color: '#FFFFFF', borderColor: '#333333'
                    }}} onClick={mailvendor}>PLACE ORDER</Button>
        <Button variant='outlined' endIcon={<ControlPointSharpIcon/>} sx={{backgroundColor:'#17BBC0',color:'#FFFFFF',borderColor:'#333333',':hover': {
                        backgroundColor: '#17BBC0',
                        color: '#FFFFFF',borderColor:'#333333'
                    }}} onClick={addproduct}>ADD NEW PRODUCT</Button></div>

        <TableContainer component={Paper} sx={{ margin: '20px', backgroundColor: '#2c2c2c', color: '#fff' ,borderRadius:'10px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                        <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Category</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Quantity</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Availability</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Price/Unit</TableCell>
                        <TableCell sx={{ color: '#fff' }}>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayItems.map((item) => (
                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ color: '#fff' }}>{item.Name}</TableCell>
                            <TableCell sx={{ color: '#fff' }}>{item.id}</TableCell>
                            <TableCell sx={{ color: '#fff' }}>{item.Category}</TableCell>
                            <TableCell sx={{ color: '#fff' }}>{item.Quantity}/1000</TableCell>
                            <TableCell>
                                <Switch checked={item.Quantity > 0}  sx={{
                                            '& .MuiSwitch-switchBase.Mui-checked': {
                                                color: '#6FCF97',
                                            },
                                            '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                                backgroundColor: '#6FCF97',
                                            },}}/>
                            </TableCell>
                            <TableCell sx={{ color: '#fff' }}>₹ {item.Price}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => handleOpenModal(item)}>
                                    <BorderColorOutlinedIcon sx={{ color: '#568D76' }}/>
                                </IconButton>
                                <IconButton onClick={()=>handleStockDelete(item)}>
                                    <DeleteOutlineOutlinedIcon  sx={{ color: '#C75D7A' }}  />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Pagination
                count={Math.ceil(stock.length / itemsPerPage)}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                shape="rounded"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 2,
                    '& .MuiPaginationItem-root': {
                        color: '#FFFF',
                        backgroundColor: '#474859',
                        '&:hover': {
                            backgroundColor: '#FFFF',
                            color: '#000000',
                        },
                    },
                }}
            />
        
        </TableContainer>
        <EditModal open={open} handleClose={handleCloseModal} item={selectedItem} />
         </div>
  )
}

export default Inventory
