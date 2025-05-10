---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="text-align: justify;">
I am Freek, a PhD researcher in actuarial science at KU Leuven, under the supervision of <a href="https://katrienantonio.github.io" target="_blank">Prof. Katrien Antonio</a>. During my studies in mathematics and actuarial science, I gained practical experience at Delta Lloyd Life Insurance in Brussels, followed by nearly eight years specializing in risk modeling before returning to academia.
<br>
<br>
My research focuses on insurance data science, combining actuarial methods with machine learning to address practical challenges in non-life insurance. I am particularly interested in developing interpretable models for pricing, incorporating various types of geographical data to improve portfolio management, and advancing techniques for modeling dependencies and multi-peril risks. I also have a strong focus on incorporating regulatory or operational concerns in a model’s outputs, and on translating academic research into practical, industry-relevant solutions.
</div>

<!-- Banner -->
<div class="site-banner">
  <div class="site-banner__inner">
    <h2>Latest Updates</h2>
    <ul class="site-banner__items">
      {% assign latest_posts = site.talks | concat: site.publications | sort: "date" | reverse %}
      {% for post in latest_posts limit:4 %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
          <p>
            {% if post.collection == "publications" %}
              <em>Published in {{ post.venue }}</em>
            {% elsif post.collection == "talks" %}
              <em>{{ post.type }} in {{ post.venue }}</em>
            {% endif %}
            - {{ post.date | date: "%B %d, %Y" }}
          </p>
        </li>
      {% endfor %}
    </ul>
  </div>
</div>

<!-- Second Banner -->
<div class="site-banner">
  <div class="site-banner__inner">
    <h2>Latest LinkedIn Posts</h2>
    <div class="site-banner__items">
      {% assign linkedin_posts = site.data.linkedin_posts | slice: 0, 2 %}
      {% for post in linkedin_posts %}
      <div class="linkedin-post">
        <iframe src="{{ post.url }}" height="{{ post.height }}" width="100%" frameborder="0" allowfullscreen="" title="LinkedIn Post"></iframe>
      </div>
      {% endfor %}
    </div>
  </div>
</div>