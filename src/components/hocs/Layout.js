import React, { useEffect } from "react";
import { checkAuthenticated, load_user } from "../../actions/Auth";
import { connect } from "react-redux";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return <div className="main">{children}</div>;
};

export default Layout;
