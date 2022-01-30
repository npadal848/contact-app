import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { removeContact } from "../../redux/action/contactActions";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteContactHandler = (id) => {
    const { allContact: contacts, dispatch } = this.props;
    console.log("id: ", id);
    const latestContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(removeContact(latestContacts));
  };

  render() {
    const contactInfo = this.props.allContact;
    const renderData = contactInfo.map((contact, key) => {
      const { id, name, email, mobileNumber } = contact;
      return (
        <div className="row" key={key}>
          <div className="col-sm">{name}</div>
          <div className="col-sm">{email} </div>
          <div className="col-sm">{mobileNumber} </div>
          <div className="col-sm">
            <Link
              to={`/contact/edit/${id}`}
              className="btn btn-primary btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Edit
            </Link>
            <button
              onClick={() => this.onDeleteContactHandler(id)}
              className="btn btn-danger btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-sm">Name</div>
            <div className="col-sm">Email</div>
            <div className="col-sm">Phone</div>
            <div className="col-sm">Action</div>
          </div>
        </div>
        {renderData}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allContact: state.allContact.contacts,
  };
};

export default withRouter(connect(mapStateToProps)(ContactDetails));
