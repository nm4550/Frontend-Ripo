import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Navbar_User from "./Components/Navbar_User/Navbar_User";
import Navbar_Admin from "./Components/Navbar_Admin/Navbar_Admin";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'

const theme = createMuiTheme({
  palette: {
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
    <Navbar_User/>
    <Navbar_Admin/>
    <Home/>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
