import React from "react";
import { BsStarFill } from "react-icons/bs";

import "./Card.scss";

const Card = ({
  imgSrc,
  name,
  description,
  rating,
  responces,
  price,
  type,
}) => {
  const getStars = (starsCount) => {
    const stars = [];
    let blackStarKey = 0;
    
    for (let index = 0; index < starsCount; index++) {
      stars.push(
        <BsStarFill color="#fff" className="star" key = {"star" + index} />
      );
    }

    for (let index = 0; index < 5 - starsCount; index++) {
      stars.push(
        <BsStarFill className="star star-opacity" key={"op-star" + index}  />
      );
    }

    return stars;
  };

  return (
    <div className="card">
      <div className="card-image">
        <img src={imgSrc} alt="" />
      </div>
      <div className="card-content">
        <h4 className="card-name">{name}</h4>
        <h5 className="card-description">{description}</h5>
        <div className="card-ratings-wrapper">
          <div className="card-ratings-stars">{getStars(rating)}</div>
          <h5 className="card-rating-responce">{responces}</h5>
        </div>
        <h4 className="card-price">{price}₴</h4>
        <button className="btn card-button">Купити</button>
      </div>
    </div>
  );
};

export default Card;
