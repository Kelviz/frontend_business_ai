import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../../actions/Auth";

const Activate = ({ verify }) => {
  const [verrified, setVerrified] = useState(false);
  const { uid, token } = useParams();

  const verify_account = (e) => {
    verify(uid, token);
    setVerrified(true);
  };

  if (verrified) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="registration-form main-pd ">
      <p>Click the button below to verify your account</p>
      <button onClick={verify_account} type="button">
        verify
      </button>
    </div>
  );
};

export default connect(null, { verify })(Activate);
