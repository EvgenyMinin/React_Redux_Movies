import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import MoviesList from "./MoviesList";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={MoviesList} />
          <Route path='/:id' component={MovieDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
