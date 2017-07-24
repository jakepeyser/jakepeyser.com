import React from 'react'
import Icon from '../Icon'

const AboutSkill = ({ icon, title, link }) =>
  <a className="about__skill" href={link} target="_blank">
    <div className="about__skill--icon">
      <Icon icon={icon} />
    </div>
    <div className="about__skill--overlay">
      <div className="about__skill--title">
        <span>{title}</span>
      </div>
    </div>
  </a>

export default AboutSkill
