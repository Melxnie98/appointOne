import { useFormik } from 'formik';
import { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: async (values) => {
      setSubmitting(true);

      // Send email using nodemailer or your preferred email service
      const emailData = {
        to: 'melanieleonard98@hotmail.com',
        subject: 'New Web Form Submission',
        text: `
          Name: ${values.name}
          Email: ${values.email}
          Phone: ${values.phone}
          Message: ${values.message}
        `,
      };

      // Assuming you have a server-side endpoint for sending emails
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });

      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="contact-form">
      <div className="styles.form-row">
        <div className="styles.input-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="styles.input-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
      </div>

      <div className="styles.input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <div className="styles.input-group">
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          onChange={formik.handleChange}
          value={formik.values.message}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="styles.submit-button">
        Find out More
      </button>
    </form>
  );
};

export default ContactForm;
