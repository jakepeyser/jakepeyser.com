/* eslint-disable max-len */
import React from 'react'
import { getStaticResourceLink } from '../../utils'

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
    Technology: ['Node.js', 'Esri', 'Google Maps API', 'The Weather Company API', 'Bluemix']
  },
  background: 'When IBM first partnered with the The Weather Company in 2015, our developer advocacy team was asked to build out an engaging demo to drum up excitement for the partnership. At first glance, weather data isn’t the sexiest, but when you consider the implications it has on everyday business you can start to picture the number of things that can be done with the information. What sets the Weather Co. API above the rest is its precision and volume of historical data. To demonstrate that this new service had global implications, we created an interactive map that allowed users to visualize the weather in all capitals across the world. Users are able to explore the current conditions, historical weather reports, and even get future weather predictions based on analysis of past weather patterns. We aimed for the app to give users a feel for the amount of weather data in existence today in order to inspire novel and exciting use cases.',
  component: () =>
    <div className="project__images">
      <img src={ getStaticResourceLink('images/capital-weather/screenshot.png') } alt="Weather Map" />
      <img src={ getStaticResourceLink('images/capital-weather/mobile.png') } alt="Historical Weather Results for New York, New York" />
    </div>
}

