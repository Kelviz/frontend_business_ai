import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import rightarrow from "../../images/left-arrow.png";

const IdeaDetail = () => {
  const URL = process.env.REACT_APP_API_URL;
  const [idea, setIdea] = useState("");
  const { ideaId } = useParams();

  const fetchIdea = async () => {
    const response = await axios.get(`${URL}/api/ideas/${ideaId}/`, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("access")}`,
      },
    });
    setIdea(response.data);
  };

  useEffect(() => {
    fetchIdea();
  }, [ideaId]);
  
const txt = idea && idea.idea ? idea.idea.split(/\d+\.\s/).filter(Boolean) : [];


  return (
    <div className="idea-detail">
      <div className="idea-detail__card">
        <Link to="/idea-list" className="back-link">
          <img src={rightarrow} alt="arrow-right" />
        </Link>
        <span className="idea-detail__head-text">{idea.industry}</span>
        <span className="idea-detail__head-text">{idea.audience}</span>
          {txt.map((word, index) => (
            <p key={index} className="s-txt">
           {`${index + 1}. ${word}`}{" "}
            </p>
          ))}
        
      

      </div>
    </div>
  );
};

export default IdeaDetail;
