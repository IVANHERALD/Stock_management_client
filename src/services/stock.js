export const fetchStock = async () => {
    const response = await fetch('/stock/fetchstock');
    const data = await response.json();
    return data;
};

export const fetchNextId = async() => {
  return await fetch('/stock/getNextStockId');
}


export const addStock = async (stockDetails) => {
    const response = await fetch('/stock/addstock', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(stockDetails)
    });
    return response;
}


export const updateStock = async(stockItemName, quantity) => {
    const response = await fetch(`stock/updateQuantity?Name=${stockItemName}`, {
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
    const response = await fetch(`stock/updateQuantity?Name=${stockItemName}`, {
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
  const response = await fetch(`/stock/deleteStock?Name=${stockItemName}`, {
    method: 'DELETE',
  });
  return response;
}