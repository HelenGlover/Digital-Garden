---
layout: page
id: home
permalink: /
title: Home [Back to main site](https://helenglover.netlify.app/)
---

# Welcome! 🌱

<p style="padding: 2em 2em; background: #76d7c4; border-radius: 4px; color: #000; width: 90%; line-height: 2.5;">
  Inspired by the concept of a digital garden, this space offers a more informal and exploratory outlet for my thoughts.
<br>
  <b>The goal?</b> To create an evolving, interconnected landscape of information — sort of like a real garden. It is not intended to be as well polished as the other pages.
  I believe in <a href="https://www.swyx.io/learn-in-public" style="color: #000;">Learning in Public</a>; the practice of sharing what you learn as you're learning it.
</p>



<h2>The Intersection</h2>
<ul>
  {% assign intersection_notes = site.notes | where: "labels", "the intersection" %}
  {% for note in intersection_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Collections</h2>
<ul>
  {% assign collections_notes = site.notes | where: "labels", "collections" %}
  {% for note in collections_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Wiki</h2>
<ul>
  {% assign wiki_notes = site.notes | where: "labels", "wiki" %}
  {% for note in wiki_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<br><br>

<p>Here are all the notes in this garden, along with their links, visualized as a graph.</p>

<div class="graph-background">
  {% include notes_graph.html %}
</div>
