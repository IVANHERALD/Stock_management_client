export const fetchStock = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/fetchstock`);
    const data = await response.json();
    return data;
};

export const fetchNextId = async() => {
  return await fetch(`${process.env.REACT_APP_API_URL}/stock/getNextStockId`);
}


export const addStock = async (stockDetails) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/addstock`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockDetails)
    });
    return response;
}


export const updateStock = async(stockItemName, quantity) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/updateQuantity?Name=${stockItemName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newQuantity:  quantity,
          operation:"add"
        }),
      });
      return response;
  
}
export const deductStock=async(stockItemName,quantity)=>{
    const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/updateQuantity?Name=${stockItemName}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newQuantity:  quantity,
          operation:"subtract"
        }),
      });
      return response;
    
}

export const deleteStock = async(stockItemName) =>{
  const response = await fetch(`${process.env.REACT_APP_API_URL}/stock/deleteStock?Name=${stockItemName}`, {
    method: 'DELETE',
  });
  return response;
}