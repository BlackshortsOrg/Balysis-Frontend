import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import {LiaBalanceScaleSolid} from 'react-icons/lib'
// import {LiaBalanceScaleSolid} from 'react-icons/lia';
import { RxTriangleDown } from 'react-icons/rx'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import { FaBalanceScale } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs';
import star from '../Assets/singlestar.svg';
import { FiHeart } from 'react-icons/fi';
import { BsFillHeartFill } from 'react-icons/bs';

export default function MarketC({ name, unique_id, drawdown, roi, capital, rating }) {
    const navigate = useNavigate();
    const [colour, setColour] = useState('black');
    const handleColour = () => {
        if (colour === 'black') {
            setColour('red');
        } else {
            setColour('black');
        }
    }
    return (
        <div className='marketc' style={{ position: 'relative' }} >
            <div className='marketc-upper'>
                <div className='div1' onClick={() => { navigate(`${unique_id}`) }}>
                    <span className='span1' style={{ color: 'black' }}>{name}</span>
                    <p className='span2'>Read more....</p>
                </div>
                <div className='div2'><LiaBalanceScaleSolid size={40} color='#414443' /></div>
                <div className='div3' onClick={handleColour} sty><BsFillHeartFill color={colour} size={40} /></div>
            </div>
            <div className='marketc-down'>
                <div className='marketc-down-left' onClick={() => { navigate(`${unique_id}`) }}>
                    <div>
                        <p>Rating</p>
                        <p style={{ alignItems: 'center' }}>{rating} <img src={star} alt='star'></img></p>
                    </div>
                    <div>
                        <p>Capital Required</p>
                        <p>₹ {Math.round(capital / 1000)}K/trade</p>
                    </div>
                    <div>
                        <p>ROI</p>
                        <p>{Math.round(roi)}% p.m.</p>
                    </div>
                    <div>
                        <p>Drawdown</p>
                        <p>{Math.round(drawdown) * 100}%</p>
                    </div>
                </div>
                <div className='marketc-down-right'>
                    <div style={{ fontSize: '1.3rem', marginLeft: '9%' }}> Subscribe</div>
                    <div style={{ marginTop: '2%' }}><RxTriangleDown color='white' size={30} /></div>
                </div>
            </div>
        </div>
    )
}