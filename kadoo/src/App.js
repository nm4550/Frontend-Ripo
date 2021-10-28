import {
  BrowserRouter as Router,
  Switch,
  BrowserRouter,
  Route,
} from 'react-router-dom'
import AddToCart from './pages/AddToCart'
import Categories from './pages/Category'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/AddToCart' component={AddToCart} />
          <Route exact path='/Categories' component={Categories} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
