import React, { useContext, useState, useEffect } from "react";
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

  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <div onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </div>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <div onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </div>
    );
  };

  return (
    <div className="horizontal-scrolling-container">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {cards.map((item) => (
          <div
            className="horizontal-scrolling-card"
            key={item.id}
            itemID={item.id}
            title={item.title}
          >
            <IdeaCard item={item} />
          </div>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default ScrollCards;
