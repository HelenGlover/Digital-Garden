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
  this site is an exploratory outlet for my thoughts. I believe in personal growth through introspection and use this platform for continual reflection. My main goal for writing is to strengthen my thoughts on what I read and learn as part of my personal growth experience. But I realized that having an audience is an important part of helping refine your writing. More polished works can be found on Medium.

Also, I hope readers don’t ascribe my writing as my static opinions but rather a stream of thoughts, as part of the learning in process metholdogy. As such, I wouldnt be tied down by editing which can be paralyzing but will note changes in the blog. 
https://devonzuegel.com/page/about-me
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
          <strong>{% if note.labels.size > 1 %}Tags{% else %}Tag{% endif %}:</strong>
          {% for label in note.labels %}
            <span style="display: inline-block; background: #e0f0ff; color: #004080; padding: 2px 6px; margin-right: 4px; border-radius: 12px; font-size: 0.8em; font-weight: bold;">
              {{ label }}
            </span>
          {% endfor %}
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
