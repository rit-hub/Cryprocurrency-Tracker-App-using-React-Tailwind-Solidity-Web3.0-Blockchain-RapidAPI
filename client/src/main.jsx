import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { TransactionsProvider } from "./context/TransactionContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <TransactionsProvider>
        <App />
      </TransactionsProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
