---
layout: page
id: home
permalink: /
title: Home
---

[Back to the main site](helenyglover.com)

# Welcome!

<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.0; font-size: 0.95em;">
  Inspired by the concept of a 
  <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">
    digital garden
  </a>, 
this site serves as an exploratory outlet for my thoughts. I view personal growth as fundamentally a process of reflection, and my goal for this space is to cultivate that growth by articulating what I read and learn. <br><br>
I hope readers approach these entries not as fixed opinions but as evolving thoughts, a practice of learning in public. To stay authentic to that, I write freely versus being perfectly polished. When my opinions change or my knowledge deepens, I'll add updates accordingly.

</p>

<h2>Latest Thoughts</h2>

<ul style="list-style: none; padding-left: 0;">
  {% assign notes_by_date = site.notes | sort: "git_created_at" | reverse %}
  {% for note in notes_by_date %}
    <li style="margin-bottom: 1.1em;">  
      <!-- Title -->
      <div style="font-size: 1em; font-weight: 200; margin-bottom: 0.15em;">
        <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">
          {{ note.title }}
        </a>
      </div>
      <!-- Description -->
      {% if note.description %}
        <div style="color: #777; font-size: 0.9em; margin-bottom: 0.25em; max-width: 60em;">
          {{ note.description }}
        </div>
      {% endif %}
      <!-- Date + Tags -->
      {% assign show_date = note.display_date | default: note.git_created_at | default: note.last_modified_at %}
      <div style="color: #666; font-size: 0.8em; line-height: 1.3;">
        <span>{{ show_date | date: "%B %d, %Y" }}</span>
        {% if note.labels and note.labels.size > 0 %}
          <span style="margin-left: 0.5em;">
            <strong>{% if note.labels.size > 1 %}Tags{% else %}Tag{% endif %}:</strong>
            {% for label in note.labels %}
              <span style="margin-left: 0.25em;">{{ label }}</span>
            {% endfor %}
          </span>
        {% endif %}
      </div>
    </li>
  {% endfor %}
</ul>

<h2>In Other Spaces:</h2>

[Behind the Screens: How Coordinated Inauthentic Behavior Shapes Online Narratives](https://medium.com/@cibmangotree/behind-the-screens-how-coordinated-inauthentic-behavior-shapes-online-narratives-dae5bb2b5a18) written for CIB Mango Tree, on Medium

[The First Year: The Volunteers Who Are Building CIB Mango Tree](https://medium.com/@cibmangotree/a-year-of-community-and-growth-at-cib-mango-tree-3c9a49383ceb) written for CIB Mango Tree, on Medium

<br><br>
