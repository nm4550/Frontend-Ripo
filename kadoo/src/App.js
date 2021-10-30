import React from 'react';
import './App.css';
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { createTheme , ThemeProvider} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const theme = createTheme({
  palette: {
    //grey
    primary: {
      main: '#424242' ,
      light: '#616161' ,
      dark: '#212121'
    },
    //green
    secondary:
    {
      main: '#3E8E71' ,
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
          <Route exact path="/" component={SignIn}/>
          <Route exact path="/signup" component={SignUp}/>
        </Switch>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;