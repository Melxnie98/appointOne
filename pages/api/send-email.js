// pages/api/send-email.js

import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { to, subject, text } = req.body;

    // Configure nodemailer with your Hotmail email service credentials
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'melanieleonard98@hotmail.com',
        pass: 'Ilovegooch12',
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: 'melanieleonard98@hotmail.com',
        to,
        subject,
        text,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

