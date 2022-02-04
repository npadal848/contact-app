import React from "react";
import { Link } from "react-router-dom";

const renderContact = (props) => {
  const { id, name, email, mobileNumber } = props.contact;

  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{email} </td>
      <td>{mobileNumber} </td>
      <td>
        <div className="row">
          <Link
            to={`/contact/edit/${id}`}
            className="btn btn-primary btn-sm active"
            role="button"
            aria-pressed="true"
          >
            Edit
          </Link>
          <button
            onClick={() => props.onDeleteContactHandler(id)}
            className="btn btn-danger btn-sm active"
            role="button"
            aria-pressed="true"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default renderContact;
