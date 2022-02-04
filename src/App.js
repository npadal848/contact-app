import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import ContactForm from "./components/contact/contact-form";
import UpdateContactForm from "./components/contact/UpdateContactForm";
import ContactDetails from "./components/contact/ContactDetails";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ContactDetails} />
          <Route path="/contact/add" exact component={ContactForm} />
          <Route path="/contact/edit/:id" exact component={UpdateContactForm} />
          <Route />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
