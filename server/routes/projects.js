const express = require('express');
const router = express.Router();

// TODO: Place projects & tech in a DB so these are not hard-coded
const projects = require('../data/projects')

router.get('/', (req, res) => {
  res.json(projects);
});

router.get('/:projectName', (req, res) => {
  res.json(projects.find(project =>
    project.filename === req.params.projectName));
});

module.exports = router;
