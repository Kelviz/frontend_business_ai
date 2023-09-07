import React, { useState } from "react";
import { connect } from "react-redux";
import { Navigate, useParams } from "react-router-dom";

import { reset_password_confirm } from "../../actions/Auth";

const ResetPasswordConfirm = ({ reset_password_confirm }) => {
  const [requestSent, setRequestSent] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    reset_new_password: "",
  });

  const { uid, token } = useParams();

  const { password, reset_new_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    reset_password_confirm(uid, token, password, reset_new_password);
    setRequestSent(true);
  };

  if (requestSent) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registration-form">
      <h2>Reset Password Confirmation</h2>
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
        <input
          name="password"
          value={password}
          type="password"
          minLength="6"
          required
          placeholder="Enter new password"
          onChange={(e) => onChange(e)}
        />
        <input
          name="reset_new_password"
          value={reset_new_password}
          type="password"
          minLength="6"
          required
          placeholder="Confirm new password"
          onChange={(e) => onChange(e)}
        />

        <button>Reset Password</button>
      </form>
    </div>
  );
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);
