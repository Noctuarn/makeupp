import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GOODS } from "../../DATA";

import { getStars } from "../../utils/getStars";

import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const [choosenElement, setChoosenElement] = useState(null);

  useEffect(() => {
    window.scrollTo({top: 120})
  }, [])

  useEffect(() => {
    const element = GOODS.find((item) => item.id === parseInt(id));
    setChoosenElement(element);
  }, [id]);

  return (
    <>
      {choosenElement ? (
        <div className="detail-wrapper">
          <div className="detail-column detail-column-info">
            <h3 className="detail-name">{choosenElement.name}</h3>
            <h4 className="detail-description">{choosenElement.description}</h4>
            <div className="detail-stars">
              {getStars(choosenElement.rating)}
            </div>
            <p className="detail-responce">{choosenElement.responces} відгук</p>
          </div>

          <div className="detail-column detail-column-image">
            <img src={choosenElement.imgSrc} alt="" />
          </div>

          <div className="detail-column detail-column-action">
            <h6 className="detail-price">{choosenElement.price} ₴</h6>
            <select className="detail-select" name="volume" id="volume">
              <option selected>50 ml</option>
              <option>100 ml</option>
              <option>200 ml</option>
              <option>300 ml</option>
              <option>500 ml</option>
            </select>
            <button className="btn detail-btn">Купити</button>
            <div className="detail-availability">
              <h6>Є в наявності!</h6>
              <h6>
                Код товару <span>{id}</span>
              </h6>
            </div>
          </div>
        </div>
      ) : (
        <h1>Element not found</h1>
      )}
    </>
  );
};

export default Detail;
