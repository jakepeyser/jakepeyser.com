/* eslint-disable max-len */
import React from 'react'
import { getStaticResourceLink } from '../../utils'

export default {
  name: 'Steps',
  filename: 'steps',
  links: [
    { url: 'https://github.com/jakepeyser/steps', type: 'github' },
    { url: 'https://steps-app.herokuapp.com/', type: 'desktop' }
  ],
  summary: {
    Description: 'Physical therapy rehabilitation tools and analytics for therapists and patients',
    Date: 'Fall 2016',
    URL: 'https://steps-app.herokuapp.com/',
    Responsibility: 'Created the initial designs for both the patient and therapist application flow. My development work was mostly around building out the React components, but I also worked on the front end state management and server-side Express routing and DB logic.',
    Technology: ['React', 'Redux', 'Node.js', 'PostgreSQL', 'Travis CI', 'Heroku', 'Socket.io', 'D3.js', 'Material-UI', 'Sketch']
  },
  background: 'Steps offers a suite of digital tools for patients to better engage in their treatments. Treatment plans and exercises are easily accessed via mobile with helpful videos and clear information. Patients can log their treatment workouts and see their improvement over time, including pain metrics on specific exercises. There\'s even real-time chat, allowing patients to bring urgent issues to their therapist\'s attention and overall feel more engaged in the treatment process. On the therapist\'s view, Steps provides real-time insight into patients\' improvement (or lack thereof), putting a new spin on the "how has it been going question?" during follow-up appointments. Therapists can also easily create new exercises for their patients and new treatment plans, as well as view a multitude of practice information, including current plans, historical plans, and aggregated analytics about the effectiveness of their treatments.',
  component: () =>
    <div className="project__images">
      <img src={ getStaticResourceLink('images/steps/screenshot.png') } alt="Exercise View" />
      <img src={ getStaticResourceLink('images/steps/mobile.png') } alt="Workout Plan" />
    </div>
}

