import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import reducer from "./store/reducer";
import { createStore, combineReducers , applyMiddleware} from "redux";
import {Provider } from "react-redux";

import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";

//Redux Middleware
const logAction = store => {
  return next => {
     return action => {
      const result = next(action);

      console.log(JSON.stringify(result));
       
       return JSON.stringify(result);
     }
  }
}

//combineReducers
const rootReducer = combineReducers({
    rA: reducerA,
    rB: reducerB,
})

// pass `logAction` for middleware in  applyMiddleware
const store = createStore(rootReducer, applyMiddleware(logAction)); 

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>, document.getElementById('root')

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
