import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Your form submission logic goes here
    // You can use the `fetch` API or a library like axios to send the form data to your server
    // Remember to set isSubmitting to false after the submission is complete
  };

  return (
    <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <p>
        <label>
          Name: <input type="text" name="name" />
          Phone Number: <input type="text" name="number" />
        </label>
      </p>
      <p>
        <label>
          Your Email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message: <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </p>
    </form>
  );
};

export default ContactForm;
