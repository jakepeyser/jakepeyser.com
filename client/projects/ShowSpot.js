/* eslint-disable max-len */
export default {
  name: 'ShowSpot',
  filename: 'showspot',
  links: [
    { url: 'https://github.com/jakepeyser/showspot', type: 'github' },
    { url: 'https://showspot.herokuapp.com/', type: 'desktop' }
  ],
  summary: {
    Description: 'Search Spotify for artists and discover related shows nearby',
    Date: 'Winter 2017',
    URL: 'https://showspot.herokuapp.com/',
    Technology: ['Node.js', 'Express', 'React', 'Redux', 'Spotify API', 'Bandsintown API', 'Travis CI', 'Heroku']
  },
  background: 'I find it very difficult to stay on top of what music artists are performing in my area. To help me with this problem, I built an app that allows users to search Spotify for an artist and then discover upcoming shows of related artists in their city. Using the concert affiliate link provided by Bandsintown, users are then able to buy tickets to one of those shows.',
  images: [
    { file: 'artist_search.png', desc: 'Search for any artist on Spotify' },
    { file: 'artist_view.png', desc: 'Look up shows related to the selected artist, either in your city or another city of your choice' },
    { file: 'searching_rhcp.gif' }
  ]
}

