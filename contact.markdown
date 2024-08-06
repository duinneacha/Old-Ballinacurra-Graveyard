---
layout: default
title: Contact
---

<!-- Contact Us


I need to create a contact form and post. I am thinking of using formspree for the delivery of it. IT would be useful to have a catchpa too.

The form should have

 Your Name
 Your Email
 Your Message

 All in a tone that we would be happy to hear from the user.

 The site is a Jekyll Jamstack site. I am giving you three files two are for reference purposes.

 default.html - just for reference purposes.
 styles.css - just to give you an idea of the general style of the site.
 contact.markdown - this is the file that should be populated - please include any styles and js in this file too.

 After I give you the third file you can start. -->

# Contact Us

We'd love to hear from you! Please fill out the form below to get in touch.

<style>
  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 100, 0, 0.1);
  }
  .contact-form label {
    display: block;
    margin-bottom: 5px;
    color: #006400;
  }
  .contact-form input[type="text"],
  .contact-form input[type="email"],
  .contact-form textarea {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #006400;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .contact-form textarea {
    height: 150px;
  }
  .contact-form button {
    background-color: #006400;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }
  .contact-form button:hover {
    background-color: #008000;
  }
  .g-recaptcha {
    margin-bottom: 15px;
  }
</style>

<form class="contact-form" action="https://formspree.io/f/your_formspree_endpoint" method="POST">
  <label for="name">Your Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Your Email:</label>
  <input type="email" id="email" name="_replyto" required>
  
  <label for="message">Your Message:</label>
  <textarea id="message" name="message" required></textarea>
  
  <div class="g-recaptcha" data-sitekey="your_recaptcha_site_key"></div>
  
  <button type="submit">Send Message</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>
<script>
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    if (grecaptcha.getResponse() === '') {
      e.preventDefault();
      alert('Please complete the CAPTCHA.');
    }
  });
</script>
