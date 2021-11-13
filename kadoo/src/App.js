import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Cart from './Pages/AddToCart'
import CategoriesPage from './Pages/CategoriesPage'

const theme = createTheme({
  palette: {
    primary: {
      main: '#71c1a5',
    },
    secondary: {
      main: '#d784a6',
    },
    error: {
      main: '#a3a3a3',
    },
  },
})
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path='/cart' exact component={Cart} />
            <Route path='/categories' exact component={CategoriesPage} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
