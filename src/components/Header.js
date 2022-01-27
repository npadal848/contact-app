import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Contact App</h2>
      </div>
      <Link
        to="/contact/add"
        type="button"
        className="btn btn-primary btn-lg active"
      >
        Add Contact
      </Link>
    </div>
  );
};

export default Header;
