import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import "./Slider.scss";

const storiesData = [
  {
    name: "Спеціальна програма",
    imgSrc: "https://u.makeup.com.ua/g/gn/gnsayetwgehq.jpg",
  },

  { name: "YSL", imgSrc: "https://u.makeup.com.ua/n/nn/nnbznqy0ypfs.jpg" },

  { name: "Relance", imgSrc: "https://u.makeup.com.ua/a/at/atmb51f2m3ne.jpg" },

  {
    name: "Maybelline New York",
    imgSrc: "https://u.makeup.com.ua/b/bb/bbpk2s5ohaxt.png",
  },

  { name: "MAREVE", imgSrc: "https://u.makeup.com.ua/b/bt/btqceacpv7am.jpg" },

  {
    name: "L'oreal Paris",
    imgSrc: "https://u.makeup.com.ua/x/x9/x96ag1ugc1lr.jpg",
  },
];

const Slider = () => {
  return (
    <div className="slider-wraper">
      <AwesomeSlider animation="cubeAnimation" className="slider">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </AwesomeSlider>

      <div className="stories">
        {storiesData.map((item, index) => {
          return (
            <div key={index} className="stories-item">
              <div className="stories-img">
                <img src={item.imgSrc} alt="" />
              </div>

              <p className="stories-name">{item.name.length > 10 ? item.name.slice(0, 10) + "..." : item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
