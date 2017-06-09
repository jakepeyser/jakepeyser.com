import React from 'react'
import { getStaticResourceLink } from '../../utils'

const Image = ({ path }) => {
  const link = getStaticResourceLink(path)
  return (
    <div className="project__images--wrapper">
      <a href={ link } target="_blank">
        <img src={ link } />
      </a>
    </div>
  )
}

export default ({ projectName, images }) =>
  <div className="project__images">
    <h2>Gallery</h2>
    <div className="project__images--gallery">
    {images.map(entry => {
      const url = (project, file) => `images/${project}/${file}`
      return Array.isArray(entry)
        ? <div key={entry[0]} className="project__images--row">
            { entry.map(file => <Image key={file} path={ url(projectName, file) } />) }
          </div>
        : <Image key={entry} path={ url(projectName, entry) } />
    })}
    </div>
  </div>
