/* eslint-disable max-len */
import React from 'react'
import { getStaticResourceLink } from '../../utils'

export default {
  name: 'Parachute Teachers',
  filename: 'parachute-teachers',
  links: [
    { url: 'http://www.parachuteteachers.com/', type: 'desktop' }
  ],
  summary: {
    Company: 'Parachute Teachers',
    Description: 'A platform for finding substitute teachers among talented members of the local community',
    Date: 'Spring 2016',
    URL: 'http://www.parachuteteachers.com/',
    Responsibility: 'Helped design and implement the REST API on the Python server.',
    Technology: ['Python', 'Flask', 'React', 'Redux', 'PostgreSQL', 'Travis CI', 'Heroku']
  },
  background: 'In early 2016, I contributed to the development of a platform for an early-stage education startup out of Boston. What began as a way to enhance my Python skills and learn a new JavaScript framework led to a keen interest in the problem we were trying to solve. Our goal was to revolutionize the substitute management space, providing a modern system for school districts and knocking down the barriers that prevent community members from substitute teaching.',
  component: () =>
    <div className="project__images">
      <img src={ getStaticResourceLink('images/parachute-teachers/screenshot.png') } alt="Available Teacher Results" />
      <img src={ getStaticResourceLink('images/parachute-teachers/mobile.png') } alt="Editing Teacher Profile" />
    </div>
}

