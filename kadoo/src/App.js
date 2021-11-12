import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import { Pages } from '@mui/icons-material';
import './App.css';
import ProductsPage from './Pages/ProductPlantsPage/ProductsPage';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={ProductsPage}/>
          <Route exact path="/home" component={ProductsPage}/>
        </Switch>
      </Router>
  );
}

export default App;
