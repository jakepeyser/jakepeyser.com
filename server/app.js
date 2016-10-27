const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const PATHS = {
  indexHTML: path.join(__dirname, '../browser/build/index.html'),
  build: path.join(__dirname, '../browser/build')
}
const PORT = process.env.PORT || 8080;
const chalk = require('chalk');
if (process.env.NODE_ENV !== 'production')
  require('dotenv').config();

// Redirect requests to custom domain if hitting Heroku domain
app.use((req, res, next) => {
  return req.headers.host === 'jakepeyser.herokuapp.com' ?
    res.redirect(301, `http://jakepeyser.com${req.originalUrl}`) : next();
});

// Logging, static, and body-parser middleware
app.use(morgan('dev'));
app.use(express.static(PATHS.build));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// Handle API and React requests
app.use('/api', require('./routes'));
app.get('/*', (req, res) => {
  res.sendFile(PATHS.indexHTML);
});

// Error handler
app.use((err, req, res, next) => {
  console.error(chalk.red(err));
  console.error(chalk.red(err.stack))
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

// Start server
app.listen(PORT, () =>
  console.log(chalk.blue(`Server started on port ${chalk.magenta(PORT)}`))
);
