import React from "react";
import { Carousel } from "flowbite-react";
import RecommendedCard from "./RecommendedCard";
import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";

const RecommendedCarousel = () => {
  const recommendedData = [
    {
      location: "Jemo, Addis Ababa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi",
      imageSrc: Image1,
      alt: "Card Image",
    },
    {
      location: "Jemo, Addis Ababa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi",
      imageSrc: Image2,
      alt: "Card Image",
    },
    ,
    {
      location: "Jemo, Addis Ababa",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi",
      imageSrc: Image2,
      alt: "Card Image",
    },
  ];

  return (
    <Carousel className="w-full h-screen" slideInterval={5000}>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={Image1} />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={Image2} />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={Image1} />
      </div>
    </Carousel>
  );
};

export default RecommendedCarousel;
