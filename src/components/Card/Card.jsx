import React from "react";
import { getStars } from "../../utils/getStars";

import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({
  id,
  imgSrc,
  name,
  description,
  rating,
  responces,
  price,
  type,
}) => {
  

  return (
    <div className="card">
      <Link to={`/detail/${id}`} className="card-image">
        <img src={imgSrc} alt="" />
      </Link>
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
