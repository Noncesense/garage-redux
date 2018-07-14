import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  motorcycles: [
      { id: 1, brand: 'Moto Guzzi', model: 'Le Mans', owner: 'Seb', plate: 'WOB-ED-42' },
      { id: 2, brand: 'BMW', model: 'R100RS', owner: 'Max', plate: 'AAA-12-BC' },
      { id: 3, brand: 'Honda', model: 'CB 750', owner: 'Alex', plate: '418-ED-94' },
      { id: 4, brand: 'Honda', model: 'CB 750', owner: 'Max', plate: '1234-XD-75' }
    ]
};

import motorcycles_reducer from './reducers/motorcycles_reducer';

const reducers = combineReducers({
  garage: (state = null, action) => state,
  motorcycles: motorcycles_reducer,
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM

import MotorcyclesIndex from './containers/MotorcyclesIndex';
import MotorcyclesShow from './containers/MotorcyclesShow';

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MotorcyclesIndex} />
        <Route path="/motorcycles/:id" component={MotorcyclesShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
