import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import Logo from '../../Asset/Ls.png';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const history = useNavigate();
    const [activeItem, setActiveItem] = useState('/');

    const handleItemClick = (path) => {
        history(path);
        setActiveItem(path);
    };

    return (
        <div className="navbar">
            <div className="logo_div">
                <img src={Logo} className="logo" alt="logo_image" />
            </div>
            <div className="nav_items">
                <div className={`nav_item ${activeItem === '/' ? 'active' : ''}`} onClick={() => handleItemClick('/')}>
                    <DashboardIcon className="icon" sx={{ fontSize: '35px' }} />
                    <span>Dashboard</span>
                </div>
                <div className={`nav_item ${activeItem === '/Inventory' ? 'active' : ''}`} onClick={() => handleItemClick('/Inventory')}>
                    <InventoryIcon className="icon" sx={{ fontSize: '35px' }} />
                    <span>Inventory</span>
                </div>
                <div className="nav_item">
                    <SettingsIcon className="icon" sx={{ fontSize: '35px' }} />
                    <span>Settings</span>
                </div>
                <div className={`nav_item ${activeItem === '/AdminDashboard' ? 'active' : ''}`} onClick={() => handleItemClick('/AdminDashboard')}>
                    <AdminPanelSettingsIcon className="icon" sx={{ fontSize: '35px' }} />
                    <span>Admin</span>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
