import { useState } from 'react';

const ContactForm = () => {
  

  return (
    <form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
    <label>Your Number: <input type="text" name="phone" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>

  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

  );
};

export default ContactForm;
