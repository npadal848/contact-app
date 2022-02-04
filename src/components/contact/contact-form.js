import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addContact } from "../../redux/action/contactActions";

const ContactForm = (props) => {
  const history = useHistory();
  const { dispatch } = props;

  const submitFormHandler = (values) => {
    const { allContact } = props;
    values["id"] = allContact.length + 1;
    dispatch(addContact(values));
    history.push("/");
  };

  const required = (value) => {
    return value || typeof value === "number" ? undefined : "Required";
  };

  const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          className={input.className}
          placeholder={label}
          type={type}
        />
        {/* {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))} */}
      </div>
    </div>
  );

  return (
    <div className="container">
      <form onSubmit={props.handleSubmit(submitFormHandler)}>
        <div className="form-group">
          <label>Name</label>
          <Field
            className="form-control"
            name="name"
            id="contactName"
            component={renderField}
            type="text"
            placeholder="Enter Name"
            validate={required}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <Field
            className="form-control"
            name="email"
            component={renderField}
            type="email"
            placeholder="Enter Email"
            validate={required}
          />
        </div>
        <div className="form-group">
          <label>Mobile Number</label>
          <Field
            className="form-control"
            name="mobileNumber"
            component={renderField}
            type="number"
            placeholder="Enter Mobile Number"
            validate={required}
          />
        </div>
        <button type="submit" className="btn btn-primary btn-lg btn-block">
          Add Contact
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    allContact: state.allContact.contacts,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default reduxForm({ form: "contactForm" })(
  connect(mapStateToProps)(ContactForm)
);
