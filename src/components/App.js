import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from 'redux-logger';

import rootReducer from "../rootReducer";

import MovieDetail from "./MovieDetail";
import MoviesList from "./MoviesList";
import Toggle from "./Toggle";

import "./App.css";

const middleware = [logger];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Toggle />
        <div className="App">
          <Switch>
            <Route exact path="/" component={MoviesList} />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
