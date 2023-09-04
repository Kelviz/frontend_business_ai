import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import rightarrow from "../../images/left-arrow.png";

const IdeaDetail = () => {
  const [idea, setIdea] = useState("");
  const { ideaId } = useParams();

  const fetchIdea = async () => {
    const response = await axios.get(
      `http://127.0.0.1:8000/api/ideas/${ideaId}/`
    );
    setIdea(response.data);
  };

  useEffect(() => {
    fetchIdea();
  }, [ideaId]);

  return (
    <div className="idea-detail">
      <div className="idea-detail__card">
        <Link to="/idea-list">
          <img src={rightarrow} alt="arrow-right" />
        </Link>
        <span className="idea-detail__head-text">{idea.industry}</span>
        <span className="idea-detail__head-text">{idea.audience}</span>
        <p>{idea.idea}</p>;
      </div>
    </div>
  );
};

export default IdeaDetail;
