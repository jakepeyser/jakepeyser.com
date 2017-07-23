import React from 'react'
import Helmet from 'react-helmet'

export default () => {
  return (
    <div id="about">
      <Helmet title="About" />
      <div className="about__banner">
        <div className="about__banner--bg" />
      </div>
      <div className="about__wrapper">
        <div className="about__title-wrapper" />
        <div className="about__content">
          <div className="about__content-buffer">
            <h2>About Me</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
