---
layout: page
id: home
permalink: /
title: Home
---

[Back to the main site](helenyglover.com)

<style>
/* Flex layout for intro + content + sidebar */
.intro {
  background: #f5f7ff;
  padding: 2em;
  border-radius: 4px;
  margin-bottom: 2em;
  line-height: 2;
  font-size: 0.95em;
}

.main-wrapper {
  display: flex;
  gap: 2em;
  align-items: flex-start;
}

/* Articles take 3/4 width */
.article-list {
  flex: 3;
}

/* Sidebar takes 1/4 width and grows with content */
.sidebar {
  flex: 1;
  background: #f5f7ff;
  padding: 1em;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.5;
  margin-top: 1em; /* makes it visually below the intro */
}

/* Sidebar label styling */
.sidebar h3 {
  margin-top: 0;
  margin-bottom: 0.5em;
}

.sidebar ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.sidebar li {
  margin-bottom: 0.5em;
  background: #fff;
  padding: 0.3em 0.5em;
  border-radius: 4px;
}

/* Notes list */
.note-title {
  font-size: 1em;
  font-weight: 200;
  margin-bottom: 0.15em;
}

.note-description {
  color: #777;
  font-size: 0.9em;
  margin-bottom: 0.25em;
}

.note-meta {
  color: #666;
  font-size: 0.8em;
  line-height: 1.3;
}
</style>
<!-- Intro paragraph -->
<div class="intro">
  Inspired by the concept of a 
  <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">
    digital garden
  </a>, 
  this site serves as an exploratory outlet for my thoughts. I view personal growth as fundamentally a process of reflection, and my goal for this space is to cultivate that growth by articulating what I read and learn. <br><br>
  I hope readers approach these entries not as fixed opinions but as evolving thoughts, a practice of learning in public. To stay authentic to that, I write freely versus being perfectly polished. When my opinions change or my knowledge deepens, I'll add updates accordingly.
  <br> Opinions are my own.
</div>
<!-- Main content + sidebar -->
<div class="main-wrapper">
  <!-- Articles -->
  <div class="article-list">
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
            <div class="note-description">
              {{ note.description }}
            </div>
          {% endif %}
          {% assign show_date = note.display_date | default: note.git_created_at | default: note.last_modified_at %}
          <div class="note-meta">
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
  <!-- Sidebar -->
  <div class="sidebar">
    <h3>Labels</h3>
    <ul>
      {% assign all_labels = "" | split: "" %}
      {% for note in site.notes %}
        {% if note.labels %}
          {% for label in note.labels %}
            {% assign all_labels = all_labels | push: label %}
          {% endfor %}
        {% endif %}
      {% endfor %}
      {% assign unique_labels = all_labels | uniq %}
      {% for label in unique_labels %}
        {% assign count = 0 %}
        {% for note in site.notes %}
          {% if note.labels contains label %}
            {% assign count = count | plus: 1 %}
          {% endif %}
        {% endfor %}
        <li>{{ label }} ({{ count }})</li>
      {% endfor %}
    </ul>
  </div>
</div>
