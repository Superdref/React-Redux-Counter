import React from "react";
import ReactDom from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import { createStore } from "redux";
import CounterReducer from "./counterReducer";

const store = createStore(
  counterReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
