import React from "react";
import { Carousel } from "flowbite-react";
import RecommendedCard from "./RecommendedCard";
import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";
const RecommendedCarousel = () => {
  return (
    <Carousel slideInterval={5000} className="h-screen">
      {[Image1, Image2].map((img) => {
        console.log(img);
        return <img alt="" src={img} />;
      })}
    </Carousel>
  );
};

export default RecommendedCarousel;
