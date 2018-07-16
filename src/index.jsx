import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';
import { reducer as formReducer } from 'redux-form';

import '../assets/stylesheets/application.scss';

const garageName = prompt("What is your garage?") || `garage${Math.floor(10 + (Math.random() * 90))}`;
const initialState = {
  garage: garageName,
  motorcycles: []
};

import motorcycles_reducer from './reducers/motorcycles_reducer';

const reducers = combineReducers({
  garage: (state = null, action) => state,
  motorcycles: motorcycles_reducer,
  form: formReducer
  // key: reducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM

import MotorcyclesIndex from './containers/MotorcyclesIndex';
import MotorcyclesShow from './containers/MotorcyclesShow';
import MotorcyclesNew from './components/MotorcyclesNew';

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={MotorcyclesIndex} />
        <Route path="/motorcycles/new" exact component={MotorcyclesNew} />
        <Route path="/motorcycles/:id" component={MotorcyclesShow} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
