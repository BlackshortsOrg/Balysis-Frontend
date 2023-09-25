import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import Icon from "../Assets/Icon";
import { temp } from "../Data/data";
import Card from "./Card";
import "@splidejs/react-splide/css";
const Review = () => {
  const splideOptions = {
    type: "loop",
    perPage: 3,
    perMove: 2,
    pagination: false,
    speed: 800,
    width: '100%'
  };

  return (
    <div className="bg-white h-full relative p-10 -mt-20">
      <div className="text-6xl font-bold font-montserrat flex justify-center mb-8">
        Loved & trusted by trusted{" "}
        <span className="pl-3 text-blue-balysisblue">specialist</span>
      </div>
      <Splide hasTrack={false} options={splideOptions}>
        <SplideTrack className="review-splide">
          {temp.map((pro) => {
            return (
              <SplideSlide className="bg-white">
                <Card
                  key={pro.id}
                  minor={pro.minor}
                  name={pro.name}
                  major={pro.major}
                  source={pro.s}
                />
              </SplideSlide>
            );
          })}
        </SplideTrack>
        <div class="splide__arrows">
          <button class="splide__arrow splide__arrow--prev ml-24 ">
            <img src={Icon.leftButtonReview} className="-rotate-90 " />
          </button>
          <button class="splide__arrow splide__arrow--next mr-20">
            <img src={Icon.rightButtonReview} className="rotate-90" />
          </button>
        </div>
      </Splide>
    </div>
  );
};
export default Review;
