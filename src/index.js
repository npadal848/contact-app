import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import ContactForm from "./components/contact/contact-form";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ContactForm />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
