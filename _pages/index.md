---
layout: page
id: home
permalink: /
title: Home [Back to main site](https://helenglover.netlify.app/)
---

# Welcome! 🌱

<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.5;">
  Inspired by the concept of a digital garden, this space offers a more informal and exploratory outlet for my thoughts.
<br>
  <b>The goal?</b> To create an evolving, interconnected landscape of information — sort of like a real garden. It is not intended to be as well polished as the other pages.
  I believe in <a href="https://www.swyx.io/learn-in-public" style="color: #000;">Learning in Public</a>; the practice of sharing what you learn as you're learning it.
</p>

<strong>The Intersection</strong>



<strong>Collections</strong>

<ul>
  {% assign recent_notes = site.notes | sort: "last_modified_at_timestamp" | reverse %}
  {% for note in recent_notes limit: 5 %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<strong>Wikis</strong>


<strong>TBD</strong>

<a href="https://www.figma.com/design/FUtPrKDPHMRDDXn4gcx5eb/Idea-Playground?node-id=0-1&t=1X0tAScanEi5QQfS-1">Idea Playground</a>


<!-- <style>
  .wrapper {
    max-width: 46em;
  }
</style> -->
