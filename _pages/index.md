---
layout: page
id: home
permalink: /
title: Home
---

[Back to the main site](helenyglover.com)

# Welcome! 🌱

<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.5;">
  Inspired by the concept of a 
  <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">
    digital garden
  </a>, 
  this site is an exploratory outlet for my thoughts. I believe in personal growth through introspection and use this platform for continual reflection.
</p>

<h2>Latest notes</h2>

<ul style="list-style: none; padding-left: 0;">
  {% assign notes_by_date = site.notes | sort: "last_modified_at" | reverse %}
  {% for note in notes_by_date %}
    <li style="margin-bottom: 1em;">
      {{ note.last_modified_at | date: "%Y.%m.%d" }}
      <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">
        {{ note.title }}
      </a>

      {% if note.labels and note.labels.size > 0 %}
        <span style="color: #666; font-size: 0.85em; margin-left: 0.5em;">
          ({% if note.labels.size > 1 %}Tags{% else %}Tag{% endif %}
          {% for label in note.labels %}
            <span style="display: inline-block; background: #e0f0ff; color: #004080; padding: 2px 6px; margin-right: 4px; border-radius: 12px; font-size: 0.8em;">
              {{ label }}
            </span>
          {% endfor %}
          )
        </span>
      {% endif %}
    </li>
  {% endfor %}
</ul>

<br><br>

<!--
<p>Visualize how all the pages connect. They are hyperlinked.</p>

<div class="graph-background">
  {% include notes_graph.html %}
</div>
-->
