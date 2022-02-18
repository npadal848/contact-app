import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { updateContact, getContact } from "../../redux/action/contactActions";
import { withRouter } from "react-router-dom";
import {
  renderField as Input,
  validate,
  upper,
  lower,
  mobileNumber,
} from "../common/validation/form-validation";

class UpdateContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(props) {
    this.getContactById(props);
  }

  getContactById = (props) => {
    const id = props.match.params.id;
    const { allContacts, dispatch } = props;

    const updatedContact = allContacts.filter((contact) => contact.id == id);
    dispatch(getContact(updatedContact[0]));
  };

  updateFormHandler = (values) => {
       const {dispatch} = this.props
      dispatch(updateContact(values));
      this.props.history.push("/");
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.updateFormHandler)}>
          <div>
            <Field
              className="form-control"
              name="name"
              id="contactName"
              component={Input}
              label="Name"
              type="text"
              normalize={upper}
            />
          </div>
          <div>
            <Field
              className="form-control"
              name="email"
              component={Input}
              label="Email"
              type="email"
              normalize={lower}
            />
          </div>
          <div>
            <Field
              className="form-control"
              name="mobileNumber"
              component={Input}
              label="Mobile Number"
              type="text"
              normalize={mobileNumber}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg btn-block">
            Update Contact
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allContacts: state.allContact.contacts,
    initialValues: state.allContact.editableContact,
  };
};

export default withRouter(
  connect(mapStateToProps)(
    reduxForm({
      form: "updateContactForm",
      enableReinitialize: true,
      validate,
    })(UpdateContactForm)
  )
);
