import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
      <h1>Unlock Your Entrepreneurial Journey</h1>
      <div className="about-works">
        {about.map((item) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="about-work__item"
            key={item.id}
          >
            <div className="about-work__item-img">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="about-work__item-txt">
              <h2 className="txt-blue">{item.title}</h2>
              <p>{item.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
