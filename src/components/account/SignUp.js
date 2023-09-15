import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";

import LoginLoading from "./LoginLoading";
import { signup, resetSignupError } from "../../actions/Auth";

const SignUp = ({ signup, isAuthenticated, signupError, resetSignupError }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [accountCreated, setAccountCreated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    return () => {
      resetSignupError();
    };
  }, [resetSignupError]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== re_password) {
      setPasswordError(true);
    } else {
      setLoading(true);
      setTimeout(async () => {
        const result = await signup(
          first_name,
          last_name,
          email,
          password,
          re_password
        );
        if (result.success) {
          setAccountCreated(true);
        } else {
          setLoading(false);
        }
      }, 2000);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registration-form main-pd">
      <h2>Sign Up</h2>
      {accountCreated ? (
        <div className="msg-noti">
          <p>
            Account created successfully. Please check your email to activate
            your account.
          </p>
        </div>
      ) : (
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-input-item">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={first_name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="form-input-item">
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={last_name}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="form-input-item">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="form-input-item">
            <input
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </div>

          <div className="form-input-item">
            <input
              type="password"
              name="re_password"
              placeholder="Confirm password"
              value={re_password}
              onChange={(e) => onChange(e)}
              required
            />
            {passwordError && (
              <div className="input-error">
                <p>Password did not match</p>
              </div>
            )}
          </div>

          <button type="submit">
            {" "}
            {loading ? (
              <span>
                <LoginLoading />
              </span>
            ) : (
              <span>Create Account</span>
            )}
          </button>

          {signupError && (
            <div className="error-message">
              <p>{signupError}</p>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  signupError: state.auth.signupError,
});

export default connect(mapStateToProps, { signup, resetSignupError })(SignUp);
