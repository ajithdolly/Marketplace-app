import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { UserContext } from './contexts/UserContext';
import { useContext } from 'react';
import { Avatar } from '@mui/material';

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];



const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Ajith Dollichan' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review({addItemToCart,totalPrice}) {


  const {currentUser} = useContext(UserContext);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {addItemToCart.map((product,key) => (
          <ListItem key={key} sx={{ py: 1, px: 0 }}>
            <Avatar alt="User Avatar" src={product.image} style={{marginRight:10,width:100,height:100}} /> 
            <ListItemText primary={product.title} secondary={product.desc} />

            <Typography variant="body2">$ {product.price}</Typography>
            
          </ListItem>
        ))}
        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText style={{marginTop:40}}/>TOTAL : $ {totalPrice} 
          <Typography variant="subtitle1" sx={{ fontWeight: 1000 }}>
          
          </Typography>
          
        </ListItem>
        
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{currentUser.firstname} {currentUser.lastname}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}