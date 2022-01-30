import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addContact, getContact } from "../../redux/action/contactActions";
import { withRouter } from "react-router-dom";

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
    console.log("updateFormHandler");
    const { allContacts } = this.props;
    const updatedContacts = allContacts.filter((contact) => {
      if (contact.id === values.id) {
        contact.name = values.name;
        contact.email = values.email;
        contact.mobileNumber = values.mobileNumber;
      }
    });
    const { dispatch } = this.props;
    if (updatedContacts.length > 0) {
      dispatch(addContact(updatedContacts));
    }
  };

  renderField = ({
    input,
    className,
    label,
    type,
    meta: { touched, error, warning },
  }) => (
    <div className="form-group">
      <label>{label}</label>
      <div>
        <input {...input} className={className} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

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
              component={this.renderField}
              label="Name"
              type="text"
            />
          </div>
          <div>
            <Field
              className="form-control"
              name="email"
              component={this.renderField}
              label="Email"
              type="email"
              // defaultValue={this.state.contact.email}
            />
          </div>
          <div>
            <Field
              className="form-control"
              name="mobileNumber"
              component={this.renderField}
              label="Mobile Number"
              type="number"
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

// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default withRouter(
  connect(mapStateToProps)(
    reduxForm({
      form: "updateContactForm",
      enableReinitialize: true,
    })(UpdateContactForm)
  )
);
