import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';


function Navbar(){
    return(
      <div className="navbar">
        <Grid container spacing={2}>
        <Grid
        item xs={2}
        textAlign="left"
        >
          <h1>Kadoo</h1>
        </Grid>
        <Grid
        item xs={5}
        display="flex"
        className="links"
        >
          
          <a href="/HomePage">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </Grid>
        <Grid
        item xs={5}
        display="flex"
        className="buttons"
        >
          <a href="/signup">SIGN UP</a>
          <a href="/signin">LOG IN</a>
        </Grid>
        </Grid>
      </div>
    
    );
}

export default Navbar;