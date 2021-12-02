import React, { useEffect, useState } from 'react';
import "./AppBar.css";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AppBar } from '@mui/material';
import history from '../../history';

function AppBarLand(){
  const handleSubmit = () => {
    history.push("/signup");
    window.location.reload(true);
  }

  const handleSubmitSignIn = () => {
    history.push("/signin");
    window.location.reload(true);
  }
  
  return(
    <AppBar className="AppBar">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header">
                <h1>Kadoo</h1>
            </Typography>
            <Button variant="outlined" type="submit" onClick={handleSubmit}>Sign Up</Button>
            <Button variant="outlined" onClick={handleSubmitSignIn}>Sign In</Button>
        </Toolbar>
    </AppBar>
  );
}

export default AppBarLand;