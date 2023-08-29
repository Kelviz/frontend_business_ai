import React from "react";

const IdeaCard = ({ item }) => {
  return (
    <div className="card-item">
      <div className="card-icon">
        <img src={item.icon} alt={item.industry} />
      </div>

      <div className="card-txt">
        <h2>{item.industry}</h2>

        <p>{item.idea}</p>
      </div>
    </div>
  );
};

export default IdeaCard;
