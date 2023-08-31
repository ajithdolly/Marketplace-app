import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import { Switch } from '@mui/material';
import {useContext } from 'react';
import ThemeContext from './components/ThemeContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { UserContext } from './components/contexts/UserContext';
import HistoryIcon from '@mui/icons-material/History';
import HomeIcon from '@mui/icons-material/Home';



export default function ButtonAppBar() {
  
  const {checked, setChecked}=useContext(ThemeContext);

  const {currentUser} = useContext(UserContext);

  

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


  const navigate=useNavigate();
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      
<HomeIcon onClick={()=>{navigate("/home")}}/>


        <Typography variant="h6" component="div" sx={{ flexGrow: 1, alignItems: "center", textAlign: "center" }}>
      <h2 >GRAB IT</h2>
    </Typography>
          <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
          
          <Link to='/Profile' >
          <PersonIcon/>
          
          </Link>
          {currentUser.firstname}


         <Link to="/Cart" >
          <AddShoppingCartIcon sx={{m:2,color:'white'}}/>
          </Link>
          <Button color="inherit" onClick={()=>{navigate('/')}}  sx={{background:"red",marginRight:"2%"}} >Log out</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
