import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { addContact, getContact } from "../../redux/action/contactActions";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editableContact: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id: ", id);
    // const id = 1;
    const { allContact, dispatch } = this.props;

    const updatedContact = allContact.filter((contact) => contact.id == id);
    this.setState({ editableContact: updatedContact });
    dispatch(getContact(updatedContact));
    if (id && allContact) {
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
    // console.log("editableContact: ", editableContact);
    const { name, email, mobileNumber } = this.state.editableContact;

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
              value={name}
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default reduxForm({ form: "updateContactForm" })(
  connect(mapStateToProps)(ContactForm)
);
