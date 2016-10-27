const express = require('express');
const router = express.Router();
const helper = require('sendgrid').mail;
const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

// Take messages from the contact form and send them to my email
router.post('/', (req, res, next) => {
  // Compose email from incoming request
  const fromEmail = new helper.Email(req.body.email);
  const toEmail = new helper.Email(process.env.EMAIL);
  const subject = `Hello from ${req.body.name}`;
  const content = new helper.Content('text/plain', req.body.message);
  const mail = new helper.Mail(fromEmail, subject, toEmail, content);
  const sgReq = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  // Send email using SendGrid
  sg.API(sgReq)
    .then((sgRes) => res.sendStatus(sgRes.statusCode))
    .catch(({ sgRes }) => {
      let err = new Error(sgRes.body.errors[0].message)
      err.status = sgRes.statusCode;
      next(err);
    });
});

module.exports = router;
