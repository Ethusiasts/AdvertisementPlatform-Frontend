import React from "react";
import RecommendedCard from "./RecommendedCard";

import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";

import Image3 from "../../styles/assets/billboard3.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RecommendedCarousel() {
  const CustomPrevArrow = (props) => (
    <div
      className="slick-arrow slick-prev"
      onClick={props.onClick}
      style={{ left: "-20px", zIndex: 1 }}
    >
      Previous
    </div>
  );

  const CustomNextArrow = (props) => (
    <div
      className="slick-arrow slick-next"
      onClick={props.onClick}
      style={{ right: "-20px", zIndex: 1 }}
    >
      Next
    </div>
  );
  var settings = {
    // dots: true,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    // initialSlide: 0,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <RecommendedCard
            location="Jemo, Addis Ababa"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi"
            imageSrc={Image1}
            alt="Card Image"
          />
        </div>
        <div>
          <RecommendedCard
            location="Some Location"
            description="Another description"
            imageSrc={Image2}
            alt="Card Image"
          />
        </div>
        <div>
          <RecommendedCard
            location="Another Location"
            description="Yet another description"
            imageSrc={Image3}
            alt="Card Image"
          />
        </div>
        <div>
          <RecommendedCard
            location="Jemo, Addis Ababa"
            description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi"
            imageSrc={Image1}
            alt="Card Image"
          />
        </div>
      </Slider>
    </div>
  );
}
