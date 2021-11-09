import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Cart from './Pages/AddToCart'

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
      <ThemeProvider theme={theme}>
        <Cart />
      </ThemeProvider>
    </div>
  )
}

export default App
