import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';


const ContactForm = () => {
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    setSubmitting(true);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      console.log("Form successfully submitted");
      // Optionally, you can add code to handle successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
      // Optionally, you can add code to handle submission failure
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form name="ContactForm" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <p>
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </p>
    </form>
  );
};

export default ContactForm;
