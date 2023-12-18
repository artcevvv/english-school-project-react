import React from 'react'
import Module from '../../components/Modules/module'
import './Blog.css'

import { moduleOne, moduleTwo, moduleThree, moduleFour, moduleFive } from '../../../../constants/images'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="app__blog section__padding">
        <div className="app__blog-heading">
          <h1>
            Choose the Module
          </h1>
          <div className="app__blog-container">
            <div className="app__blog-container_groupA">
              <Link to= '/english-school-project-react/moduleone'><Module imgUrl={moduleOne} /></Link>
              <Link to= '/english-school-project-react/moduletwo'><Module imgUrl={moduleTwo} /></Link>
              <Link to= '/english-school-project-react/modulethree'><Module imgUrl={moduleThree} /></Link>
              <Link to= '/english-school-project-react/modulefour'><Module imgUrl={moduleFour} /></Link>
            </div>
            <div className="app__blog-container_groupB">
              <Link to="/glossary"><Module imgUrl={moduleFive} /></Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Blog