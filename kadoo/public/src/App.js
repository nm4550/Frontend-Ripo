import React from 'react';
import './App.css';
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from './Pages/HomePage/HomePage';
import SearchResultProduct from './Components/SearchResultsProduct/SearchResultProduct';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import Cart from './Pages/AddToCart';
import CategoriesPage from './Pages/CategoriesPage';
import ProductPlantsPage from './Pages/ProductPlantsPage/ProductPlantsPage';
import ProductToolsPage from './Pages/ProductToolsPage/ProductToolsPage';
import LandingPage from './Pages/LandingPage/LandingPage';


const Theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#069c5e',
    },
    secondary: {
      main: '#B8E0D2',
    },
    divider: '#aaaaaa',
  },
});

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/search" component={SearchResultProduct}/>
          <Route exact path='/Homepage' exact component={HomePage} />
          <Route path='/cart' exact component={Cart} />
          <Route path='/categories' exact component={CategoriesPage} />
          <Route exact path="/ProductPlantsPage/:id" component={ProductPlantsPage}/>
          <Route exact path="/ProductToolsPage/:id" component={ProductToolsPage}/>
        </Switch>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;