import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";




function Search(props) {
  const [id, setid] = useState('');

  const searchfunction =() =>{
    props.searchfunction(id)
  }

  return (
    <div>
      
      <Grid container spacing={2} sx={{paddingTop:"50px",justifyContent:"center"}}>
        
          
      <TextField id="standard-basic" label="Type ID to" variant="filled"  onChange={(e) => setid(e.target.value)}/>
      
      <Button variant="contained" onClick={searchfunction}>Search</Button>
      </Grid>
    </div>
  );
}

export default Search;
