import React from "react";

import {
  InfiniteLoopSlider,
  animationDuration,
  random,
  shuffle,
  sliderImages,
} from "../../utils";

function Slider() {
  return (
    <div className=" wrap w-5/6 mx-auto  font-Lato my-4 ">
      <header>
        <h1>Meet Our Top Clients Around The World</h1>
      </header>
      <div className="img-list">
        <InfiniteLoopSlider
          duration={random(animationDuration - 5000, animationDuration + 5000)}
        >
          {shuffle(sliderImages)
            .slice(0)
            .map((img) => (
              <div className="slide">
                <img src={img} alt="" />
              </div>
            ))}
        </InfiniteLoopSlider>
        <div className="fade" />
      </div>
    </div>
  );
}

export default Slider;
