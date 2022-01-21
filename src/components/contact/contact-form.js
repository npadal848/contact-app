import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import ContactDetails from "./ContactDetails";
import { connect } from "react-redux";
import { addContact } from "../../redux/action/contactActions";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFormSubmit: false,
      contacts: {},
    };
  }
  componentDidMount = () => {
    const { dispatch } = this.props;
    dispatch(addContact({ name: "nagesh" }));
  };
  submitFormHandler = (values) => {
    // dispatch(addContact(values));
    // console.log("submitFormHandler: ", values);
    this.state.isFormSubmit = true;
    const { dispatch } = this.props;

    dispatch(addContact({ name: "nagesh" }));
  };
  render() {
    const { handleSubmit } = this.props;
    // const dispatch = useDispatch();
    return (
      <div>
        <h2>Demo</h2>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { dispatch };
};

export default // reduxForm({ form: "contactForm" })
connect(mapDispatchToProps)(ContactForm);
