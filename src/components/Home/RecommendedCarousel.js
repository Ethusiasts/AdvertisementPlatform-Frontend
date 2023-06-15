import React, { useEffect } from "react";
import RecommendedCard from "./RecommendedCard";
import AgencyRecommendedCard from "./AgencyRecommendedCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";
import Image3 from "../../styles/assets/billboard3.jpg";
import Image4 from "../../styles/assets/billboard2.jpg";
import Image5 from "../../styles/assets/billboard2.jpg";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
  Carousel,
  InfiniteLoopSlider,
  animationDuration,
  random,
} from "../../utils";
import { getBillboardRecommendations } from "../../services/billboard_api";
import { getAgencyRecommendations } from "../../services/agency_api";

export default function RecommendedCarousel({ isBillboard }) {
  const [recommendationData, setRecommendationData] = useState(null);
  const { data, isLoading } = useQuery(
    ["recommendation_data", isBillboard],
    () => {
      if (isBillboard) {
        return getBillboardRecommendations().then((res) => {
          console.log(res.results);
          setRecommendationData(res.results);
          return res.data;
        });
      } else {
        return getAgencyRecommendations().then((res) => {
          console.log(res.results);
          setRecommendationData(res.results);
          return res.data;
        });
      }
    }
  );

  // useEffect(() => {
  //   setRecommendationData(data);
  // }, [data]);
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!recommendationData) {
    return <div>No data found</div>;
  }

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
          duration={(animationDuration - 5000, animationDuration + 5000)}
        >
          {isBillboard && (
            <>
              {recommendationData.map((item, index) => (
                <RecommendedCard
                  key={item.id}
                  status={item.status}
                  rate={item.average_rating}
                  price={item.daily_rate_per_sq}
                  production={item.production}
                  width={item.width}
                  height={item.height}
                  imageSrc={item.image}
                  alt={item.alt}
                />
              ))}
            </>
          )}
          {!isBillboard && (
            <>
              {recommendationData.map((item, index) => (
                <AgencyRecommendedCard
                  key={item.id}
                  channel_name={item.channel_name}
                  rate={item.average_rating}
                  peak_hour={item.peak_hour}
                  production={item.production}
                  normal={item.normal}
                  imageSrc={item.image}
                  alt={item.alt}
                />
              ))}
            </>
          )}
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
