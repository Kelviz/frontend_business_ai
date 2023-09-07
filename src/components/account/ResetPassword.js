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

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <h2>Request Password Reset:</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          name="email"
          type="emial"
          value={email}
          placeholder="Enter email"
          required
          onChange={(e) => onChange(e)}
        />

        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password })(ResetPassword);
