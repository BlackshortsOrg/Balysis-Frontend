"use client"
import Image from 'next/image'
import hands from '../assets/hands.svg'
import handscolor from '../assets/handscolor.jpg'
import HeroImg from '../assets/1 1.svg'
import Slider from "./Slider";
export default function Strategy() {
    return (
        <div className='strategy'>
            <div className="section1">
                <div className="lefty">
                    <div className="bigd">
                        <h1 >Check out strategies and backtest on data of your choice</h1>
                    </div>
                    <div className="smalld">
                        <p>Get live profit and loss statistics on market data by the deployed and published strategies.</p>
                    </div>
                    <div className="buttond">
                        <div className="bt-sign">Sign Up</div>
                        <div className="bt-learn">Learn to use</div>
                    </div>
                </div>
                <div className="righty">
                    <div className="strategy-img">
                        <Image src={HeroImg} alt="hands" />
                    </div>
                </div>
            </div>
            <div className="section2">
                <Slider />
            </div>

        </div>
    )
}