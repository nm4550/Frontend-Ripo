import React from 'react';
import './App.css';
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import HomePage from './Pages/HomePage/HomePage';
import SearchResultProduct from './Components/SearchResultsProduct/SearchResultProduct';
import { createTheme , ThemeProvider} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const theme = createTheme({
  palette: {
    //grey
    primary: {
      main: '#B8B8B8' ,
      light: '#616161' ,
      dark: '#212121'
    },
    //green
    secondary:
    {
      main: '#B8E0D2' ,
      light: '#7FC7AD' ,
      dark: '#19392D'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signin" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/search" component={SearchResultProduct}/>
        </Switch>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;