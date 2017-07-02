/* eslint-disable max-len */
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
  background: 'Steps offers a suite of digital tools for patients to become more engaged in their recovery. Treatment plans and exercises are easily accessed via the web app, with helpful videos and clear information guiding the patient through each step of the way. Patients can log their workouts and see their improvement over time, including pain metrics for specific exercises. There\'s even real-time chat, allowing patients to bring urgent issues to their therapist\'s attention and overall feel more engaged in the treatment process.\nOn the therapist\'s view, Steps provides real-time insight into patients\' improvement (or lack thereof), putting a new spin on the "how has it been going?" question during follow-up appointments. Therapists can easily create new exercises for their patients and new treatment plans. Finally, they can view information about their practice like current and historical patient plans, as well as aggregated analytics covering the effectiveness of their treatments.',
  images: [
    { file: 'exercise_view.png', desc: 'Patients can see detailed information for all of their exercises, as well as personalized instructional videos' },
    { file: 'patient_list.png', desc: 'Therapists see a grid view of all their patients' },
    [
      { file: 'plan_view.png', desc: 'A patient\s plan lists all their exercises and the current day\'s completion status' },
      { file: 'workout_view.png', desc: 'After each exercise, a patient logs the level of pain they are still experiencing' }
    ],
    { file: 'patient_view.png', desc: 'Using patients\' exercise logs, therapists can get a better sense of their recovery progress' }
  ]
}

