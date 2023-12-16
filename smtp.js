require('dotenv').config();
var nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  
  host:process.env.SMTP_HOST,
  
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
  });
  
  module.exports = smtpTransport;