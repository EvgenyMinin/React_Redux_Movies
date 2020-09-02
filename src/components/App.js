import React from "react";
import { createStore } from "redux";

const App = () => {
  return <div>hello</div>;
};

export default App;

const defaulState = {
  welcome: "Hi",
  otherState: "some stuff",
};

const greeting = (state = defaulState, action) => {
  switch (action.type) {
    case "GREET_ME":
      return { ...state, welcome: "Hello Johnny" };
    case "GREET_WORLD":
      return { welcome: "Hello World!" };
    default:
      return state;
  }
};

const store = createStore(greeting);
console.log("store", store.getState());

store.dispatch({
  type: "GREET_ME",
});

console.log("store", store.getState());
