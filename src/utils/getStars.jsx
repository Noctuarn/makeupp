import { BsStarFill } from "react-icons/bs";

export const getStars = (starsCount) => {
  const stars = [];

  for (let index = 0; index < starsCount; index++) {
    stars.push(
      <BsStarFill color="#fff" className="star" key={"star" + index} />
    );
  }

  for (let index = 0; index < 5 - starsCount; index++) {
    stars.push(
      <BsStarFill className="star star-opacity" key={"op-star" + index} />
    );
  }

  return stars;
};
