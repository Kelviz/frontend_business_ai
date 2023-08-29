import React from "react";

const IdeaCard = ({ businessIdea }) => {
  return (
    <div>
      {businessIdea ? <p>{businessIdea.ideas}</p> : <div>loading...</div>}
    </div>
  );
};

export default IdeaCard;
