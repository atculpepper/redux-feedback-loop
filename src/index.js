import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
import ViewFeeling from "./components/Views/ViewFeeling/ViewFeeling";

import { createStore, combineReducers } from "redux";

const feelingsReducer = (state = 0, action) => {
  return state;
};

const understandingReducer = (state = 0, action) => {
  return state;
};

const supportReducer = (state = 0, action) => {
  return state;
};

const commentReducer = (state = "", action) => {
  return state;
};

const storeInstance = createStore(
  combineReducers({
    feelingsReducer,
    supportReducer,
    commentReducer,
    understandingReducer,
  })
  //   applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
