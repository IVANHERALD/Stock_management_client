import '../Vendor.css'

import { Autocomplete, Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { fetchVendor } from '../../../services/vendor';

function MailVendor() {
    const [Name,setName]=useState('');
    const [Category,setCategory]=useState('');
    const [quantity, setQuantity] = useState('');
    const [vendorDetails, setVendorDetails] = useState([]);
    const [filteredNames, setFilteredNames] = useState([]);
    const [uniqueCategories, setUniqueCategories] = useState([]);
    const [selectedVendor, setSelectedVendor] = useState(null);


    useEffect(() => {

        const fetchVendorDetails = async () => {
            try {
                const response = await fetchVendor();
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setVendorDetails(data.VendorDetails1);
                const categories = [...new Set(data.VendorDetails1.map(vendor => vendor.Category))];
                setUniqueCategories(categories);
                console.log("console",data.VendorDetails1);
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchVendorDetails();
    }, []);
    useEffect(() => {
        if (Category) {
          const filtered = vendorDetails
            .filter(vendor => vendor.Category === Category)
            .map(vendor => vendor.Name);
          setFilteredNames(filtered);
        } else {
          setFilteredNames([]);
        }
      }, [Category, vendorDetails]);
      
      useEffect(() => {
        if (Name) {
          const vendor = vendorDetails.find(v => v.Name === Name);
          setSelectedVendor(vendor);
        } else {
          setSelectedVendor(null);
        }
      }, [Name, vendorDetails]);
      
      const handleMailVendor = () => {
        
        if (selectedVendor) {
            console.log("selected",selectedVendor);
        
          const vendor = vendorDetails.find(v => v.Name === selectedVendor);
          console.log(vendor);
          if (selectedVendor) {
            const email = selectedVendor.email; // Assuming you have an 'Email' field for vendors
            const subject = 'Order Request from Lakshmi Engineering Industries';
            const body = `Dear ${selectedVendor.Name},\n\n` +
            `We would like to place an order for the following products in the ${selectedVendor.Category} category:\n\n` +
            `Quantity: ${quantity}\n\n` +
            `Please email us the bill at your earliest convenience.\n\n` +
            `Best Regards,\n` +
            
            `[Lakshmi Engineering Industries]`;
    
            window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
          }
        }
      };
    
  return (
    <div className='mail'>
       <div className='title'> MAIL VENDOR </div>
       <Autocomplete
        freeSolo
        options={uniqueCategories}
        value={Category}
        onChange={(event, newValue) => setCategory(newValue)}
        inputValue={Category}
        onInputChange={(event, newInputValue) => setCategory(newInputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            label="Category"
            sx={{ backgroundColor: "#ffff", borderRadius: '5px',width:"270px" }}
          />
        )}
      />
      <Autocomplete
        freeSolo
        options={filteredNames}
        value={Name}
        onChange={(event, newValue) => setName(newValue)}
        inputValue={Name}
        onInputChange={(event, newInputValue) => setName(newInputValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            label="Name"
            sx={{ backgroundColor: "#ffff", borderRadius: '5px' ,width:"270px"}}
          />
        )}
      />
      <TextField
        variant='outlined'
        label="Quantity"
        sx={{ backgroundColor: "#ffff", borderRadius: '5px',width:"270px" }}
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button
        variant='outlined'
        sx={{
          backgroundColor: "#ffff", borderRadius: '5px', borderColor: "black", color: "black",
          '&:hover': { backgroundColor: '#ffff', color: "green", borderColor: "white" }
        }} onClick={handleMailVendor}
      >MAIL VENDOR</Button>
      
    </div>
  )
}

export default MailVendor
