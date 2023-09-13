import React, { useState } from "react";
import { logout } from "../../actions/Auth";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import "./navbar.css";

const Navbar = ({ logout, isAuthenticated }) => {
  const [redirect, setRedirect] = useState(false);

  const logout_user = () => {
    logout();
    return <Navigate to="home" />;
  };

  const guestLinks = () => {
    return (
      <ul className="navbar-menu__signup">
        <li className="navbar-menu__item login">
          <Link to="/login">Log In</Link>
        </li>
        <li className="navbar-menu__item signup">
          <Link to="/signup">Get started</Link>
        </li>
      </ul>
    );
  };

  const authLinks = () => {
    return (
      <ul className="navbar-menu__signup">
        <li className="navbar-menu__item login">
          <Link to="/idea-list">History</Link>
        </li>
        <li className="navbar-menu__item logout">
          <Link to="/" onClick={logout_user}>
            Logout
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <>
      <nav>
        <div className="navbar-logo">
          <h1>
            <Link to="/" className="navbar-logo__link">
              BizBurst <span className="txt-blue">AI</span>
            </Link>
          </h1>
        </div>

        <div className="navbar-menu">
          {isAuthenticated ? authLinks() : guestLinks()}
        </div>
      </nav>
      {redirect ? <Navigate to="/" /> : <div></div>}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
