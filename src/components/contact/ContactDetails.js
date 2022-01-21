import React, { Component } from "react";
import { connect, useDispatch } from "react-redux";
import { addContact } from "../../redux/action/contactActions";

class ContactDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { formValue } = this.props;
    const { name, email, mobileNumber } = formValue;
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
    formValue: state.form.contactForm.values,
  };
};
// const mapDispatchToProps = (state) => {
//   return {
//     formValue: state.form.contactForm.values,
//   };
// };

export default connect(mapStateToProps)(ContactDetails);
