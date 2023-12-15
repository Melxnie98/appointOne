import { useState } from 'react';
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
    <div class="contact-form">
    <form  name="ContactForm" method="POST" data-netlify="true" action="/" >
       <input type="hidden" name="form-name" value="ContactForm" />
      <p class="input-group">
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
      <p class="submit-button">
        <button  type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </p>
    </form>
    </div>
  );
};

export default ContactForm;

