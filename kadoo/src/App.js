import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Navbar_User from "./Components/Navbar_User/Navbar_User";
import Navbar_Admin from "./Components/Navbar_Admin/Navbar_Admin";
import Sidebar from './Components/Sidebar/Sidebar'
import ShowProduct from './Components/ShowProduct/ShowProduct'
import Navbar_Specialist from "./Components/Navbar_Specialist/Navbar_Specialist";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



const theme = createMuiTheme({
  palette: {
    background: {
      paper: '#71C1A5',
    },
    primary: {
      main: '#B8E0D2'
    },
    secondary:{
      main:'#F0D1DE'
    },
    error:{
      main:'#C7AED5'
    }
  }
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <div>
    <Navbar/>
    
    <Box>
      <Grid container>
        <Grid xs={2}>
        <Sidebar/>
        </Grid>
        <Grid xs={10} >
        <ShowProduct/>
        </Grid>
      </Grid>
    </Box>
    
    
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
