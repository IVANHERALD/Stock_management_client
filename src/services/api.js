export const fetchStock = async () => {
    const response = await fetch('/stock/fetchstock');
    const data = await response.json();
    return data;
};

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

    
}