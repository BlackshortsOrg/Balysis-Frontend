import React from "react";
import Reviews from '../Components/Reviews';
import Strategy from '../Components/Strategy';
import Card from '../Components/Card';
import {temp} from '../Data/data.js';
import Feature from '../Components/Features';
export default function Home(){
    return(
        <div className="Home">
        <Strategy />
      <Feature />
      <Reviews />
    
        </div>
    )
}