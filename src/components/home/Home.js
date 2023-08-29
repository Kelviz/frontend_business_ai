import React from "react";

import Header from "../header/Header";
import About from "../about/About";
import ScrollCards from "../cards/ScrollCards";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <ScrollCards />
    </div>
  );
};

export default Home;
