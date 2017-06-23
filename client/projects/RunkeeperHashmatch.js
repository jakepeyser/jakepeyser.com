/* eslint-disable max-len */
export default {
  name: 'Runkeeper Hashmatch',
  filename: 'runkeeper-hashmatch',
  links: [
    { url: 'https://github.com/JakePeyser/runkeeper-hashmatch', type: 'github' }
  ],
  summary: {
    Companies: ['IBM', 'Runkeeper'],
    Description: 'Discovers the running hashtag most aligned with your personality',
    Date: 'Winter 2016',
    Responsibility: 'Updated back end to accommodate matching against aggregated profiles instead of individual accounts. Extended front end of app beyond just personality comparisons. Scraped Twitter for popular hashtags related to running',
    Technology: ['Node.js', 'Jade', 'Twitter API', 'Watson Personality Insights API', 'MongoDB', 'Bluemix']
  },
  background: 'When IBM first partnered with the The Weather Company in 2015, our developer advocacy team was asked to build out an engaging demo to drum up excitement for the partnership. At first glance, weather data isn’t the sexiest, but when you consider the implications it has on everyday business you can start to picture the number of things that can be done with the information. What sets the Weather Co. API above the rest is its precision and volume of historical data. To demonstrate that this new service had global implications, we created an interactive map that allowed users to visualize the weather in all capitals across the world. Users are able to explore the current conditions, historical weather reports, and even get future weather predictions based on analysis of past weather patterns. We aimed for the app to give users a feel for the amount of weather data in existence today in order to inspire novel and exciting use cases.',
  images: [
    { file: 'jack_dorsey_results.png', desc: 'Match and compare any Twitter user to a running hashtag by passing their tweets through personality analysis' },
    { file: 'match_home.png' },
    { file: 'barack_obama_mobile.png' }
  ]
}

