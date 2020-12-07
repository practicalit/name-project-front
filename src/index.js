import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import './assets/css/all.min.css';
import './assets/css/landing.css';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import reducer from './reducers/index';

//creating global store. Store is nothing but the one which collects
//and hold the parameters to be accessed later - states. 

const store = createStore(reducer);

//see the provider is now acting as a parent component and App is child
//since everything is under App, any component will have access to the 
//state at any given time.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
