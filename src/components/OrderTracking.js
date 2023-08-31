import { Avatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import ButtonAppBar from '../ButtonAppBar';

function OrderTracking({orderHistory}) {
console.log(orderHistory);

  return (
    <>
  
    <ButtonAppBar/>
    <div style={{display:'flex',justifyContent:'center',flexDirection:"column",alignItems:'center'}}>
    <h3>YOUR ORDERS</h3>
    <div style={{ backgroundColor: '#f0f0f0',color:"black", width: 500, }}>
    <table style={{ width: '300' }}>
      <tbody>
        {orderHistory.map((product, key) => (
          <tr key={key}>
            <td style={{ padding: '10px' }}>
              <Avatar alt="User Avatar" src={product.image} style={{ marginRight: 20, width: 100, height: 100 }} />
            </td>
            <td style={{ padding: '10px' }}>
              <ListItemText primary={product.title} secondary={product.desc} />
            </td>
            <td style={{ padding: '10px' }}>
              <Typography variant="body2">$ {product.price}</Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  </div>
  </>
  )
}

export default OrderTracking