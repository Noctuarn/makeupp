import React from "react";
import useAppContext from "../../hooks/useAppContext.jsx";

const Basket = () => {
  const { basketState } = useAppContext();

  return (
    <div className="basket">
      <h1 className="basket-title">Мій кошик</h1>

      {basketState ? (
        <div className="items">
          {basketState.map((el) => {
            return <h1 key={"b-item" + el.id}>{el.name}</h1>;
          })}
        </div>
      ) : (
        <h1>Your basket is empty</h1>
      )}
    </div>
  );
};

export default Basket;
