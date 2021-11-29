import React, { useEffect, useState } from 'react';
import "./AppBar.css";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';

function AppBarLand(){
  return(
    <AppBar className="AppBar">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header">
                <h1>Kadoo</h1>
            </Typography>
            <Button variant="outlined">Sign Up</Button>
            <Button variant="outlined">Sign In</Button>
        </Toolbar>
    </AppBar>
  );
}

export default AppBarLand;