import React, { useRef, useState, useEffect } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

import axios from "axios";

import IdeaCard from "./IdeaCard";
import "./cards.css";
import RightArrowIcon from "../../images/right-arrow.png";
import LeftArrowIcon from "../../images/left-arrow.png";

const ScrollCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get("http://127.0.0.1:8000/api/cards/");
      setCards(response.data);
    };

    fetchCards();
  }, []);

  const containerRef = useRef(null);

  const handleLeftArrowClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust the scroll amount as needed
    }
  };

  const handleRightArrowClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust the scroll amount as needed
    }
  };

  return (
    <div className="scroll-main">
      <h1>Unlock Your Entrepreneurial Journey</h1>
      <button className="button-left" onClick={handleLeftArrowClick}>
        <img src={LeftArrowIcon} alt="left-arrow" />
      </button>
      <div className="horizontal-scrolling-container" ref={containerRef}>
        {cards.map((item) => (
          <div
            className="horizontal-scrolling-card"
            key={item.id}
            itemId={item.id}
            title={item.id}
          >
            <IdeaCard item={item} />
          </div>
        ))}
      </div>
      <button className="button-right" onClick={handleRightArrowClick}>
        <img src={RightArrowIcon} alt="left-arrow" />
      </button>
    </div>
  );
};

export default ScrollCards;
