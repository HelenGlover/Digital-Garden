---
layout: page
id: home
permalink: /
title: Home
---

[Back to the main site](https://helenyglover.com/)

<style>
/* Flex layout: main content + sidebar */
.main-wrapper {
  display: flex;
  flex-wrap: nowrap;
  gap: 2em;
  align-items: flex-start;
}

/* Main content: ~2/3 width */
.main-content {
  flex: 2 1 0;
  min-width: 0;
}

/* Sidebar: ~1/3 width */
.sidebar {
  flex: 1 1 250px;
  max-width: 300px;
  background: #f5f7ff;
  padding: 1em;
  border-radius: 6px;
  font-size: 0.9em;
  line-height: 1.5;
}

/* Tag list */
.sidebar ul {
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.sidebar li {
  position: relative;
  margin-bottom: 0.5em;
}

/* Tooltip dropdown */
.sidebar li .tooltip {
  display: none;
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 0.25em;
  background: #e4e7ff;
  padding: 0.5em;
  border-radius: 4px;
  font-size: 0.85em;
  z-index: 10;
  width: max-content;
  min-width: 100%;
}

.sidebar li:hover .tooltip {
  display: block;
}

.sidebar li .arrow {
  margin-left: 0.25em;
  font-size: 0.8em;
  color: #555;
}

.sidebar li .tooltip a {
  text-decoration: none;
  color: #333;
}
.sidebar li .tooltip a:hover {
  text-decoration: underline;
}

/* Intro paragraph */
.intro-text {
  padding: 2em;
  background: #f5f7ff;
  border-radius: 4px;
  color: #000;
  line-height: 2.0;
  font-size: 0.95em;
  max-width: 100%;
}
</style>

<p class="intro-text">
  Inspired by the concept of a 
  <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">
    digital garden
  </a>, this site serves as an exploratory outlet for articulating my thoughts and learnings. It is also home to my
  <a href="https://helengarden.netlify.app/independent-research">
    independent research
  </a>.<br><br>
  I hope readers approach these entries not as fixed opinions but as evolving thoughts, or as part of a practice of learning in public. To stay authentic to that, I write freely rather than striving for perfect polish. Of course, opinions change, and knowledge grows, so I will update entries accordingly.
</p>

<div class="main-wrapper">

  <!-- Main content -->
  <div class="main-content">

    <h2>The Process</h2>
    <p style="color:#666; font-size:0.9em; margin-bottom:1em;">
      Read first, the framing and processes of my independent research
    </p>

    <ul style="list-style: none; padding-left: 0;">
      {% assign process_notes = site.notes | where: "process", true | sort: "order" | slice: 0,3 %}
      {% for note in process_notes %}
        <li style="margin-bottom: 1.1em;">
          <div class="note-title">
            {% if note.external_url %}
              <a class="internal-link" href="{{ note.external_url }}" target="_blank">{{ note.title }}</a>
            {% else %}
              <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
            {% endif %}
          </div>
          {% if note.description %}
            <div style="color:#777; font-size:0.9em;">{{ note.description }}</div>
          {% endif %}
        </li>
      {% endfor %}
    </ul>

    <h2>Ongoing Reflections</h2>
    <ul style="list-style: none; padding-left: 0;">
      {% assign notes_by_display_date = site.notes | sort: "display_date" | reverse %}
      {% for note in notes_by_display_date %}
        {% unless note.process %}
          <li style="margin-bottom: 1.1em;">
            <div class="note-title">
              {% if note.external_url %}
                <a class="internal-link" href="{{ note.external_url }}" target="_blank">{{ note.title }}</a>
              {% else %}
                <a class="internal-link" href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
              {% endif %}
            </div>

            {% if note.description %}
              <div class="note-description" style="color:#777; font-size:0.9em; margin-bottom:0.25em; max-width:60em;">
                {{ note.description }}
              </div>
            {% endif %}

            {%- comment -%}
            Only show display_date on front page
            {%- endcomment -%}
            <div class="note-meta" style="color:#666; font-size:0.8em; line-height:1.3;">
              <span>{{ note.display_date | date: "%B %d, %Y" }}</span>

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
        {% endunless %}
      {% endfor %}
    </ul>

    <h2>In Other Spaces:</h2>
    <p>
      I don't have an active Substack or Medium because I feel both require a certain amount of attention to updating that I divert instead on building up Civic Builders (coming soon) and 
        CIB Mango Tree's Research. Maybe one day.
    </p>

  </div>

  <!-- Sidebar -->
  <div class="sidebar">
    <h3>Tags</h3>
    <ul style="margin:0; padding-left:0;">
      {% assign extra_labels = "Zeitgeist Moments,Articles" | split: "," %}
      {% assign all_labels = "" | split: "," %}
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
      {% for label in extra_labels %}
        {% assign label = label | strip %}
        {% unless all_labels contains label %}
          {% assign all_labels = all_labels | push: label %}
        {% endunless %}
      {% endfor %}

      {% for tag_name in all_labels %}
        {% assign posts_for_tag = site.notes | where_exp:"n","n.labels contains tag_name" %}
        <li>
          {{ tag_name }} ({{ posts_for_tag | size }})
          <span class="arrow">▼</span>
          <div class="tooltip">
            {% if posts_for_tag.size > 0 %}
              <ul style="padding-left:0; margin:0;">
                {% for n in posts_for_tag %}
                  {% if n.external_url %}
                    <li><a href="{{ n.external_url }}" target="_blank">{{ n.title }}</a></li>
                  {% else %}
                    <li><a href="{{ n.url }}">{{ n.title }}</a></li>
                  {% endif %}
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

</div>