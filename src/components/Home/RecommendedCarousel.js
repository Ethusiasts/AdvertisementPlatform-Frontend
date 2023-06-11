import React from "react";
import RecommendedCard from "./RecommendedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";
import Image3 from "../../styles/assets/billboard3.jpg";
import Image4 from "../../styles/assets/billboard2.jpg";
import Image5 from "../../styles/assets/billboard2.jpg";
import Card from "./RecommendedCard";
import {
  Carousel,
  InfiniteLoopSlider,
  animationDuration,
  random,
} from "../../utils";

export default function RecommendedCarousel() {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="relative flex items-center">
      <FontAwesomeIcon
        icon={faChevronLeft}
        className="text-l px-4 cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideLeft}
      ></FontAwesomeIcon>
      <div
        id="slider"
        className="w-ful h-ful overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
      >
        <InfiniteLoopSlider
          duration={(animationDuration - 50000, animationDuration + 50000)}
        >
          {Carousel.map((item, index) => (
            <Card
              key={index}
              status={item.status}
              rate={item.rate}
              price={item.price}
              production={item}
              width={item.width}
              height={item.height}
              location={item.location}
              imageSrc={Image1}
              alt={item.alt}
            />
          ))}
        </InfiniteLoopSlider>
      </div>
      <FontAwesomeIcon
        icon={faChevronRight}
        className="text-l px-4 cursor-pointer opacity-50 hover:opacity-100"
        onClick={slideRight}
      ></FontAwesomeIcon>
    </div>
  );
}
