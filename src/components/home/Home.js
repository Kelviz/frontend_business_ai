import React, { useEffect } from "react";
import { checkAuthenticated, load_user } from "../../actions/Auth";
import { connect } from "react-redux";

import Header from "../header/Header";
import About from "../about/About";
import ScrollCards from "../cards/ScrollCards";

const Home = () => {
  useEffect(() => {
    checkAuthenticated();
    load_user();
  }, [checkAuthenticated, load_user]);
  return (
    <div>
      <Header />
      <div className="main-pd ">
        <About />
        <ScrollCards />
      </div>
    </div>
  );
};

export default connect(null, { checkAuthenticated, load_user })(Home);
