import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ContactForm from "./components/contact/contact-form";
import UpdateContactForm from "./components/contact/UpdateContactForm";
import ContactDetails from "./components/contact/ContactDetails";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ContactDetails />} />
          <Route path="/contact/add" element={<ContactForm />} />
          <Route
            path="/contact/edit/:id"
            // render={() => <UpdateContactForm />}
            element={<UpdateContactForm />}
          />
          <Route />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
