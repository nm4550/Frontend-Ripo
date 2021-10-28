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

class productPage extends React.Component {
    render() {
      return(
          <div></div>
      )
    }
  }