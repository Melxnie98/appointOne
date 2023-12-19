import React, { useState } from 'react';
import { navigate } from 'gatsby'; // Import navigate from Gatsby
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };

  return (
    <form
      className={styles['contact-form']} // Use bracket notation for dynamic class names
      name="ContactForm"
      method="POST"
      data-netlify="true"
      action="/"
      onSubmit={handleSubmit} // Add onSubmit handler to the form
    >
      <input type="hidden" name="form-name" value="ContactForm" />
      <p className={styles['input-group']}>
        <label>
          Name: <input type="text" name="name" />
        </label>
        <label>
          Phone Number: <input type="number" name="number" />
        </label>
      </p>
      <p>
        <label>
          Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button
          className={styles['submit-button']}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </p>
    </form>
  );
};

export default ContactForm;


