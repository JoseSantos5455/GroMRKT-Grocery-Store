import React from 'react';
import './App.css';
import MarketHome from './components/MarketHome';
import Cart from './components/Cart/Cart'
import { Provider } from 'react-redux';
import store from './redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={MarketHome} />
            <Route path="/cart" component={Cart} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
