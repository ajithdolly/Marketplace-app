

import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ButtonAppBar from '../ButtonAppBar';
import { UserContext } from './contexts/UserContext';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {

    const {currentUser} = useContext(UserContext);

  const navigate=useNavigate();

  return (
    <div>
        <ButtonAppBar/>
    <Card sx={{ maxWidth:700,maxHeight1:400, margin: 'auto', marginTop: '70px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <Avatar src={'https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg'} alt={"asd"} sx={{ width: 200, height: 200,marginTop:5}} />
          <Typography variant="h5">Hai {currentUser?.firstname}</Typography>
          <br></br>
          <Typography variant="h5">Mobile No:8281898989</Typography>
          <br></br>
          <Typography variant="h5">Email:{currentUser?.email}</Typography>
          <br></br>
        <Button variant='contained' onClick={()=>{navigate('/OrderTracking')}}>your orders</Button>
          <br></br>
        </Box>
      </CardContent>
    </Card>
    </div>
  );
};

export default UserProfile;
