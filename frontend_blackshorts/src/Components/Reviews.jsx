import React from "react";
import { Splide, SplideSlide, SplideTrack} from '@splidejs/react-splide';
import img1 from '../assets/bayblack.jpg'
import img2 from '../assets/BalysisLogo.png'
import img3 from '../assets/handscolor.jpg'
import {MdKeyboardArrowRight} from 'react-icons/md'
import '@splidejs/react-splide/css/skyblue';
import {temp} from '../Data/data'
import Card from "./Card";
export default function Reviews(){
    return(
        <div className="reviews" style={{backgroundColor:' #000F20'}}>
            <div className="reviews-content">
                <div className="reviews-content-text">
                  <h1>Loved & trusted by trusted <span>specialist</span></h1>
                </div>
                <div className="reviews-content-carousel">
                <Splide hasTrack={ false } aria-label="..." options={{
                    type : 'loop',
                    perPage : 3,
                    perMove : 3,
                    pagination : false,
                    speed : 1800
                    
                }}>
                    
  <SplideTrack>
    {temp.map(pro=>{
        return(
            <SplideSlide> 
              <Card {...pro} />
            </SplideSlide>
        )
    })}
  </SplideTrack>

   <div className="splide__arrows" /> 


</Splide>
    

                </div>
            </div>
             <div className="colouring-div1"></div>
             <div className="colouring-div2"></div>
             <div className="colouring-div3"></div>
             <div className="colouring-div4"></div>
             </div>

             
        
    )
}