import React from 'react'
import './title.module.css'

const Title = (props) => {
  return (
    <div>
      <h1 className="title">{props.name}</h1>
    </div>
  )
}

export default Title
