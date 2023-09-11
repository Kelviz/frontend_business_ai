import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login, resetSigninError } from "../../actions/Auth";
import "./account.css";

const Login = ({ login, isAuthenticated, signinError, resetSigninError }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const { email, password } = formData;

  useEffect(() => {
    if (signinError) {
      setLoading(false); // Set loading to false when there's a signinError
    }
  }, [signinError]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    resetSigninError();

    login(email, password);
    setLoading(true);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registration-form">
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-input-item">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-input-item">
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit">
          {loading ? <span>Signing in...</span> : <span>Sign in</span>}
        </button>

        <div className="form-link">
          <Link className="form-link-txt" to="/reset-password">
            Forgot Password?
          </Link>

          <Link className="form-link-txt" to="/signup">
            Create an account
          </Link>
        </div>
        {signinError && (
          <div className="error-message">
            <p>{signinError}</p>
          </div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  signinError: state.auth.signinError,
});

export default connect(mapStateToProps, { login, resetSigninError })(Login);
