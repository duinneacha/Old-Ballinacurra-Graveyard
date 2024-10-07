---
layout: default
title: Home
---

<div class="welcome-banner">
  <h1>Welcome to Ballinacurra Graveyard's Dedicated Website</h1>
  <p>We are delighted to have you here. Explore our content and enjoy your stay.</p>
</div>

<div class="image-gallery-container">
  <div class="image-gallery">
    <img src="{{ '/assets/imgs/obg-church.jpeg' | relative_url }}" alt="Church Image" class="gallery-image">
    <!-- <img src="{{ '/assets/imgs/website-banner.jpg' | relative_url }}" alt="Website Banner" class="gallery-image"> -->
  </div>
</div>

<div class="dedication-section">
  <h2>Dedication</h2>
  <img src="{{ '/assets/imgs/frankie-devlin.png' | relative_url }}" alt="Dedication Image" class="dedication-image">
  <p>This website is dedicated to the memory of Frankie Devlin (nee Gleeson) of Ballinacurra for her kindness and devotion to her family, friends and for her endearing support to those less fortunate.</p>
  <p>Frankie also ensured the graves of all those buried here shall see sunlight. Her selflessness will always be remembered.</p>
  <p><em>"Non est ad astra mollis e terris via"</em></p>
  <p><em>"There is no easy way from the earth to the stars"</em></p>
  <p>(Seneca, 4 BC-65 AD)</p>
</div>

<style>
  .welcome-banner {
    text-align: center;
    padding: 20px;
    background-color: #f8f9fa;
    /* border-bottom: 5px solid #ddd; */
  }

  .welcome-banner h1 {
    font-size: 2.5em;
    margin-bottom: 10px;
  }

  .welcome-banner p {
    font-size: 1.2em;
    color: #555;
  }

  .image-gallery-container {
    max-width: 100%;
    overflow: hidden;
    padding: 20px;
  }

  .image-gallery {
    display: flex;
    justify-content: center;
    gap: 20px;
    max-width: 100%;
    flex-wrap: wrap;
  }

  .gallery-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    flex: 1 1 auto;
  }

  .dedication-section {
    padding: 20px;
    background-color: #fffbea; /* Warm, light background */
    border: 1px solid #f2d1b3; /* Soft, warm border */
    border-radius: 5px;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Gentle shadow for depth */
  }

  .dedication-section h2 {
    text-align: center;
    font-size: 2em;
    color: #b76e79; /* Warm, respectful color */
    margin-bottom: 10px;
  }

  .dedication-section p {
    font-size: 1.2em;
    color: #555;
    text-align: justify; /* Improved readability */
    line-height: 1.6; /* Increased line height for better readability */
  }

  .dedication-image {
    display: block;
    margin: 0 auto 20px;
    max-width: 50%; /* Adjusted size for emphasis */
    height: auto;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
</style>
