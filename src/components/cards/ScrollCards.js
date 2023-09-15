import React, { useRef, useState, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LineWave } from "react-loader-spinner";

import axios from "axios";

import IdeaCard from "./IdeaCard";
import "./cards.css";

const ScrollCards = () => {
  const [cards, setCards] = useState([]);
  const URL = process.env.REACT_APP_API_URL;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCards = async () => {
      const response = await axios.get(`${URL}/api/cards/`);
      setCards(response.data);
      setIsLoading(false);
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
    <div className="scroll-container">
      <h1>AI Generated Business Idea Samples</h1>
      {isLoading ? (
        <div>
          <LineWave color="#fff" height={200} width={200} />
        </div>
      ) : (
        <div className="scroll-main">
          <button className="button-left" onClick={handleLeftArrowClick}>
            <HiChevronLeft />
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
            <HiChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ScrollCards;
