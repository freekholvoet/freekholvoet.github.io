---
layout: archive
title: "Curriculum Vitae"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<hr style="border: none; border-top: 2px solid gray;" />

Work experience
======

* 2021 - current: PhD candidate in actuarial science at KU Leuven, Belgium
  * Started my PhD in November 2021 under supervision of Prof. dr. Katrien Antonio. Main focus will be the use of machine learning in actuarial science, with a focus on interpretabililty and usability in practice.

* 2015 - 2021: Risk modelling expert at NN Life Insurance, Belgium
  * My traineeship at Delta Lloyd Life transitioned into a full-time position as Risk Modelling Expert in the Delta Lloyd Life Risk Modelling team. In 2017, Delta Lloyd merged with NN Insurance.
  * The lapse assumption model was a large project throughout the years. Transitioning from an expert judgment-based model to a fully data-driven model with all calculations and calibration done in R. A combination is made between machine learning techniques and regulatory/operational effects.
  * I was involved in the mortality assumption studies over the years, and researching machine learning techniques for switch behaviour in individual universal life/unit-linked products. I performed several model changes in Prophet and was part of the team making the transition of the cash flow model in Prophet to IBM R3S (AFM).

* 2014 - 2015: Risk Modelling trainee at Delta Lloyd Life Insurance, Belgium
  * Two part-time traineeships during my studies in the Modelling team of Delta Lloyd Life (Risk Department). First traineeship was on the grouping of model points for cashflow projection model, with the use of Prophet. Second traineeship working on the lapse assumption model; analysis of methods in place, update and transition to R for the data process.

<hr style="border: none; border-top: 2px solid gray;" />

Services
======

* 2025
  * Elected ABAP representative for the insurance research group
  * Member of the POC MAFE/MAFW
  * Member of the AFI council
  * Member of the KU Leuven, FEB Campus council Leuven
  * Member of the KU Leuven, FEB faculty council
* 2024
  * Elected ABAP representative for the insurance research group
  * Member of the POC MAFE/MAFW
  * Member of the Subcommision MAFE/ZIM
  * Member of the KU Leuven, FEB Campus council Leuven
  * Member of the KU Leuven, FEB faculty council
* 2023
  * Elected ABAP representative for the insurance research group
  * Member of the POC MAFE/MAFW
* 2022
  * Member of the POC MAFE/MAFW
* 2021
  * Member of the POC MAFE/MAFW

<hr style="border: none; border-top: 2px solid gray;" />

Teaching
======

* Teaching assistent
  * 2021 - current: TA for the course Solvency of Financial Institutions. My tasks involved co-organizing the course structure, making contact with industry speakers from KBC, EY, AG Insurance, National Bank of Belgium and QBE Re, and the organization and grading of tests, exams and assignments.
* Master thesis workleader
  * 2021 - current: Workleader for master theses in the MAFE program and the Statistics & Data Science program at KU Leuven. Supervised over ten master theses between 2021 and current.

<hr style="border: none; border-top: 2px solid gray;" />

Research visits
======

* December 2024
  * University of Toronto, on invitation from Prof. Christopher Blier-Wong.

<hr style="border: none; border-top: 2px solid gray;" />

Education
======

* Ph.D in Actuarial science, KU Leuven, Belgium, 2026 (expected)
* M.S. in Actuarial and Financial Engineering, KU Leuven, Belgium, 2021
* M.S. in Insurance, KU Leuven, Belgium, 2014
* B.S. in Mathematics, KU Leuven, 2013

<hr style="border: none; border-top: 2px solid gray;" />

Personal interests
======

* Founder and head of the Project TableTop VZW in Herent, Belgium. We have been organising events around boardgames since 2017, most notably the yearly event <a href="https://www.hexgames.be/" target="_blank">HEX</a>.
* Woodcarver and woodturner under the pseudonym <a href="https://www.instagram.com/woodenpandas/" target="_blank">Wooden Pandas</a>. Completed four years of woordcarving school at the Qrios Leuven.
* Trivia: fan of punkrock, postrock, and metal (melodic, trash) music. Used to be active in youth movements (Chiro). During my studies I was active in the student organisation Wina VZW.

<hr style="border: none; border-top: 2px solid gray;" />

Publications
======

  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

<hr style="border: none; border-top: 2px solid gray;" />

Talks
======

  <ul>{% assign past_talks = site.talks | where_exp: "talk", "post.date <= site.time" | sort: "date" | reverse %}
    {% for talk in past_talks %}
    {% include archive-single-talk.html %}
    {% endfor %}</ul>
