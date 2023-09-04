import React from "react";
import { Link } from "react-router-dom";

import ai_light from "../../images/ai_light.png";
import Loader from "../loader/Loader";

const IdeaCard = ({ businessIdea }) => {
  const formatIdea = businessIdea ? businessIdea.ideas.split("\n\n") : [];
  return (
    <div className="ideacard">
      <div className="ideacard-img">
        <img src={ai_light} alt="ai light" />
      </div>

      {businessIdea ? (
        formatIdea.map((idea, index) => (
          <div className="ideacard-txt">
            {" "}
            <p key={index}>{idea}</p>
          </div>
        ))
      ) : (
        <div className="ideacard-loader">
          <Loader />
          <p>
            I'm excited to come up with a business ideas for you! Just a moment.
          </p>
        </div>
      )}

      {businessIdea && (
        <div className="ideacard-links">
          <Link className="ideacard-link" to="/form">
            Back
          </Link>
          <Link className="ideacard-link" to="/idea-list">
            Show List
          </Link>
        </div>
      )}
    </div>
  );
};

export default IdeaCard;
