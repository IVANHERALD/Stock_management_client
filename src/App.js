import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './Component/DashBoard/DashBoard';
import Inventory from './Component/Inventory/Inventory';
import AdminDashBoard from './Component/AdminDashboard/AdminDashBoard';
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
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
