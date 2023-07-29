import React from "react";
import { getStars } from "../../utils/getStars";
import { Link } from "react-router-dom";

import useAppContext from "../../hooks/useAppContext.jsx"

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
  
  const {addItemsToBasket} = useAppContext()

  return (
    <div className="card">
      <Link to={`/detail/${id}`} className="card-image">
        <img src={imgSrc} alt="" />
      </Link>
      <div className="card-content">
        <h4 className="card-name">{name}</h4>
        <h5 className="card-description">{description}</h5>
        <div className="card-ratings-wrapper">
          {getStars(rating)}
          <h5 className="card-rating-responce">{responces}</h5>
        </div>
        <h4 className="card-price">{price} ₴</h4>
        <button onClick={() => addItemsToBasket(id)} className="btn card-button">Купити</button>
      </div>
    </div>
  );
};

export default Card;
