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
  background: 'Leading up to IBM InterConnect 2016, we had been collaborating with one of IBM\'s business partners, Runkeeper, on ways to deliver unique experiences to their users. Early on I was toying with the prospect of delivering relevant content to users based on what type of runner they were. Using their Twitter feed and Watson, we can ascertain a user\'s general personality breakdown and correlate it with the aggregate personality of runners of a certain type.\nTo help visualize this concept, I decided to adapt my colleagues\' popular Celebrity Match demo, expanding it to compare users against the people who tweet using specific running hashtags. The result was an interactive demo that analyzes and matches you with a popular running hashtag based on your personality, needs, and values.',
  images: [
    { file: 'jack_dorsey_results.png', desc: 'Match and compare any Twitter user to a running hashtag by passing their tweets through personality analysis' },
    { file: 'match_home.png' },
    { file: 'barack_obama_mobile.png' }
  ]
}

