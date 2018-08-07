import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import fetchBicycleStationsInfo from './actions/fetchBicycleStationsInfo'

let middlewares = [thunk];
let appStore = createStore(rootReducer, applyMiddleware(...middlewares));

appStore.dispatch(fetchBicycleStationsInfo('http://serwerpiwny-dsriviera.herokuapp.com/bicycles'));
	
ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
