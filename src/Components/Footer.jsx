import React, { useState } from "react";
import balysis from '../assets/Group 7120.png'
import { SocialIcon } from "react-social-icons";
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

export default function Footer(){
    const [x,setx] = useState(window.innerWidth/60);
    return(
        <div className="footer">
            <div className="footer-content">
                <div className="footer-left">
                   <div className="footer-left-img" >
                    <img src = {balysis} alt = 'Balysis' />
                   </div>
                   <div className="footer-left-icons">
                    <div className="icon1">
                    <a href="https://www.instagram.com/sharnamagrawal_/"
                     ><BsInstagram color="white"  size={x}/> </a>
                    </div>
                    <div className="icon2"><a href="https://www.linkedin.com/company/blackshorts/" className="adjust-me"><BsLinkedin size={x} 
                   color="white"/></a></div>
                    <div className="icon3"><a href="https://www.facebook.com/sharnam.agrawal.1/" className="adjust-me" ><FaFacebook size={x}
                    color="white" /> </a></div>
                   </div>
                   <div className="footer-left-text">
                     Copyright ©Blackshorts | All Rights Reserved 2023
                   </div>
                </div>
                <div className="footer-middle" style={{marginTop :'10%'}}>
                     <div className="middle-heading" style={{color:'#41AFFF',fontWeight:'700'}}>
                        COMPANY
                     </div>
                     <div className="middle-content" style={{marginTop:'6%',lineHeight:'170%',fontWeight:'500'}}>
                        <p>Home</p>
                        <p>About</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Contact Us</p>
                     </div>
                </div>
                <div className="footer-end" style={{marginTop :'10%'}}>
                <div className="right-heading" style={{color:'#41AFFF',fontWeight:'700'}}>
                        RESOURCES
                     </div>
                     <div className="middle-content" style={{marginTop:'6%',lineHeight:'170%',fontWeight:'500'}}>
                        <p>Abhishek</p>
                        <p>Rishita</p>
                        <p>Aadeesh</p>
                        <p>Eshwar</p>
                        <p>Bahteti Secrets</p>
                     </div>
                </div>
            </div>
        </div>
    )
}