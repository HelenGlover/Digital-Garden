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


---
layout: default
---

<article>
  <div>
    <h1>{{ page.title }}</h1>
    <time datetime="{{ page.last_modified_at | date_to_xmlschema }}">{% if page.type != 'pages' %}
      Last updated on {{ page.last_modified_at | date: "%B %-d, %Y" }}
      {% endif %}
    </time>
  </div>

  <div id="notes-entry-container">
    <content>
      {{ content }}
      <p>This line appears after every note.</p>
    </content>

    <side style="font-size: 0.9em">
      <h3 style="margin-bottom: 1em">Notes mentioning this note</h3>
      {% if page.backlinks.size > 0 %}
      <div style="display: grid; grid-gap: 1em; grid-template-columns: repeat(1fr);">
      {% for backlink in page.backlinks %}
        <div class="backlink-box">
        <a class="internal-link" href="{{ site.baseurl }}{{ backlink.url }}{%- if site.use_html_extension -%}.html{%- endif -%}">{{ backlink.title }}</a><br>
        <div style="font-size: 0.9em">{{ backlink.excerpt | strip_html | truncatewords: 20 }}</div>
        </div>
      {% endfor %}
      </div>
      {% else %}
      <div style="font-size: 0.9em">
        <p>
          There are no notes linking to this note.
        </p>
      </div>
      {% endif %}
    </side>
  </div>
</article>

<hr>

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

<h2>The Intersection</h2>
<ul>
  {% assign intersection_notes = site.notes | where: "labels", "the intersection" %}
  {% for note in intersection_notes %}
    <li>
      {{ note.last_modified_at | date: "%Y-%m-%d" }} — <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
    </li>
  {% endfor %}
</ul>

<p>Here are all the notes in this garden, along with their links, visualized as a graph.</p>

{% include notes_graph.html %}

