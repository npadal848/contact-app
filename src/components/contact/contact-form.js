import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import ContactDetails from "./ContactDetails";
import { connect } from "react-redux";
import { addContact } from "../../redux/action/contactActions";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmit: false,
    };
  }
  submitFormHandler = (values) => {
    this.state.isFormSubmit = true;
    const { dispatch } = this.props;
    dispatch(addContact(values));
  };
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.submitFormHandler)}>
          <label>Name</label>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Enter Name"
          />
          <br />
          <label>Email</label>
          <Field
            name="email"
            component="input"
            type="email"
            placeholder="Enter Email"
          />
          <br />
          <label>Mobile Number</label>
          <Field
            name="mobileNumber"
            component="input"
            type="number"
            placeholder="Enter Mobile Number"
          />
          <br />
          <button type="submit">Add Contact</button>
          {this.state.isFormSubmit ? <ContactDetails /> : null}
        </form>
      </div>
    );
  }
}

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
