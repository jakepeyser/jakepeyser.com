import React from 'react'
import { getStaticResourceLink } from '../../utils'

const Image = ({ path, desc }) => {
  const link = getStaticResourceLink(path)
  return (
    <div className="project__images--wrapper">
      <a href={link} target="_blank">
        <img src={link} />
        {desc && <div className="project__images--description">{desc}</div>}
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
          ? <div key={entry[0].file} className="project__images--row">
            {entry.map(img => <Image key={img.file} path={url(projectName, img.file)} desc={img.desc} />)}
          </div>
          : <Image key={entry.file} path={url(projectName, entry.file)} desc={entry.desc} />
      })}
    </div>
  </div>
