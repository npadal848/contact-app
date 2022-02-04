import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { removeContact } from "../../redux/action/contactActions";
import RenderContact from "./RenderContact";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  onDeleteContactHandler = (id) => {
    const { allContact: contacts, dispatch } = this.props;
    const latestContacts = contacts.filter((contact) => contact.id !== id);
    dispatch(removeContact(latestContacts));
  };

  render() {
    const contactInfo = this.props.allContact;
    const renderData = contactInfo.map((contact, key) => {
      return (
        <RenderContact
          contact={contact}
          key={key}
          onDeleteContactHandler={this.onDeleteContactHandler}
        />
      );
    });

    return (
      <div>
        <div className="container">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{renderData}</tbody>
          </table>
        </div>
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
