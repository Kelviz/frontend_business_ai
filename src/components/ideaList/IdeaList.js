import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ideaList.css";

const IdeaList = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      const response = await axios.get(`${URL}/api/ideas/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem("access")}`,
        },
      });

      setIdeas(response.data);
    };

    fetchIdeas();
  }, []);

  return (
    <div className="idea-container">
      <div className="idea-list">
        <h2>History</h2>
        {ideas.map((idea) => (
          <div className="idea-item" key={idea.id}>
            <Link to={`/idea-detail/${idea.id}`} className="idea-iteam-link">
              <p>{idea.title}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="idea-entry">
        <div className="idea-entry__item">
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
          <div className="idea-entry__button">
            <button>
              <Link to="/form" className="idea-entry__link">
                {" "}
                Get new ideas
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaList;
