---
layout: page
title: Home
id: home
permalink: /
---

[Back to main site](https://helenglover.netlify.app/)


# Welcome! 🌱

<div style="padding: 3em 1em; background: #f5f7ff; border-radius: 4px; color: #000; max-width: 100%; width: 100%; line-height: 2.5;">
  Inspired by the concept of a digital garden, this space offers a more informal and exploratory outlet for my thoughts.

  <b>The goal?</b> To <span style="font-weight: bold">[[create an evolving, interconnected landscape of information]]</span> — sort of like a real garden. It is not intended to be as well polished as the other pages.
  I believe in <a href="https://www.swyx.io/learn-in-public" style="color: #000;">Learning in Public</a>; the practice of sharing what you learn as you're learning it.
</div>


<br>

<strong>Collection</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<style>
  .wrapper {
    max-width: 46em;
  }
</style>
