import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { addContact } from "../../redux/action/contactActions";
import store from "../../redux/store";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: {
        name: "",
        email: "",
        mobileNumber: "",
      },
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("PROPS: ", props);
    console.log("STATE: ", state);
    const data = store.getState();
    // this.setState({ contacts: data.allContact.contacts });
    // console.log("componentDidMount: ", this.state.contacts);
    return { contacts: data.allContact.contacts };
  }

  render() {
    const { name, email, mobileNumber } = this.state.contacts;
    return (
      <div>
        <h2>Contact Details</h2>
        {name} <br />
        {email} <br />
        {mobileNumber} <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allContacts: state.allContact.connects,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactDetails);
// export default ContactDetails;
