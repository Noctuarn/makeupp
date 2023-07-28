import React from "react";

import Slider from "../../components/Slider/Slider";
import HorizontalRow from "../../components/HorizontalRow/HorizontalRow";

import "./Home.scss";

const catalogList = [
  { title: "Пропозиція брендів", type: "brand" },
  { title: "Новинки", type: "new" },
  { title: "Парфумерія", type: "perfume" },
  { title: "Макіяж", type: "makeup" },
  { title: "Чоловічі", type: "men" },
  { title: "Волося", type: "hair" },
  { title: "Обличчя", type: "face" },
  { title: "Тіло та ванна", type: "bath_and_body" },
  { title: "Здоров'я та догляд", type: "health_and_care" },
];

const Home = () => {
  return (
    <main className="home">
      <Slider />
      <div className="home-catalog">
        {catalogList.map((catalog, index) => {
          return (
            <div key={index + "" + catalog.title} id={catalog.type}>
              <HorizontalRow
                title={catalog.title}
                catalogType={catalog.type}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
