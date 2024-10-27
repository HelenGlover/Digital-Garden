---
layout: page
id: home
permalink: /
title: Home
---
[Back to the main site](https://helenglover.netlify.app/)

# Welcome! 🌱

<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.5;">
  Inspired by the concept of a <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">digital garden</a>, this site is an exploratory outlet for my thoughts. I believe in personal growth through introspection and use this platform for continual reflection.
  <!-- <p>See it as an evolving, interconnected landscape of information — sort of like a real garden.  -->
  <br> 
  <!-- I believe in <a href="https://www.swyx.io/learn-in-public">Learning in Public</a>; the practice of sharing what you learn as you're learning it. -->
</p>



<h2>Innovating</h2>
<p> <i>Exploring the interconnectedness of sustainability, tech, and design</i>
<ul>
  {% assign intersection_notes = site.notes | where: "labels", "innovating" %}
  {% for note in intersection_notes %}
    <li>                            
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Short Writing</h2>
<p> <i>Bite-sized stories about anything and everything</i>
<ul>
  {% assign writing_notes = site.notes | where: "labels", "short-writing" %}
  {% for note in writing_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
    <li>
      <a href="https://sdgacademy.org/7-take-action-ideas-to-celebrate-earth-day/" target="_blank">7 Take Action Ideas to Celebrate Earth Day</a>
    </li>
  {% endfor %}
</ul>

<h2>Self</h2>
<p> <i>Reflections and processes in self development</i>
<ul>
  {% assign self_notes = site.notes | where: "labels", "self" %}
  {% for note in self_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<h2>Curations</h2>
<p> <i>Curations of ideas and resources</i>
<ul>
  {% assign curations_notes = site.notes | where: "labels", "curations" %}
  {% for note in curations_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<!-- <h2>Wiki</h2>
<i>Hypertext thinking of half-baked thoughts. Coming soon!</i>
<ul>
  {% assign wiki_notes = site.notes | where: "labels", "wiki" %}
  {% for note in wiki_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul> -->

<br><br>

<!-- <p>Visualize how all the pages connect (they are hyperlinked) in this graph.</p>

<div class="graph-background">
  {% include notes_graph.html %}
</div> -->
