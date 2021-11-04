import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path='/Homepage' exact component={HomePage} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
