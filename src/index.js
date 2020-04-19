import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";

import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";

const feelingsReducer = (state = {}, action) => {
  if (action.type === "SET_FEELING") {
    console.log(action.payload);
    return { ...action.payload };
  }
  return state;
};

const understandingReducer = (state = {}, action) => {
  if (action.type === "SET_UNDERSTANDING") {
    console.log(action.payload);
    return { ...action.payload };
  }
  return state;
};

const supportReducer = (state = {}, action) => {
  if (action.type === "SET_SUPPORT") {
    console.log(action.payload);
    return { ...action.payload };
  }
  return state;
};

const commentReducer = (state = {}, action) => {
  if (action.type === "SET_COMMENT") {
    console.log(action.payload);
    return { ...action.payload };
  }
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    supportReducer,
    commentReducer,
    understandingReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
