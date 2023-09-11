import React, { useEffect } from "react";
import { checkAuthenticated, load_user } from "../../actions/Auth";
import { connect } from "react-redux";

import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ checkAuthenticated, load_user, children }) => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, []);

  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);
