const express    = require('express');
const nodemailer = require('nodemailer');
const router     = express.Router();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    await transporter.sendMail({
      from:    email,
      to:      process.env.EMAIL_USER,
      subject: '[CARA] ' + subject,
      text:    'From: ' + name + ' (' + email + ')\n\n' + message
    });
    res.json({ msg: 'Message sent!' });
  } catch (err) {
    res.status(500).json({ msg: 'Failed to send email' });
  }
});

module.exports = router;
