import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import fetchBicycleStationsInfo from './actions/BicyclePanelActions/fetchBicycleStationsInfo'
import endPointURL from './const/api'

let middlewares = [thunk];
let appStore = createStore(rootReducer, applyMiddleware(...middlewares));

appStore.dispatch(fetchBicycleStationsInfo(endPointURL + '/bicycles'));

ReactDOM.render(
  <Provider store={appStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
