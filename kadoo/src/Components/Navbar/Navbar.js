import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


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
            <SearchIcon
            className="Searchicon"
            fontSize="large"/>
            <TextField
            size="small"
            className="Searchbox"
            id="outlined-search"
            label="Search.."
            type="search" />
          <a href="/SignUp">SIGN UP</a>
          <a href="/SignUp">LOG IN</a>
        </Grid>
        </Grid>
      </div>
    
    );
}

export default Navbar;