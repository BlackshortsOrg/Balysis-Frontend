"use client"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import { TbTriangleInvertedFilled } from 'react-icons/tb'
function Slider() {
  return (
    <>
      <div className='behind relative flex flex-col flex-start items-center h-[40%] w-[50%] z-10 rounded-2xl bolder-2 border-white'>
        <p className="font-extrabold" >Introducing</p>
        <h1 className="font-bold text-white text-center"><b className='text-6xl font-bold'>Balysis</b></h1>
        <p className="text-white text-center" >Your one-stop place to create, customize, and backtest your trading strategies without writing a single line of code</p>
        <Splide hasTrack={false} aria-label='...'
          options={{
            type: 'loop',
            pauseOnHover: false,
            resetProgress: false,
            perPage: 1,
            perMove: 1,
            speed: 1200,
            pagination: false,


          }}

        >


          <SplideTrack className=''>
            <SplideSlide className='slide1'>
            </SplideSlide>
            <SplideSlide className='slide2'>
            </SplideSlide>
            <SplideSlide className='slide3'>
            </SplideSlide>
          </SplideTrack>

          <div className="splide__arrows">
            <button className="splide__arrow splide__arrow--prev"><TbTriangleInvertedFilled className='a' style={{ color: 'rgba(255, 255, 255, 0.5)' }} /></button>
            <button className="splide__arrow splide__arrow--next"><TbTriangleInvertedFilled style={{ color: 'rgba(255, 255, 255, 0.5)' }} /></button>
          </div>
        </Splide>
      </div>


    </>
  )
}

export default Slider
