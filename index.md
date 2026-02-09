---
layout: page
id: home
permalink: /
title: Home
---

[Back to the main site](helenyglover.com)

<style>
/* Flex layout: main content + sidebar under intro text */
.main-wrapper {
  display: flex;
  gap: 2em;
  margin-top: 2em;
}

/* Main content takes 2/3 width */
.main-content {
  flex: 2;
}

/* Sidebar to the right, below intro text */
.sidebar {
  flex: 1;
  background: #f5f7ff;
  padding: 1em;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.5;
  max-height: calc(100vh - 4em);
  overflow-y: auto;
}

/* Tag list */
.sidebar ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.5em;
}

/* Dropdown below the tag */
.sidebar li .tooltip {
  display: none;
  margin-top: 0.25em;
  background: #e4e7ff;
  padding: 0.5em;
  border-radius: 4px;
  font-size: 0.85em;
  line-height: 1.3;
  min-width: 100%;
}

.sidebar li:hover .tooltip {
  display: block;
}

/* Arrow visual cue */
.sidebar li .arrow {
  margin-left: 0.25em;
  font-size: 0.8em;
  color: #555;
}
</style>

<!-- Intro text -->
<p style="padding: 2em 2em; background: #f5f7ff; border-radius: 4px; color: #000; width: 90%; line-height: 2.0; font-size: 0.95em;">
  Inspired by the concept of a 
  <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">
    digital garden
  </a>, 
  this site serves as an exploratory outlet for my thoughts. I view personal growth as fundamentally a process of reflection, and my goal for this space is to cultivate that growth by articulating what I read and learn. <br><br>
  I hope readers approach these entries not as fixed opinions but as evolving thoughts, a practice of learning in public. To stay authentic to that, I write freely versus being perfectly polished. When my opinions change or my knowledge deepens, I'll add updates accordingly.
</p>

<!-- Flex container: main content + sidebar -->
<div class="main-wrapper">

  <!-- Main content -->
  <div class="main-content">
    <h2>Latest Thoughts</h2>
    <ul style="list-style: none; padding-left: 0;">
      {% assign notes_by_date = site.notes | sort: "git_created_at" | reverse %}
      {% for note in notes_by_date %}
        <li style="margin-bottom: 1.1em;">  
          <div class="note-title">
            <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">
              {{ note.title }}
            </a>
          </div>
          {% if note.description %}
            <div class="note-description" style="color:#777; font-size:0.9em; margin-bottom:0.25em; max-width:60em;">
              {{ note.description }}
            </div>
          {% endif %}
          {% assign show_date = note.display_date | default: note.git_created_at | default: note.last_modified_at %}
          <div class="note-meta" style="color:#666; font-size:0.8em; line-height:1.3;">
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
    <p>
      <a href="https://medium.com/@cibmangotree/behind-the-screens-how-coordinated-inauthentic-behavior-shapes-online-narratives-dae5bb2b5a18">
        Behind the Screens: How Coordinated Inauthentic Behavior Shapes Online Narratives
      </a> written for CIB Mango Tree, on Medium
    </p>
    <p>
      <a href="https://medium.com/@cibmangotree/a-year-of-community-and-growth-at-cib-mango-tree-3c9a49383ceb">
        The First Year: The Volunteers Who Are Building CIB Mango Tree
      </a> written for CIB Mango Tree, on Medium
    </p>
  </div>

  <div class="sidebar">
  <h3>Tags</h3>
  <ul style="margin:0; padding-left:0;">
    {% assign extra_labels = 
      "Zeitgeist moments, Pitches, Articles, Analysis" | split: "," %}
    {% assign all_labels = "" | split: "," %}
    <!-- Step 1: Collect all labels from posts -->
    {% for note in site.notes %}
      {% if note.labels %}
        {% for label in note.labels %}
          {% assign label = label | strip %}
          {% unless all_labels contains label %}
            {% assign all_labels = all_labels | push: label %}
          {% endunless %}
        {% endfor %}
      {% endif %}
    {% endfor %}
    <!-- Step 2: Add extra labels if not already included -->
    {% for label in extra_labels %}
      {% assign label = label | strip %}
      {% unless all_labels contains label %}
        {% assign all_labels = all_labels | push: label %}
      {% endunless %}
    {% endfor %}
    <!-- Step 3: Loop over all labels -->
    {% for tag_name in all_labels %}
      {% assign posts_for_tag = site.notes | where_exp:"n","n.labels contains tag_name" %}
      <li style="margin-bottom:0.5em;">
        {{ tag_name }} ({{ posts_for_tag | size }})
        <span class="arrow">▼</span>
        <div class="tooltip" style="display:none; margin-top:0.25em; background:#e4e7ff; padding:0.5em; border-radius:4px; font-size:0.85em;">
          {% if posts_for_tag.size > 0 %}
            <ul style="padding-left:0; margin:0;">
              {% for n in posts_for_tag %}
                <li><a href="{{ n.url }}">{{ n.title }}</a></li>
              {% endfor %}
            </ul>
          {% else %}
            <em>No posts yet</em>
          {% endif %}
        </div>
      </li>
    {% endfor %}
  </ul>
</div>

<style>
.sidebar li:hover .tooltip {
  display: block;
}

.sidebar li .arrow {
  margin-left: 0.25em;
  font-size: 0.8em;
  color: #555;
}
</style>
