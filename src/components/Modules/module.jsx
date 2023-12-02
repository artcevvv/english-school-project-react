import React from 'react'
import './module.css'

const Module = ({imgUrl}) => {
  return (
    <div className="app__blog-container_module">
        <div className="app__blog-container_module-image">
            <img src={imgUrl} alt="module"/>
        </div>
    </div>
  )
}

export default Module