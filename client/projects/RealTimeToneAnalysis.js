/* eslint-disable max-len */
export default {
  name: 'Real Time Tone Analysis',
  filename: 'real-time-tone-analysis',
  links: [
    { url: 'https://github.com/IBM-Bluemix/real-time-tone-analysis', type: 'github' },
    { url: 'https://realtime-tone.mybluemix.net/', type: 'desktop' }
  ],
  summary: {
    Company: 'IBM',
    Description: 'Analyze the tone of your speech in real-time using Watson Speech-to-Text and Tone Analysis',
    Date: 'Spring 2016',
    URL: 'https://realtime-tone.mybluemix.net/',
    Responsibility: 'Built out the back end and integrated with the Watson APIs. Integrated dynamic charting for displaying varying degrees of tone on the front end.',
    Technology: ['Node.js', 'Socket.io', 'Watson Speech-to-Text', 'Watson Tone Analyzer', 'Bluemix', 'Smoothie Charts']
  },
  background: 'This project initially started as the brainchild of my colleague, Anton, and ultimately evolved into a joint project. Working for a Fortune 500 company comes with its fair share of stress and sometimes this manifests itself in an intense exchange of words during a meeting. He thought it would be useful if there was a way to track the tone of your language in order to alert you when you express excessive anger or frustration. After sharing his idea with our small team, we set to work on an app that automatically transcribes your speech and can plot the tone of the conversation in real time. Using IBM Watson services, we built the app and used an open source charting library to display the tone results in a beautiful, streaming graph. Our main goal is for the app to encourage individuals to be conscious of their tone as they go about their day. We also found the app to be a good introduction to Watson\'s language parsing technologies and built a workshop around it, helping introduce client developers to Node.js, cognitive apps, and microservices.',
  images: ['transcription.png', 'emotion_tone_chart.gif', ['metadata.png', 'alternate_hypotheses.png']]
}

