import React from "react";
import useAppContext from "../../hooks/useAppContext.jsx";

import { Link } from "react-router-dom";

import { getStars } from "../../utils/getStars.jsx";

import "./Basket.scss";

const Basket = () => {
  const { basketState, removeFromBasket, confirmOrder } = useAppContext();

  return (
    <div className="basket">
      <h1 className="basket-title">Мій кошик</h1>

      {basketState.length > 0 ? (
        <div className="basket-items">
          {basketState.map((item) => {
            return (
              <div className="basket-item" key={"basket-item" + item.id}>
                <Link to={`/detail/${item.id}`}>
                  <img className="basket-item-img" src={item.imgSrc} alt="" />
                </Link>

                <div className="basket-item-content">
                  <h4 className="basket-item-name">{item.name}</h4>
                  <h4 className="basket-item-description">
                    {item.description}
                  </h4>
                  <div className="basket-item-stars">
                    {getStars(item.rating)}
                  </div>
                  <h5 className="basket-item-responces">
                    {item.responces} відгуків
                  </h5>
                  <h5 className="basket-item-price">{item.price} ₴</h5>

                  <button
                    onClick={() => removeFromBasket(item.id)}
                    className="btn"
                  >
                    Вилучити
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="empty-basket">
          <img className="empty-basket-img" src="https://feeloxy.com/wp-content/themes/mrtailor/images/empty_cart_retina.png" alt="" />
          <h1 className="empty-basket-title">У вашому кошику немає товарів...</h1>
        </div>
      )}

      {basketState.length > 0 ? (
        <button onClick={confirmOrder} className="btn btn-confirm">
          Оформити замовлення
        </button>
      ) : null}
    </div>
  );
};

export default Basket;
