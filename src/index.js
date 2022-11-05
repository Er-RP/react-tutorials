import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./custom.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h6>Welcome to Redux - Toolkit</h6>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
