const router = require('express').Router();

router.use('/projects', require('./projects'));
router.use('/contact', require('./contact'));

module.exports = router;
