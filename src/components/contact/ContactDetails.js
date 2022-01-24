import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { getFormValues, reduxForm } from "redux-form";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const contactInfo = this.props.allContact;
    const renderData = contactInfo.map((contact, key) => {
      const { name, email, mobileNumber } = contact;
      return (
        <div key={key}>
          {name} <br />
          {email} <br />
          {mobileNumber} <br />
        </div>
      );
    });

    return (
      <div>
        <h2>Contact Details</h2>
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
// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default connect(mapStateToProps)(ContactDetails);
