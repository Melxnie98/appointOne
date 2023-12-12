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

      // Send email logic here...

      setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="styles.contact-form">
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
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
