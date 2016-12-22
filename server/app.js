const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const PATHS = {
  indexHTML: path.join(__dirname, '../browser/build/index.html'),
  robots: path.join(__dirname, '../robots.txt'),
  build: path.join(__dirname, '../browser/build')
}
const PORT = process.env.PORT || 8080;
const chalk = require('chalk');
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'staging')
  require('dotenv').config();

// Redirect requests to custom domain if hitting Heroku domain
app.use((req, res, next) => {
  return req.headers.host === 'jakepeyser.herokuapp.com' ?
    res.redirect(301, `http://jakepeyser.com${req.originalUrl}`) : next();
});

// Logging, static, and body-parser middleware
app.use(morgan('dev'));
app.use('*.pdf', function(req, res, next) { // allow CORS for PDF requests
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Expose-Headers', 'Accept-Ranges, Content-Encoding, Content-Length, Content-Range');
  next();
});
app.use(express.static(PATHS.build));
app.use(bodyParser.urlencoded({ extended: true })); // for HTML form submits
app.use(bodyParser.json()); // would be for AJAX requests

// Handle API and all browser requests
app.get('/robots.txt', (req, res) => res.sendFile(PATHS.robots));
app.use('/api', require('./routes'));
app.get('/*', (req, res) => res.sendFile(PATHS.indexHTML));

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
