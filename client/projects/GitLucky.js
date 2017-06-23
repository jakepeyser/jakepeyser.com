/* eslint-disable max-len */
export default {
  name: 'Git Lucky',
  filename: 'git-lucky',
  links: [
    { url: 'https://github.com/jakepeyser/git-lucky', type: 'github' },
    { url: 'https://git-lucky-search.herokuapp.com/', type: 'desktop' }
  ],
  summary: {
    Description: 'Advanced search for GitHub repositories',
    Date: 'Winter 2017',
    URL: 'https://git-lucky-search.herokuapp.com/',
    Technology: ['Node.js', 'Express', 'React', 'Redux', 'GitHub API', 'Travis CI', 'Heroku']
  },
  background: 'As a way to experiment with the GitHub API, I created an advanced repository search and filtering tool.',
  images: [
    { file: 'home_login.png', desc: 'Authenticate with your GitHub account using OAuth' },
    [
      { file: 'search_react.png', desc: 'Search for repos by primary language' },
      { file: 'search_vue.png', desc: 'Search for repos by owner username' }
    ]
  ]
}

