const tech = require('./tech')

module.exports = [
  {
    id: 1,
    name: 'Real Time Tone Analysis',
    desc: 'Analyze the tone of your speech in real-time using Watson Speech-to-Text and Tone Analysis',
    github_url: 'https://github.com/IBM-Bluemix/real-time-tone-analysis',
    live_url: 'https://realtime-tone.mybluemix.net/',
    summary: 'This project initially started as the brainchild of my colleague, Anton, and has evolved into a joint project. Working for a Fortune 50 company comes with its fair share of stress and sometimes this manifests itself in an intense exchange of words during a meeting. He thought it would be useful if there was a way to track the tone of your language in order to alert you when you express excessive anger or frustration. After sharing his idea with our small team, we set to work on an app that automatically transcribes your speech and can plot the tone of the conversation in real time. Using IBM Watson services, we built the app and used an open source charting library to display the tone results in a beautiful, streaming graph. Our main goal is for the app to encourage individuals to be conscious of their tone as they go about their day. We have also found the app to be a good introduction to Watson\'s language parsing technologies and have built a workshop it, helping introduce client developers to Node.js, cognitive apps, and microservices.',
    tech: [tech[0], tech[1], tech[2], tech[3], tech[4]]
  },
  {
    id: 2,
    name: 'Capital Weather',
    desc: 'Discover and interact with weather data from any city around the world',
    github_url: 'https://github.com/IBM-Bluemix/capital-weather',
    live_url: 'https://capital-weather.mybluemix.net/',
    summary: 'When IBM first partnered with the The Weather Company in 2015, our developer advocacy team was asked to build out an engaging demo to drum up excitement for the partnership. At first glance, weather data isn’t the sexiest, but when you consider the implications it has on everyday business you can start to picture the number of things that can be done with the information. What sets the Weather Co. API above the rest is its precision and volume of historical data. To demonstrate that this new service had global implications, we created an interactive map that allowed users to visualize the weather in all capitals across the world. Users are able to explore the current conditions, historical weather reports, and even get future weather predictions based on analysis of past weather patterns. We aimed for the app to give users a feel for the amount of weather data in existence today in order to inspire novel and exciting use cases.',
    tech: [tech[0], tech[5], tech[6], tech[7]]
  },
  {
    id: 3,
    name: 'Parachute Teachers',
    desc: 'A platform for local community members that have a talent to share with schools when the teacher is out for the day',
    live_url: 'http://www.parachuteteachers.com/',
    summary: 'In early 2016, I began to contribute to the development of a platform for an early-stage education startup out of Boston. What began as a way to enhance my Python skills and learn a new JavaScript library has led to a keen interest in the problem we are trying to solve and the path we have taken to solving real pain points. Our goal is to revolutionize the substitute management space, providing a modern system for school districts and knocking down the barriers that prevent community members from substitute teaching.',
    tech: [tech[8], tech[9], tech[10], tech[11]]
  },
  {
    id: 4,
    name: 'Runkeeper Hashmatch',
    desc: 'Discovers the running hashtag most aligned with your personality',
    github_url: 'https://github.com/JakePeyser/runkeeper-hashmatch',
    summary: 'Leading up to IBM InterConnect 2016, we had been collaborating with one of IBM\'s business partners, Runkeeper, on ways to deliver unique experiences to their users. Early on I was toying with the prospect of delivering relevant content to users based on what type of runner they were. Using their Twitter feed and Watson, we can ascertain a user\'s general personality breakdown and correlate it with the aggregate personality of runners of a certain type. To help visualize this concept, I decided to adapt my colleagues\' popular Celebrity Match demo, expanding it to compare users against the people who tweet using specific hashtags. The result was an interactive demo that analyzes and matches you with a popular running hashtag based on your personality, needs, and values.',
    tech: [tech[0], tech[12], tech[13], tech[14]]
  }
];
