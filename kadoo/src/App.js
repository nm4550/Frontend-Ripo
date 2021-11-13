import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Pages } from '@mui/icons-material';
import ProductsPage from './Pages/ProductPlantsPage/ProductsPage';
import Cart from './Pages/AddToCart';
import CategoriesPage from './Pages/CategoriesPage';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path='/Homepage' exact component={HomePage} />
          <Route exact path="/" component={ProductsPage}/>
          <Route exact path="/home" component={ProductsPage}/>
          <Route path='/cart' exact component={Cart} />
          <Route path='/categories' exact component={CategoriesPage} />
      </Switch>
      </Router>
    </div>
  )
}

export default App
