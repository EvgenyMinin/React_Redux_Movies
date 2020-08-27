import React from "react";
import { createStore } from "redux";

const App = () => {
  return <div>hello</div>;
};

export default App;

const hello = () => ({ welcome: "hello" });
const store = createStore(hello);
console.log("store", store.getState());
