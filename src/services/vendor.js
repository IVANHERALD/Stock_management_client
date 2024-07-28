export const fetchVendor = async() => {
    const response = await fetch('/stock/fetchvendor');
    return response;
  }
  
  export const addVendor = async (vendorDetails) =>{
    const response = await fetch('stock/addvendor', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendorDetails),
    });
    return response;
  };
  export const fetchNextId = async() => {
    return await fetch('/stock/getNextVendorId');
  }