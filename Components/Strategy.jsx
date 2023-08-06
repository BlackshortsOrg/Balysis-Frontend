"use client"
import Image from 'next/image'
import hands from '../assets/hands.svg'
import handscolor from '../assets/handscolor.jpg'
import HeroImg from '../assets/1 1.svg'
import Slider from "./Slider";
export default function Strategy() {
    return (
        <div className='strategy bg-white w-[100vw]'>
            <div className="section1">
                <div className="lefty">
                    <div className="mt-[9rem] ml-[8rem]">
                        <h1 className='font-bold text-6xl text-[#000F20] w-[80%] leading-snug'>Check out strategies and backtest on data of your choice</h1>
                    </div>
                    <div className="text-[#000F20] w-[67%] font-medium text-xl ml-[8rem] mt-[1.5rem]">
                        <p>Get live profit and loss statistics on market data by the deployed and published strategies.</p>
                    </div>
                    <div className="flex flex-row ml-[8rem] mt-[1rem]">
                        <div className="py-2 px-12 hover:cursor-pointer bg-[#41AFFF] border rounded-full font-bold mr-[1.5rem]">Sign Up</div>
                        <div className="py-2 px-8 hover:cursor-pointer font-bold bg-white mr-[10%] rounded-full border-2 border-black text-black">Learn to use</div>
                    </div>
                </div>
                <div className="righty">
                    <div className="strategy-img">
                        <Image src={HeroImg} alt="hands" />
                    </div>
                </div>
            </div>
            <div className="section2 relative h-[110vh] mt-[-6vh] w-[100%] border-2 border-[#41AFFF]">
                <Slider />
            </div>

        </div>
    )
}