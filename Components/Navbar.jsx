"use client"
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Balysis from '../assets/bayblack.jpg'
import BalysisLogo from '../assets/bay.svg'
import { FaChevronDown } from 'react-icons/fa';

import { useRouter } from 'next/router';
export default function Navbar() {

    const [state, setstate] = useState('none');
    <style>

    </style>
    return (
        <div className="w-full h-[10vh] bg-white flex justify-evenly items-center font-bold text-[1rem] fixed z-10 navbar" >
            <div className="flex h-[10vh] w-[13.31rem] text-justify">

                <Image src={Balysis} alt='Balysis' style={{ height: "10vh", width: "210px" }} />
                {/* <span style={{color:'black'}}>Powered By BlackShorts</span> */}
            </div>
            <div className="flex items-center justify-evenly flex-1">
                <div><Link href="/">Home</Link></div>
                <div><Link href="#">How to use</Link></div>

                <div className="dropdown" onMouseEnter={() => { setstate('block') }} onMouseLeave={() => { setstate('none') }}><div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}><Link href="#" style={{ display: 'block' }}>Products</Link><div className="icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu" style={{ position: 'absolute', display: `${state}`, top: '70%', backgroundColor: '#41AFFF', width: '20%', borderRadius: '8px' }}>
                        <li><Link href="#">action 1</Link></li>
                        <li><Link href="#">action 2</Link></li>
                        <li><Link href="#">action 3</Link></li>
                        <li><Link href="#">action 4</Link></li>
                    </ul>
                </div>
                <div><Link href="/marketplace">Marketplace</Link></div>
                <div className="dropdown" ><div className="flex content-normal justify-center" ><Link href="/learning" style={{ display: 'block' }}>Learn</Link><div className="icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu absolute top-[70%] bg-[#41AFFF] w-[20%] rounded-lg" >
                        <li><Link href="#">action 1</Link></li>
                        <li><Link href="#">action 2</Link></li>
                        <li><Link href="#">action 3</Link></li>
                        <li><Link href="#">action 4</Link></li>
                    </ul>
                </div>


                <div><Link href="#">Pricing</Link></div>
            </div>
            <div className="flex items-center justify-center w-[20%] h-full mr-[2%]">
                <div className="py-2 px-8 hover:cursor-pointer bg-white mr-[10%] rounded-full border-2 border-black text-black">Sign In</div>
                <div className="py-2 px-8 hover:cursor-pointer bg-[#41AFFF] border rounded-full font-bold" >Sign Up</div>
            </div>
        </div>
    )
}