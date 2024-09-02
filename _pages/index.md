---
layout: page
id: home
permalink: /
title: Home
---
[Back to main site](https://helenglover.netlify.app/)

# Welcome! 🌱

<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.5;">
  Inspired by the concept of a <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">digital garden</a>, this space is a exploratory outlet for my thoughts.
<br>
  <b>The goal?</b> To create an <i>evolving, interconnected landscape of information</i> — sort of like a real garden. 
  <br> It is not intended to be as well polished as the rest of the website.
  <!-- I believe in <a href="https://www.swyx.io/learn-in-public">Learning in Public</a>; the practice of sharing what you learn as you're learning it. -->
</p>



<h2>Innovating</h2>
<p> <i>Innovating at the intersection of sustainability and tech for design</i>
<ul>
  {% assign intersection_notes = site.notes | where: "labels", "innovating" %}
  {% for note in intersection_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Collections</h2>
<p> <i>Cohesive collection of ideas</i>
<ul>
  {% assign collections_notes = site.notes | where: "labels", "collections" %}
  {% for note in collections_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Wiki</h2>
<i>Hypertext thinking of half-baked thoughts</i>
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
