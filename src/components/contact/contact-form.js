import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import {
  renderField as Input,
  validate,
} from "../common/validation/form-validation";
import { addContact } from "../../redux/action/contactActions";

class ContactForm extends Component {
  constructor(props) {
    super(props);
  }

  submitFormHandler = (values) => {
    const { dispatch, history } = this.props;
    const { allContact } = this.props;
    values["id"] = allContact.length + 1;
    dispatch(addContact(values));
    history.push("/");
  };

  render() {
    return (
      <div className="container">
       
        <form onSubmit={this.props.handleSubmit(this.submitFormHandler)}>
          <div className="form-group">
            <Field
              className="form-control"
              name="name"
              id="contactName"
              component={Input}
              type="text"
              placeholder="Enter Name"
              // validate={required} // this is for Field level validation
              label="Name"
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              name="email"
              component={Input}
              type="email"
              placeholder="Enter Email"
              // validate={required}
              label="Email"
            />
          </div>
          <div className="form-group">
            <Field
              className="form-control"
              name="mobileNumber"
              component={Input}
              type="text"
              placeholder="Enter Mobile Number"
              label="Mobile Number"
              // validate={required}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allContact: state.allContact.contacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default reduxForm({
  form: "contactForm",
  validate, // passing validate function for managing validation centrally
})(connect(mapStateToProps, mapDispatchToProps)(ContactForm));
