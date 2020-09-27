import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../rootReducer";

import MovieDetail from "./MovieDetail";
import MoviesList from "./MoviesList";

const store = createStore(rootReducer, {}, composeWithDevTools());

const App = () => {
  return (
    <Provider store={store}>
      <Router>
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
