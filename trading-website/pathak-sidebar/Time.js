import React from 'react'
import './Time.module.css'
import SimplelSelect from './Select'
import Title from './Title'


const Time = () => {
  return (
    <div className='time'>
      <Title name="Time horizon" />
      <div className="container">
        <span className="time--label">Start : </span>
        <input type="date" className="input" /></div>
      <div className="container">
        <span className="time--label">End : </span>
        <input type="date" className="input" /></div>
      <div className="container">
        <span className="time--label">Duration : </span>
        <span> <SimplelSelect /> </span>
      </div>


    </div>
  )
}

export default Time
