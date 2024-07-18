import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logo from '../../Asset/Ls.png'
import {useNavigate} from "react-router-dom";
import './Navbar.css'
import DashBoard from '../DashBoard/DashBoard';
import AdminDashBoard from '../AdminDashboard/AdminDashBoard';
function Navbar() {
    const history=useNavigate();
    const Inventory=()=>{
        let path='/Inventory';
        history(path);
    }
    const DashBoard=()=>{
        let path='/';
        history(path);
    }
    const AdminDashBoard=()=>{
        let path='/AdminDashboard';
        history(path);
    }

  return (
    <div className='navbar'>
        <div className="logo_div">
        <img src={Logo} className='logo'/></div>
        <div className='nav_items'>
        <div className='nav_item'>
        <DashboardIcon className='icon' sx={{fontSize:'35px'}} onClick={DashBoard}/>
        <span>DashBoard</span></div>
        <div className='nav_item'>
        <InventoryIcon className='icon' sx={{fontSize:'35px'}} onClick={Inventory}/>
        <span>Inventory</span></div>
        <div className='nav_item'>
        <SettingsIcon className="icon" sx={{fontSize:'35px'}}/>
        <span>Settings</span></div>
        <div className='nav_item'>
        <AdminPanelSettingsIcon className='icon' sx={{fontSize:'35px'}} onClick={AdminDashBoard}/>
        <span>Admin</span></div>
        </div>
    </div>
  )
}

export default Navbar
