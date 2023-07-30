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
      <AwesomeSlider  animation="cubeAnimation" className="slider">
        <div data-src = {"https://hips.hearstapps.com/hmg-prod/images/pr-image-2-1655488803.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"}></div>
        <div data-src={"https://www.wikihow.com/images/thumb/e/ef/Apply-Eye-Makeup-Step-21.jpg/aid18705-v4-1200px-Apply-Eye-Makeup-Step-21.jpg"}></div>
        <div data-src={"https://blogscdn.thehut.net/wp-content/uploads/sites/439/2018/04/09222025/LF-US-April-2018-Image-4-1200px-x-672px_1200x672_acf_cropped.jpg"}></div>
        <div data-src={"https://as2.ftcdn.net/v2/jpg/01/04/90/11/1000_F_104901122_HltBK3WIGv11f1g7zXps0Q155YE7JaCR.jpg"}></div>  
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
