'use client'
import './globals.css'
import Reviews from '../Components/Reviews';
import Strategy from '../Components/Strategy';
import Card from '../Components/Card';
import {temp} from '../Data/data.js';
import Feature from '../Components/Features';
import Layout from './layout';

export default function Home(){
    return(
     
        <div className="Home">
        
         <Strategy />
        <Feature />
        <Reviews />
         
        </div>
    )
}