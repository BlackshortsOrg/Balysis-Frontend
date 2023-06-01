import React from 'react'
import Buttons from './Buttons'
import SimpleRadio from './Radio'
import SimplelSelect from './Select'
import './SideNav.module.css'
import Time from './Time'
import Title from './Title'


const SideNav = () => {
  return (
    <div className='sidenav'>
      <SimpleRadio />
      <Title name="Asset Type" />
      <SimplelSelect />
      <Title name="Asset name" />
      <SimplelSelect />
      <div className="line"></div>
      <Title name="Candlestick" />
      <SimplelSelect />
      <div className="time-cont">
        <Time />
      </div>
      <div className="line"></div>
      <Title name="Backtest Type" />
      <SimplelSelect />
      <div className="buttons">
        <div className="buttonsAction">
          <Buttons name="Save" classname='normal' />
          <Buttons name="Execute" classname='normal' />
        </div>
        <Buttons name="Save And Execute" classname='fill' />
      </div>
    </div>
  )
}

export default SideNav
