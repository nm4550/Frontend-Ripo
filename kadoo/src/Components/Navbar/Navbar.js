import React from 'react';
import "./Navbar.css";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';



function Navbar(){
    return(
    <nav className="navbar">
        <h1>KADOO</h1>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#069c5e',
            borderRadius: '8px'
          }}>LOG IN</a>
          <a href="/create" style={{ 
            color: 'white', 
            backgroundColor: '#069c5e',
            borderRadius: '8px' 
          }}>SIGN UP</a>
        </div>
    </nav>
    );
}

export default Navbar;