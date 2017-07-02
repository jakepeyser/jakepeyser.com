/* eslint-disable max-len */
export default {
  name: 'Capital Weather',
  filename: 'capital-weather',
  links: [
    { url: 'https://github.com/IBM-Bluemix/capital-weather', type: 'github' },
    { url: 'https://capital-weather.mybluemix.net/', type: 'desktop' }
  ],
  summary: {
    Companies: ['IBM', 'The Weather Company'],
    Description: 'Discover and interact with weather data from any city around the world',
    Date: 'Spring 2015',
    URL: 'https://capital-weather.mybluemix.net/',
    Responsibility: 'Added additional functionality to the base app, including fetching historical weather info and styling tweaks.',
    Technology: ['Node.js', 'Hapi', 'Esri', 'Google Maps API', 'The Weather Company API', 'Bluemix']
  },
  background: 'When IBM first partnered with the The Weather Company in 2015, our developer advocacy team was asked to build out an engaging demo to drum up excitement for the partnership. Weather isn\'t the sexiest dataset on the surface, but when you consider the implications it has on everyday business you can start to picture the number of things that can be done with the information. \nWhat sets the Weather Co. API above the rest is its precision and volume of historical data. To demonstrate the global implications of this new service, we created an interactive map that allowed users to visualize the weather in all capitals across the world. Users are able to explore current conditions, historical weather reports, and even get future weather predictions based on analysis of past weather patterns. We aimed for the app to give users a feel for the amount of weather data in existence today in order to inspire novel and exciting use cases for integrating applications on the Bluemix platform.',
  images: [
    { file: 'united_states.png', desc: 'View the current weather for all capitals across the world' },
    { file: 'new_york_historical_data.gif', desc: 'Double-click on any spot on the map to get the historical weather for today\'s date' },
    [
      { file: 'icon_key.png' },
      { file: 'marrakesh_prediction.png', desc: 'Predict weather for any future date by analyzing historical weather patterns' },
    ],
    { file: 'europe.png' }
  ]
}

