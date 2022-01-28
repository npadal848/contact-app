import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addContact, getContact } from "../../redux/action/contactActions";
import { withRouter } from "react-router-dom";

class UpdateContactForm extends React.Component {
  constructor(props) {
    super(props);

    const id = props.match.params.id;
    const { allContact, dispatch, editableContact } = props;

    if (editableContact) {
      const updatedContact = allContact.filter((contact) => contact.id == id);
      dispatch(getContact(updatedContact[0]));
    }
  }

  updateFormHandler = (values) => {
    const { allContacts, editableContact } = this.props;
    const updatedContacts = allContacts.filter((contact) => {
      if (contact.id === editableContact.id) {
        contact.name = values.name;
        contact.email = values.email;
        contact.mobileNumber = values.mobileNumber;
      }
    });
    const { dispatch } = this.props;
    dispatch(addContact(updatedContacts));
  };

  render() {
    const { handleSubmit, editableContact } = this.props;
    console.log("PROPS: ", this.props);
    const { name, email, mobileNumber } = editableContact;
    console.log(name);

    return (
      <div className="container">
        <form onSubmit={handleSubmit(this.updateFormHandler)}>
          <div className="form-group">
            <label>Name</label>
            <Field
              className="form-control"
              name="name"
              id="contactName"
              component="input"
              type="text"
              value="Nagesh"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Field
              className="form-control"
              name="email"
              component="input"
              type="email"
              value={email}
              placeholder={this.props.placeholderValue.name}
            />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <Field
              className="form-control"
              name="mobileNumber"
              component="input"
              type="number"
              value={mobileNumber}
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
    allContact: state.allContact.contacts,
    editableContact: state.allContact.editableContact,
    placeholderValue: state,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default withRouter(
  reduxForm({
    form: "updateContactForm",
    destroyOnUnmount: false,
    enableReinitialize: true,
  })(connect(mapStateToProps)(UpdateContactForm))
);
