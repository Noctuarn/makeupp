import React from "react";

import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";

import "./Home.scss";
import { GOODS } from "../../DATA";

const Home = () => {
  return (
    <main className="home">
      <Slider />
      <div className="catalog">
        {GOODS.map((item) => (
          <Card key={item.id}
            imgSrc={item.imgSrc}
            name={item.name}
            description={item.description}
            price={item.price}
            type={item.type}
            rating={item.rating}
            responces={item.responces}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
