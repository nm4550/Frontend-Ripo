import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { ListItemSecondaryAction } from '@material-ui/core';

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
    <Home/>
    </div>
    </Router>
    </ThemeProvider>
  );
}

export default App;
