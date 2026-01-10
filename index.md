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
  this site is an exploratory outlet for my thoughts. 
  I see personal growth as a process of reflection, and my main goal for this platform is to support that growth by thinking through what I read and learn. Some people may read these posts, and I hope they see them not as fixed opinions but as a stream of thoughts in a learning process. To stay true to that, I write freely without being paralyzed by refined editing, noting any updates along the way.
</p>

<h2>Latest notes</h2>

<ul style="list-style: none; padding-left: 0;">
  {% comment %}
    Sort by git_created_at (automatic creation date) descending
    This ensures the newest pages appear first, even if display_date is manual
  {% endcomment %}
  {% assign notes_by_date = site.notes | sort: "git_created_at" | reverse %}
  {% for note in notes_by_date %}
    <li style="margin-bottom: 1em;">
      {% comment %}
        Display date priority:
        1. display_date (manual override)
        2. git_created_at (default automatic creation date)
        3. last_modified_at (fallback)
      {% endcomment %}
      {% assign show_date = note.display_date | default: note.git_created_at | default: note.last_modified_at %}
      {{ show_date | date: "%Y.%m.%d" }}
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
