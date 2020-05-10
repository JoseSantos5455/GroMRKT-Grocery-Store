import React from 'react';
import './App.css';
import MarketHome from './components/MarketHome';
import { Provider } from 'react-redux';
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MarketHome />
      </div>
    </Provider>
  );
}

export default App;
