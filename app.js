

require('dotenv').config();
const runQuery = require('./mysql');
const smtpTransport = require('./smtp');

runQuery()
    .then((result) => {

        // Iterate through the result and send emails to each recipient

        for (const person of result) {
            const mailOptions = {
                from: process.env.SMTP_USER,
                to: person.email, 
                subject: 'Happy Birthday!',
                text: `Dear ${person.name},\n\nHappy birthday! Wishing you a fantastic day filled with joy and happiness.\n\nBest regards,\nUday Ladhi`,
            };

            smtpTransport.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Error sending email:', error);
                } else {
                    console.log('Email sent to ${person.name}:', info.response);
                }
            });
        }
    })
    .catch((err) => {

        // handle error
        
        console.error('Error occurred:', err);
    });