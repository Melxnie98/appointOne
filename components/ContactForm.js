import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const myForm = document.forms['ContactForm'];
      const formData = new FormData(myForm);

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      // Use router.push for client-side navigation
      router.push('/thank-you/');
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error, show an alert, etc.
    }
  };

  return (
    <div className={styles['contact-form']}>
      <form
        name="ContactForm"
        method="POST"
        data-netlify="true"
        action="/"
        onSubmit={handleSubmit}
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
    </div>
  );
};

export default ContactForm;

