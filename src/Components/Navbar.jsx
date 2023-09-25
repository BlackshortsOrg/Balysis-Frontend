import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import balysis from '../Assets/bayblack.jpg'
import BalysisLogo from '../Assets/bay.svg'
import { FaChevronDown } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [state, setstate] = useState('none');
    <style>

    </style>
    return (
        <div className="navbar" >
            <div className="logo">

                <img src={balysis} alt='Balysis' />
                {/* <span style={{color:'black'}}>Powered By BlackShorts</span> */}
            </div>
            <div className="links">
                <div><Link to="/">Home</Link></div>
                <div><Link to="/howtouse">How to use</Link></div>

                <div className="dropdown" onMouseEnter={() => { setstate('block') }} onMouseLeave={() => { setstate('none') }}><div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}><NavLink to="/learning" style={{ display: 'block' }}>Products</NavLink><div className="icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu" style={{ position: 'absolute', display: `${state}`, top: '70%', backgroundColor: '#41AFFF', width: '20%', borderRadius: '8px' }}>
                        <li><a href="#">action 1</a></li>
                        <li><a href="#">action 2</a></li>
                        <li><a href="#">action 3</a></li>
                        <li><a href="#">action 4</a></li>
                    </ul>
                </div>
                <div><NavLink to="/marketplace">Marketplace</NavLink></div>
                <div className="dropdown" ><div style={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}><Link to="/learning" style={{ display: 'block' }}>Learn</Link><div className="icon" style={{ display: 'flex', alignItems: 'center', marginLeft: '3px' }}><FaChevronDown size='10px' /></div></div>
                    <ul className="dropdown-menu" style={{ position: 'absolute', top: '70%', backgroundColor: '#41AFFF', width: '20%', borderRadius: '8px' }}>
                        <li><a href="#">action 1</a></li>
                        <li><a href="#">action 2</a></li>
                        <li><a href="#">action 3</a></li>
                        <li><a href="#">action 4</a></li>
                    </ul>
                </div>


                <div><Link to="/pricing">Pricing</Link></div>
            </div>
            <div className="nav-buttons">
                <div className="signin" style={{ color: 'black', backgroundColor: '#FFFF', marginRight: '10%', borderRadius: '16px', border: '2px solid black' }}>Sign In</div>
                <div className="signup" style={{ backgroundColor: '#41AFFF', color: 'white', borderRadius: '16px', fontWeight: '700' }}>Sign Up</div>
            </div>
        </div>
    )
}