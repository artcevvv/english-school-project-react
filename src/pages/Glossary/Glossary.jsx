import React from 'react'
import Content from './containers/contents/Content'

const Glossary = () => {
  return (
    <div className="app__glossary section__padding">
        <div className="app__glossary-container">
            <div className="app__glossary-container_content">
              <Content/>
            </div>
        </div>
    </div>
  )
}

export default Glossary