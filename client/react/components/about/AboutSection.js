import React from 'react'

const AboutSection = ({ title, children }) =>
  <div className="about__section">
    <div className="about__section--background" />
    <div className="about__section--wrapper">
      <h2>{ title }</h2>
      { children }
    </div>
  </div>

export default AboutSection
