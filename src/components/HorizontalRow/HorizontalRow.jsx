import React from "react";
import Card from "../Card/Card";
import { GOODS } from "../../DATA";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";

import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

import "react-horizontal-scrolling-menu/dist/styles.css";
import "./HorizontalRow.scss";

const HorizontalRow = ({ title, catalogType }) => {
  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } =
      React.useContext(VisibilityContext);

    return (
      <BsArrowLeft
        className="catalog-arrow"
        disabled={isFirstItemVisible}
        onClick={() => scrollPrev()}
      >
        Left
      </BsArrowLeft>
    );
  }

  function RightArrow() {
    const { isLastItemVisible, scrollNext } =
      React.useContext(VisibilityContext);

    return (
      <BsArrowRight
        className="catalog-arrow"
        disabled={isLastItemVisible}
        onClick={() => scrollNext()}
      >
        Right
      </BsArrowRight>
    );
  }

  const getCorrectTypesData = () => {
    let result = GOODS.filter((item) => {
      const { type } = item;

      return type.includes(catalogType);
    });

    return result;
  };

  let correctTypesData = getCorrectTypesData();

  return (
    <div className="catalog-row">
      <h1 className="catalog-title">{title}</h1>

      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        scrollContainerClassName="catalog-srollbar"
      >
        {correctTypesData.map((item) => (
          <Card
            key={item.name + " " + item.id}
            id={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            rating={item.rating}
            responces={item.responces}
          />
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalRow;
