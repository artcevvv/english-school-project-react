import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='app__footer'>
      <div className='app__footer-text'>
        <h1>Над проектом работали:</h1>
        <ul className='app__footer-text_names'>
          <li>Севостьянов Артём Максимович</li>
          <li>Володина Анна Александровна</li>
          <li>Коваленко Виталий Игоревич</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer