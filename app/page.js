'use client'
import './globals.css'
import Reviews from '../Components/Reviews';
import Strategy from '../Components/Strategy';
import Card from '../Components/Card';
import { temp } from '../Data/data.js';
import Feature from '../Components/Features';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div className="Home">
            <Navbar />
            <Strategy />
            <Feature />
            <Reviews />
            <Footer />
        </div>
    )
}
