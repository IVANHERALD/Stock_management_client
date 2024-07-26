import './App.css';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

import AdminDashBoard from './Component/AdminDashboard/AdminDashBoard';
import DashBoard from './Component/DashBoard/DashBoard';
import Inventory from './Component/Inventory/Inventory';
import MailVendor from './Component/Vendor/MailVendor/MailVendor';
import Navbar from './Component/Navbar/Navbar';
import Profile from './Component/Profile/Profile';
import VendorTab from './Component/Vendor/VendorTab/VendorTab';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div className='content'>
        <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/Inventory" element={<Inventory/>}/>
        <Route path="/AdminDashboard" element={<AdminDashBoard/>}/>
        <Route path="/MailVendor" element={<MailVendor/>}/>
        <Route path="/VendorTab" element={<VendorTab/>}/> 
        <Route path="/Profile" element={<Profile/>}/> 
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
