import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/Auth";
import "./account.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    login(email, password);
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
   
        <button type="submit">login</button>
        
   <div className="form-link">
        <Link className="form-link-txt" to="/reset-password">Forgot Password?</Link>
        
            <Link className="form-link-txt" to="/signup">Create an account</Link>
      </div>
        
        
        
      </form>
   
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
