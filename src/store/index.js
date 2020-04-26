import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Container from "@material-ui/core/Container";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import combinedReducers from "./store/Reducers";

import * as serviceWorker from "./serviceWorker";

const store = createStore(combinedReducers);

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="md">
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
