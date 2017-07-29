import React, { Component } from 'react'
import Portal from 'react-portal';
import { getStaticResourceLink } from '../../utils'

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    }
  }

  // Manipulate an image display modal that takes over the screen
  expandImage(status) {
    this.setState({ expand: status })
  }

  render() {
    const { path, desc } = this.props
    const link = getStaticResourceLink(path)
    return (
      <div className="project__image">
        <Portal closeOnEsc
          isOpened={this.state.expand}
          onClose={() => this.expandImage(false)}>
          <div className="modal project__image--modal" onClick={() => this.expandImage(false)}>
            <img src={link} />
            {desc && <div className="project__image--modal-text">{desc}</div>}
          </div>
        </Portal>
        <div className="project__image--wrapper" onClick={() => this.expandImage(true)}>
          <img src={link} />
          {desc && <div className="project__image--description">{desc}</div>}
        </div>
      </div>
    )
  }
}

const ProjectImages = ({ projectName, images }) =>
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

export default ProjectImages;
