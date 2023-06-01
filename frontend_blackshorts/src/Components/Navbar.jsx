import React, { useState } from "react";
import { BrowserRouter,Route,Routes,Link } from "react-router-dom";
import BalysisLogo from '../assets/bay.svg'
import {FaChevronDown} from 'react-icons/fa';
export default function Navbar(){
    const [state,setstate] = useState('none');
    <style>

    </style>
    return(
        <div className="navbar" style = {{borderBottom:'2px solid #41AFFF'}}>
            <div className="logo">
             
                    <img src = {BalysisLogo} alt = 'Balysis' />
                    <span>Powered By BlackShorts</span>
            </div>
            <div className="links">
               <div><Link to = "/">Home</Link></div>
               <div className="dropdown" ><div style = {{display:'flex',alignContent:'center',justifyContent:'center'}}><Link to = "/learning" style={{display:'block'}}>Learning</Link><div className="icon" style = {{display:'flex',alignItems:'center',marginLeft :'3px'}}><FaChevronDown size='10px'/></div></div>
               <ul className="dropdown-menu" style={{position:'absolute', top : '70%', backgroundColor:'#41AFFF',width : '20%',borderRadius : '8px'}}>
    <li><a href="#">action 1</a></li>
    <li><a href="#">action 2</a></li>
    <li><a href="#">action 3</a></li>
    <li><a href="#">action 4</a></li>
  </ul>
               </div>
               <div className="dropdown" onMouseEnter={()=>{setstate('block')}} onMouseLeave = {()=>{setstate('none')}}><div style = {{display:'flex',alignContent:'center',justifyContent:'center'}}><Link to = "/learning" style={{display:'block'}}>Products</Link><div className="icon" style = {{display:'flex',alignItems:'center',marginLeft :'3px'}}><FaChevronDown size='10px'/></div></div>
               <ul className="dropdown-menu" style={{position:'absolute', display :`${state}`, top : '70%', backgroundColor:'#41AFFF',width : '20%',borderRadius : '8px'}}>
    <li><a href="#">action 1</a></li>
    <li><a href="#">action 2</a></li>
    <li><a href="#">action 3</a></li>
    <li><a href="#">action 4</a></li>
  </ul>
               </div>
              
              
               <div><Link to = "aboutus">About Us</Link></div>
            </div>
            <div className="nav-buttons">
             <div className="signin" style={{color :'#41AFFF', backgroundColor : '#072341',marginRight:'10%',borderRadius : '16px'}}>Sign In</div>
             <div className="signup" style = {{backgroundColor : '#41AFFF', color : 'black', borderRadius : '16px' , fontWeight : '700'}}>Sign Up</div>
            </div>
        </div>
    )
}