import React,{useEffect, useState} from 'react'

import { fetchStock } from '../../services/stock';

function MailNotification() {
    const [stock, setStock] = useState([]);
    const loadStock = async () => {
        try {
            const data = await fetchStock();
            setStock(data.stock);
            console.log(data.stock);
            
        } catch (error) {
            console.error('Error loading stock data:', error);
        }
    }
    useEffect(() => {
        loadStock();
    }, []); 
    ;
  return (
    <div>
      
    </div>
  )
}

export default MailNotification
