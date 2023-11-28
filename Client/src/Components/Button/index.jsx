import React from 'react'
import './index.scss'
const Button = ({text,color}) => {
  return (
    <button className={`hero_btn ${color}`}>
        <a href="">{text}</a>
    </button>
  )
}

export default Button