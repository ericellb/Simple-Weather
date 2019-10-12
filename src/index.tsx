import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Components/Dashboard';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './Reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Dashboard />
  </Provider>,
  document.getElementById('root')
);
