import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../../actions/Auth";

const Activate = ({ verify, match }) => {
  const [verrified, setVerrified] = useState(false);

  const verify_account = (e) => {
    const uid = match.params.uid;
    const token = match.params.token;

    verify(uid, token);
    setVerrified(true);
  };

  if (verrified) {
    return <Navigate to="/" />;
  }

  return (
    <div className="registration-form">
      <button onClick={verify_account} type="button">
        verify
      </button>
    </div>
  );
};

export default Activate;
