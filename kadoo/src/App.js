import React from 'react';
import './App.css';
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from './Pages/HomePage/HomePage';
import SearchResultProduct from './Components/SearchResultsProduct/SearchResultProduct';
//import { createTheme , ThemeProvider} from '@material-ui/core'
import { BrowserRouter as Router, Route, Link, BrowserRouter ,Switch } from 'react-router-dom';
import './App.css';
import Cart from './Pages/AddToCart';
import CategoriesPage from './Pages/CategoriesPage';
import ProductPlantsPage from './Pages/ProductPlantsPage/ProductPlantsPage';
import ProductToolsPage from './Pages/ProductToolsPage/ProductToolsPage';
import LandingPage from './Pages/LandingPage/LandingPage';


//const theme = createTheme({
  //palette: {
    //grey
    //primary: {
      //main: '#B8B8B8' ,
      //light: '#616161' ,
      //dark: '#212121'
    //},
    //green
    //secondary:
    //{
      //main: '#B8E0D2' ,
      //light: '#7FC7AD' ,
      //dark: '#19392D'
    //}
  //},
  //typography: {
    //fontFamily: 'Quicksand',
    //fontWeightLight: 400,
    //fontWeightRegular: 500,
    //fontWeightMedium: 600,
    //fontWeightBold: 700,
  //}
//})

function App() {
  return (
    //<ThemeProvider theme={theme}>
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
    //</ThemeProvider>
    
  );
}

export default App;