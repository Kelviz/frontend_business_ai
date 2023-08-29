import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar-logo">
          <h1>
            BizBurst <span className="txt-blue">AI</span>
          </h1>
        </div>

        <div className="navbar-menu">
          <ul className="navbar-menu__signup">
            <li className="navbar-menu__item login">
              <a href="#">Log In</a>
            </li>
            <li className="navbar-menu__item signup">
              <a href="#">Get started free</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
