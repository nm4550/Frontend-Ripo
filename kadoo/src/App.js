import './App.css';
import { createMuiTheme, ThemeProvider } from '@mui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#71c1a5'
    },
    secondary:{
      main:'#d784a6'
    },
    error:{
      main:'#a3a3a3'
    }
  }
})
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </div>
  );
}

export default App;
