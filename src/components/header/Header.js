import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const textSeries = [
    "AI-Driven Innovation for Business",
    "Empowering Entrepreneurs",
    "Transforming Ideas into Reality",
    "Bursting with Business Brilliance",
  ];
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);

  const typeWriterEffect = () => {
    const text = textSeries[textIndex];
    if (currentText !== text) {
      setCurrentText(text.substring(0, currentText.length + 1));
    } else {
      setTextIndex((prevIndex) => (prevIndex + 1) % textSeries.length);
      setCurrentText("");
    }
  };

  useEffect(() => {
    const timer = setInterval(typeWriterEffect, 200);
    return () => clearInterval(timer);
  }, [currentText, textIndex]);

  return (
    <div className="header">
      <div className="motion-txt">
        <div className="moving-text">
          <h1>{currentText}</h1>
        </div>
        <h2 className="txt-blue">#BusinessIdeas</h2>
        <p>
          Unlock the Power of Innovation: Enter your industry, define your
          target audience, and set your budget to embark on a journey <br /> of
          transformative business ideas.
        </p>
        <div className="header-plane__animation">
          <div className="view">
            <div className="plane main">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <div className="header-button">
          <Link to="form" className="header-button__link">
            Get started free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
