const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const projects = ['test1', 'test2', 'test3']
  res.json(projects);
});

router.get('/:projectId', (req, res) => {
  const project = {
    id: 1,
    name: 'Test1',
    desc: 'This is a brief description',
    github_url: 'www.github.com',
    live_url: 'www.google.com',
    summary: 'My money\'s in that office, right? If she start giving me some bullshit about it ain\'t there, and we got to go someplace else and get it, I\'m gonna shoot you in the head then and there. Then I\'m gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I\'m talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?',
    tech: ['node', 'react', 'redux']
  }
  res.json(project);
});

module.exports = router;
