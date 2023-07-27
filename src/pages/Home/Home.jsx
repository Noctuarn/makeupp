import React from "react";

import Slider from "../../components/Slider/Slider";
import HorizontalRow from "../../components/HorizontalRow/HorizontalRow";

import "./Home.scss";

const catalogList = [
  {title: "Пропозиція брендів", type: "brand"},
  {title: "Новинки", type: "new"},
  {title: "Парфумерія", type: "perfume"},
  {title: "Макіяж", type: "makeup"},
  {title: "Чоловічі", type: "men"},
  {title: "Волося", type: "hair"},
  {title: "Обличчя", type: "face"},
  {title: "Тіло та ванна", type: "bath and body"},
  {title: "Здоров'я та догляд", type: "health and care"},
] 


const Home = () => {
  return (
    <main className="home">
      <Slider />
      <div className="home-catalog">
        {catalogList.map((catalog, index) => {
          return <HorizontalRow key={index + "" + catalog.title} title={catalog.title} catalogType={catalog.type}/>
        })}
      </div>
    </main>
  );
};

export default Home;
