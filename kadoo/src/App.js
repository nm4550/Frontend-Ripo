// Import Initial Files
import React from 'react'
import './App.css'
import './App.css'
// Import Theme Files
import { ThemeProvider } from '@mui/material/styles'
import Theme from './Theme/ThemeGenerator'
// Import Dom And React Components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
// Import Pages
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import HomePage from './Pages/HomePage/HomePage'
import SearchResultProduct from './Components/SearchResultsProduct/SearchResultProduct'
import Cart from './Pages/AddToCart'
import CategoriesPage from './Pages/CategoriesPage'
import ProductPlantsPage from './Pages/ProductPlantsPage/ProductPlantsPage'
import ProductToolsPage from './Pages/ProductToolsPage/ProductToolsPage'
import LandingPage from './Pages/LandingPage/LandingPage'
import ShowCoins from './Components/ShowCoins/ShowCoins'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path='/Coins' component={ShowCoins} />
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/signin' component={SignIn} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/search' component={SearchResultProduct} />
            <Route exact path='/Homepage' exact component={HomePage} />
            <Route path='/cart' exact component={Cart} />
            <Route path='/categories' exact component={CategoriesPage} />
            <Route
              exact
              path='/ProductPlantsPage/:id'
              component={ProductPlantsPage}
            />
            <Route
              exact
              path='/ProductToolsPage/:id'
              component={ProductToolsPage}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
