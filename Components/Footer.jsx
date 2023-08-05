"use client";
import Image from 'next/image'
import React, { useState, useEffect } from "react";
import Link from 'next/link'
import Balysis from '../assets/Group 7120.png'
import { SocialIcon } from "react-social-icons";
import { FaFacebook } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
export default function Footer() {
   // const [x,setx] = useState(window.innerWidth/60);

   return (
      <div className='flex flex-row justify-between items-start pt-20 pb-4 px-14'>
         <div className='flex flex-col items-start justify-start'>
            <div className='flex flex-col items-center justify-center'>
            <div className="w-[100%]" >
                  <Image src={Balysis} alt='Balysis' />
            </div>
            <div className="flex flex-row justify-between mb-40">
                 <div className='mr-10'>
                    <Link href="https://www.instagram.com/sharnamagrawal_/"
                    ><BsInstagram color="white" size={30}/> </Link>
                 </div>
                 <div className='mr-10'><Link href="https://www.linkedin.com/company/blackshorts/" className="adjust-me"><BsLinkedin
                    color="white" size={30}/></Link></div>
                 <div><Link href="https://www.facebook.com/sharnam.agrawal.1/" className="adjust-me" ><FaFacebook
                    color="white" size={30}/> </Link></div>
              </div>

            </div>
            <div className="text-white font-medium">
                   Copyright ©Blackshorts | All Rights Reserved 2023
            </div>
         </div>
         <div className='flex flex-row items-center justify-center mt-14'>
            <ul className='mr-24'>
               <li className="text-[#41AFFF] text-xl font-bold mb-6">COMPANY</li>
               <li className="text-white font-medium leading-relaxed">Home</li>
               <li className="text-white font-medium leading-relaxed">About</li>
               <li className="text-white font-medium leading-relaxed">Privacy Policy</li>
               <li className="text-white font-medium leading-relaxed">Terms and Conditions</li>
               <li className="text-white font-medium leading-relaxed">Contact Us</li>
            </ul>
         
         
            <ul className='mr-24'>
               <li className="text-[#41AFFF] text-xl font-bold mb-6">RESOURCES</li>
               <li className="text-white font-medium leading-relaxed">Learning</li>
               <li className="text-white font-medium leading-relaxed">Youtube</li>
               <li className="text-white font-medium leading-relaxed">TradeBook</li>
               <li className="text-white font-medium leading-relaxed">Code My Startegy</li>
               <li className="text-white font-medium leading-relaxed">Ask For New Feature</li>
            </ul>
         </div>
      </div>
   )
}