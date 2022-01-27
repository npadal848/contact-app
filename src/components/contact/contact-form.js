import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { useNavigate } from "react-router-dom";
import { addContact } from "../../redux/action/contactActions";

const ContactForm = (props) => {
  const navigate = useNavigate();
  const { dispatch } = props;

  const submitFormHandler = (values) => {
    values["id"] = Math.floor(Math.random() * 1000 + 1);
    dispatch(addContact(values));
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={props.handleSubmit(submitFormHandler)}>
        <div className="form-group">
          <label>Name</label>
          <Field
            className="form-control"
            name="name"
            id="contactName"
            component="input"
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <Field
            className="form-control"
            name="email"
            component="input"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <Field
            className="form-control"
            name="mobileNumber"
            component="input"
            type="number"
            placeholder="Enter Mobile Number"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Add Contact
        </button>
      </form>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     allContacts: state.allContact.connects,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default reduxForm({ form: "contactForm" })(
  // connect(mapStateToProps, mapDispatchToProps)
  ContactForm
);
