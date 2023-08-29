import React, { useState, useEffect } from "react";
import axios from "axios";

import "./about.css";

const About = () => {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchAbout = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/about/");
      setAbout(response.data);
      console.log(response.data);
    };

    fetchAbout();
  }, []);

  return (
    <div className="about">
      <h1>How It Works</h1>
      <div className="about-works">
        {about.map((item) => (
          <div className="about-work__item" key={item.id}>
            <div className="about-work__item-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="about-work__item-txt">
              <h2 className="txt-blue">{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
