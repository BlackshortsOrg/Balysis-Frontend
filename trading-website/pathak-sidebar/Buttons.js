import React from 'react'
import './Buttons.module.css'
const Buttons = (props) => {
  return (
    <button className={props.classname + 'button'}>{props.name}</button>
  )
}

export default Buttons
