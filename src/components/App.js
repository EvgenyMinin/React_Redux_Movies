import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { save, load } from "redux-localstorage-simple";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "../rootReducer";

import MovieDetail from "./Movies/MovieDetail";
import MoviesList from "./Movies/MoviesList";
import Toggle from "./Toggle";

import "./App.css";

const middleware = [logger, thunk];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save()))
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
