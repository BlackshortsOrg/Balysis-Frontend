import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import {TbTriangleInvertedFilled} from 'react-icons/tb'
function Slider() {
    return (
      <>
      <div className='behind'>
      <p className="one" style={{fontWeight:'bolder'}}>Introducing</p>
          <h1 className="two"><b>Balysis</b></h1>
          <p className="three" style={{color:'white'}}>Your one-stop place to create, customize, and backtest your trading strategies without writing a single line of code</p>
      <Splide hasTrack={false} aria-label='...'
       options={ {
          type: 'loop',
          pauseOnHover: false,
          resetProgress: false,
          perPage:1,
          perMove:1,
          speed:1200,
          pagination:false,
  
  
        } }
       
      >
  
    
      <SplideTrack className='wrapper'>
        <SplideSlide className='slide1'>
        </SplideSlide>
        <SplideSlide className='slide2'>
        </SplideSlide>
        <SplideSlide className='slide3'>
        </SplideSlide>
      </SplideTrack>
  
      <div className="splide__arrows">
      <button className="splide__arrow splide__arrow--prev"><TbTriangleInvertedFilled className = 'a' style={{color:'rgba(255, 255, 255, 0.5)'}}/></button>
    <button className="splide__arrow splide__arrow--next"><TbTriangleInvertedFilled style={{color:'rgba(255, 255, 255, 0.5)'}} /></button>
      </div>
      </Splide>
      </div>
    
        
      </>
    )
  }
  
  export default Slider
  