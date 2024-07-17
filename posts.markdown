---
layout: default
title: Posts
permalink: /posts/
---

<h1>All Posts. . .</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <!-- Link to the post's URL and display the post's title -->
      <a href="{{ post.url }}">{{ post.title }}</a>
      <!-- Display the post's date in "Month Day, Year" format -->
      <small>{{ post.date | date: "%B %d, %Y" }}</small>
    </li>
  {% endfor %}
</ul>
