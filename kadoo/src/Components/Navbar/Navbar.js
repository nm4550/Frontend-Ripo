import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import UserDropDown from '../UserDropDown/UserDropDown';


function Navbar(){
      const [userNav, setUserNav] = useState(false)
      const [normalNav, setNav] = useState(true)
      const handleNav = e => {
        setNav(false)
      }
      const handleUserNav = e => {
        setUserNav(true)}
    return(
      <div className="navbar">
        <Grid container spacing={2}>
        <Grid
        item xs={12} sm={2} md={2}
        >
          <h1>Kadoo</h1>
        </Grid>
        <Grid
        item xs={12} sm={4} md={4}
        className="links"
        >
          
          <a href="/HomePage">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact Us</a>
        </Grid>
        <Grid
        item xs={12} sm={4} md={4}
        display="flex"
        className="searchBox"
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
        </Grid>
        <Grid
        item xs={12} sm={2} md={2}
        display="flex"
        className="buttons"
        >
          {normalNav && <a href="/SignUp">SIGN UP</a>}
          {normalNav && <a href="/SignUp">LOG IN</a>}
        </Grid>
        </Grid>
      </div>
    
    );
}

export default Navbar;