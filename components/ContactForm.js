import { useFormik } from 'formik';
import { useState } from 'react';

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
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        onChange={formik.handleChange}
        value={formik.values.message}
      />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
