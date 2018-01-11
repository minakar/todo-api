import React from "react";
import Todos from "./Todos.js";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers";

const middlewares = [thunk];
const store = createStore(reducer, applyMiddleware(...middlewares));

const App = () => {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
};

export default App;
