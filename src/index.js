import React from "react";
import ReactDOM from "react-dom/client";
import App from "./config/App";
import { Provider } from "react-redux";
import store from "./redux/store";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
