---
layout: default
title: Contact
---

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
  .captcha-container {
    margin-bottom: 15px;
  }
  .captcha-error {
    color: red;
    margin-bottom: 15px;
  }
</style>

<!-- <form class="contact-form" action="https://formspree.io/f/xvgpraeb" method="POST"> -->
<form class="contact-form" action="https://formspree.io/f/xrbgpgjl" method="POST">

<label for="name">Your Name:</label>
<input type="text" id="name" name="name" required>

<label for="email">Your Email:</label>
<input type="email" id="email" name="_replyto" required>

<label for="message">Your Message:</label>
<textarea id="message" name="message" required></textarea>

  <!-- CAPTCHA Checkbox -->
  <div class="captcha-container">
    <input type="checkbox" id="captcha" name="captcha" required>
    <label for="captcha">I'm not a robot</label>
  </div>
  <div id="captcha-error" class="captcha-error"></div>

<button type="submit">Send Message</button>

</form>

<script>
  document.querySelector('.contact-form').addEventListener('submit', function(e) {
    if (!document.getElementById('captcha').checked) {
      e.preventDefault();
      document.getElementById('captcha-error').textContent = 'Please confirm you are not a robot by checking the box.';
    }
  });
</script>
