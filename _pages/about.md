---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div style="text-align: justify;">
I am Freek, a postdoctoral researcher in actuarial science at KU Leuven, working with <a href="https://katrienantonio.github.io" target="_blank">Prof. Katrien Antonio</a>. I completed my PhD in August 2026 and continue at KU Leuven as a postdoctoral researcher, with my research centred on climate impact modelling. During my studies in mathematics and actuarial science, I interned at Delta Lloyd Life Insurance in Brussels, which turned into a full-time position as a risk modelling expert. I stayed nearly eight years, continuing at NN Life Insurance after it acquired Delta Lloyd, before returning to academia.
<br>
<br>
My research develops machine learning methods for decisions that carry financial and regulatory consequences. I work on interpretable and defensible models for pricing and risk assessment in insurance, on representing geographical and spatial information so that it can actually be used in practice, and on modelling dependence between perils and the joint extremes that drive the largest losses. Running through all of it is a concern with what happens between a model and a decision: whether the output can be explained, validated and trusted by the people and institutions that have to rely on it.
<br>
<br>
More recently my work has moved towards climate risk. I am the researcher on a two-year research project (Oct 2026 - Sept 2028) building a climate-risk engine that turns satellite, weather and building data into per-building, per-peril risk scores, developed together with industry partners. From the 2026-2027 academic year I also teach on information systems, business intelligence and AI at KU Leuven (both Leuven and Kortrijk campus).
</div>

<!-- Banner -->
<div class="site-banner">
  <div class="site-banner__inner">
    <h2>Latest Updates</h2>
    <ul class="site-banner__items">
      {% assign latest_posts = site.talks | where_exp: "post", "post.date <= site.time" | concat: site.publications | sort: "date" | reverse %}
      {% for post in latest_posts limit:4 %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
          <p>
            {% if post.collection == "publications" %}
              {% if post.category == "preprint" %}
                <em>Available as preprint via {{ post.venue }}</em>
              {% else %}
                <em>Published in {{ post.venue }}</em>
              {% endif %}
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
{% include linkedin-banner.html %}