import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";
import { TbTriangleInvertedFilled } from "react-icons/tb";
const Slider = () => {
  const slideOptions = {
    type: "loop",
    pauseOnHover: false,
    resetProgress: false,
    perPage: 1,
    perMove: 1,
    speed: 1200,
    pagination: false,
  };
  return (
    <>
      <div className="pt-2 text-white gap-3 relative flex flex-col justify-start items-center w-1/2 h-2/5 rounded-3xl my-20 mx-auto border-2 slider-header">
        <div className="font-bold text-lg">Introducing</div>
        <div className="font-montserrat text-5xl font-bold">Balysis</div>
        <div className="font-montserrat">
          Your one-stop place to create, customize, and backtest <br /> your
          trading strategies without writing a single line of code
        </div>
      </div>
      <div className="-mt-52 flex justify-center">
        <Splide hasTrack={false} options={slideOptions}>
          <SplideTrack>
            <SplideSlide className="home-screen-sliderOne" />
            <SplideSlide className="home-screen-sliderTwo" />
            <SplideSlide className="home-screen-sliderThree" />
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev">
              <TbTriangleInvertedFilled className="back-slider-arrow text-gray-buttonSlider" />
            </button>
            <button className="splide__arrow splide__arrow--next">
              <TbTriangleInvertedFilled className="text-gray-buttonSlider" />
            </button>
          </div>
        </Splide>
      </div>
    </>
  );
};

export default Slider;
