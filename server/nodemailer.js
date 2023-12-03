const nodemailer = require('nodemailer');

// Create a Nodemailer transporter using SMTP details
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'usmanazeem00@gmail.com', // your Gmail email address
    pass: 'cmwkm7hk', // your Gmail email password
  },
});

// Function to send order confirmation email
const sendOrderConfirmationEmail = (userEmail) => {
  const mailOptions = {
    from: 'usmanazeem00@gmail.com',
    to: userEmail,
    subject: 'Order Confirmation',
    text: 'Thank you for your order! Your order has been successfully placed.',
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { sendOrderConfirmationEmail };
