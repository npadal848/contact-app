import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
  text-decoration: none;
`;

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="link_AppName" to="/">
        <h3>Contact App</h3>
      </Link>

      <form className="form-inline my-2 my-lg-0">
        <Link
          to="/contact/add"
          type="button"
          className="btn btn-primary btn-sm active"
        >
          Add Contact
        </Link>
      </form>
    </nav>
  );
};

export default Header;
