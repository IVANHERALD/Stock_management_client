

export const fetchVendor = async() => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/fetchvendor`);
    return response;
  }
  
  export const addVendor = async (vendorDetails) =>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/addvendor`, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorDetails),
    });
    return response;
  };
  export const fetchNextId = async() => {
    return await fetch(`${process.env.REACT_APP_API_URL}/stock/getNextVendorId`);
  }