"use client"
import '../../app/globals.css'
import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import Balysis from '../../assets/BalysisLogo.png'
import Pics from '../../assets/ayushphotu.jpg'
import { FaChevronDown } from 'react-icons/fa'
const NavbarCodeTool = () => {
    const [state, setstate] = useState('none')
  return (
    <div>
       <div className="w-full h-[10vh] text-white bg-[#1E1E1E] flex justify-evenly items-center font-bold text-[1rem] fixed z-10 navbar border-b-[1px] border-[#41AEFD]" >
            <div className="flex h-[10vh] w-[13.31rem] text-justify">

                <Image src={Balysis} alt='Balysis' className="pr-10" style={{ height: "10vh", width: "210px" }} />
                {/* <span style={{color:'black'}}>Powered By BlackShorts</span> */}
            </div>
            <div className="flex items-center text-white justify-evenly flex-1">
                <div className='text-white'><Link href="/"><h1 className='text-white'>Home</h1></Link></div>
                <div><Link href="#"><h1 className='text-white'>How to use</h1></Link></div>

                <div className="dropdown" onMouseEnter={() => { setstate('block') }} onMouseLeave={() => { setstate('none') }}><div className='flex items-center justify-center'><Link href="#" style={{ display: 'block' }}> <h1 className='text-white'>Custome code</h1> </Link><div className="icon flex items-center ml-1"><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu" style={{ position: 'absolute', display: `${state}`, top: '70%', backgroundColor: '#41AFFF', width: '20%', borderRadius: '8px' }}>
                        <li><Link href="#">action 1</Link></li>
                        <li><Link href="#">action 2</Link></li>
                        <li><Link href="#">action 3</Link></li>
                        <li><Link href="#">action 4</Link></li>
                    </ul>
                </div>
                <div><Link href="/marketplace"><h1 className="text-white">Marketplace</h1></Link></div>
                <div className="dropdown" ><div className="flex content-normal justify-center" ><Link href="/learning" style={{ display: 'block' }}> <h1 className='text-white'>Learn</h1> </Link><div className="icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu absolute top-[70%] bg-[#41AFFF] w-[20%] rounded-lg" >
                        <li><Link href="#">action 1</Link></li>
                        <li><Link href="#">action 2</Link></li>
                        <li><Link href="#">action 3</Link></li>
                        <li><Link href="#">action 4</Link></li>
                    </ul>
                </div>


                <div><Link href="#"><h1 className="text-white">Pricing</h1></Link></div>
            </div>
            {/* <div className="flex items-center justify-center w-[20%] h-full mr-[2%]">
                <div className="py-2 px-8 hover:cursor-pointer bg-white mr-[10%] rounded-full border-2 border-black text-black">Sign In</div>
                <div className="py-2 px-8 hover:cursor-pointer bg-[#41AFFF] border rounded-full font-bold" >Sign Up</div>
            </div> */}
            <div className='flex flex-row items-center justify-center pr-9 pl-36'>
                <h1 className="text-white pr-9">Username</h1>
                <Image src={Pics} className='w-10 h-10 text-2xl rounded-full border-2 border-white'/>
            </div>
        </div>
    </div>
  )
}

export default NavbarCodeTool