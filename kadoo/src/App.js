import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Pages } from '@mui/icons-material';
import './App.css';
import ProductsPage from './Pages/ProductPlantsPage/ProductsPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/Homepage' exact component={HomePage} />
        <Route exact path="/" component={ProductsPage}/>
          <Route exact path="/home" component={ProductsPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
