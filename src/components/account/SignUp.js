import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../../actions/Auth";

const SignUp = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [accountCreated, setAccountCreated] = useState(false);

  const { first_name, last_name, email, password, re_password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="registration-form">
      <h2>Sign Up</h2>
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
        
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
