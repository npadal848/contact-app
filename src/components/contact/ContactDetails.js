import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

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
            <Link
              to={`/contact/delete/${id}`}
              className="btn btn-danger btn-lg active"
              role="button"
              aria-pressed="true"
            >
              Delete
            </Link>
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
// const mapDispatchToProps = (dispatch) => {
//   return { dispatch };
// };

export default connect(mapStateToProps)(ContactDetails);
