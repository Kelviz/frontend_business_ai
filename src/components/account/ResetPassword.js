import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";

import { reset_password } from "../../actions/Auth";

const ResetPassword = ({ reset_password }) => {
  const [requestSent, setRequestSent] = useState(false);

  const [formData, setFormData] = useState({ email: "" });

  const { email } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    reset_password(email);
    setRequestSent(true);
  };

  return (
    <div className="registration-form">
      <h3>Request Password Reset:</h3>
      {requestSent ? (
        <div className="msg-noti">
          <p>
            Password reset request sent. Check your email for further
            instructions.
          </p>
        </div>
      ) : (
        <form className="login-form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-input-item">
            <input
              name="email"
              type="emial"
              value={email}
              placeholder="Enter email"
              required
              onChange={(e) => onChange(e)}
            />
          </div>

          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
