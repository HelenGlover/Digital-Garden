---
layout: page
id: home
permalink: /
title: Home
---

<style>
/* ── Base ── */
body {
  font-family: Arial, sans-serif;
  color: #1a1a1a;
  background: #fff;
}

hr {
  display: none !important;
  visibility: hidden !important;
  height: 0 !important;
  margin: 0 !important;
  border: none !important;
}

a {
  color: #3d52a0;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

/* ── Override Jekyll theme internal-link hover highlight ── */
a.internal-link,
a.post-title {
  background: none !important;
  color: #1a1a1a !important;
  text-decoration: none !important;
}
a.internal-link:hover,
a.post-title:hover {
  background: none !important;
  color: #3d52a0 !important;
  text-decoration: underline !important;
}

/* ── Nav ── */
.garden-nav {
  font-size: 0.82em;
  color: #888;
  margin-bottom: 2.5em;
}
.garden-nav a {
  color: #888;
  background: none !important;
}
.garden-nav a:hover {
  color: #1a1a1a;
  background: none !important;
}

/* ── Intro block ── */
.intro-block {
  background: #f4f5fb;
  border-radius: 8px;
  padding: 1.75em 2em 1.5em;
  margin-bottom: 1.75em;
  line-height: 1.85;
  font-size: 0.95em;
  color: #222;
}

.intro-block p {
  margin: 0 0 1.25em;
}

.intro-block p:last-child {
  margin-bottom: 0;
}

.process-links {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25em;
  padding-top: 1em;
  display: flex;
  flex-direction: column;
}

.process-links li a {
  font-size: 0.9em;
  color: #3d52a0;
  background: none !important;
}

.process-links li a::before {
  content: "→ ";
  color: #aaa;
}

/* ── Tags row ── */
.tags-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 2em;
}

.tags-row-label {
  font-size: 0.78em;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #999;
  font-weight: 600;
  margin-right: 0.25em;
}

.tag-btn {
  background: #f0f1f8;
  color: #555;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8em;
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e0e2f0;
  transition: background 0.15s, color 0.15s;
  user-select: none;
}

.tag-btn:hover {
  background: #e4e6f8;
  color: #3d52a0;
}

.tag-btn.active {
  background: #3d52a0;
  color: #fff;
  border-color: #3d52a0;
}

/* ── Section headers ── */
.section-header {
  font-size: 0.72em;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 700;
  color: #aaa;
  margin: 0 0 1.1em;
}

/* ── Field Notes ── */
.field-notes-list {
  list-style: none;
  padding: 0;
  margin: 0 0 2.5em;
}

.field-note-item {
  padding: 0.85em 0;
  border: none !important;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
}

.field-note-item a {
  font-size: 0.95em;
  font-weight: 500;
  color: #1a1a1a;
  display: inline;
  background: none !important;
  text-decoration: none !important;
}

.field-note-item a:hover {
  color: #3d52a0;
  background: none !important;
}

.field-note-desc {
  font-size: 0.85em;
  color: #666;
  line-height: 1.5;
}

.field-note-date {
  font-size: 0.75em;
  color: #888;
}

/* ── Ongoing Reflections ── */
.reflections-list {
  list-style: none;
  padding: 0;
}

.reflection-item {
  padding: 1em 0;
  border: none !important;
  display: flex;
  flex-direction: column;
  gap: 0.3em;
}

.reflection-item a.post-title {
  font-size: 1em;
  font-weight: 600;
  color: #1a1a1a;
  line-height: 1.4;
  display: inline;
  background: none !important;
  text-decoration: none !important;
}

.reflection-item a.post-title:hover {
  color: #3d52a0;
  background: none !important;
  text-decoration: underline !important;
}

.reflection-desc {
  font-size: 0.875em;
  color: #000000;
  line-height: 1.55;
}

.reflection-meta {
  font-size: 0.78em;
  color: #888;
  display: flex;
  align-items: center;
  gap: 0.75em;
}

.reflection-tag {
  background: #f4f5fb;
  color: #3d52a0;
  padding: 1px 8px;
  border-radius: 20px;
  font-size: 0.9em;
  border: 1px solid #e0e2f0;
}

/* ── Other spaces ── */
.other-spaces {
  font-size: 0.88em;
  color: #000000;
  line-height: 1.7;
  padding-top: 1.5em;
}

/* ── Hidden state for filtering ── */
.filterable.hidden {
  display: none;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("hr").forEach(function(hr) {
    hr.parentNode.removeChild(hr);
  });
});
</script>

<div class="garden-nav">
  <a href="https://helenyglover.com/">← Back to the main site</a>
</div>

<!-- ── Intro block ── -->
<div class="intro-block">
  <p style="padding-bottom: 0;">I conduct independent research, a self-directed pursuit of knowledge grounded in guided research questions. For context, start here:</p>
  {% assign process_notes = site.notes | where: "process", true | sort: "order" | slice: 0,4 %}
  <ul class="process-links">
    {% for note in process_notes %}
      <li>
        {% if note.external_url %}
          <a href="{{ note.external_url }}" target="_blank">{{ note.title }}</a>
        {% else %}
          <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
  <p>Inspired by the concept of a <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">digital garden</a>, this site is not a collection of fixed opinions but an evolving body of thought, aka the practice of learning in public. To stay true to that, I prioritize writing freely over polish. Of course, opinions change, and knowledge grows, so I will update entries accordingly.</p>
</div>

<!-- ── Tag filter buttons ── -->
{% assign extra_labels = "Articles" | split: "," %}
{% assign all_labels = "" | split: "," %}
{% for note in site.notes %}
  {% if note.process %}{% continue %}{% endif %}
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

<div class="tags-row">
  <span class="tags-row-label">Filter</span>
  <span class="tag-btn active" onclick="filterByTag('all', this)">All</span>
  {% for tag_name in all_labels %}
    {% assign posts_for_tag = site.notes | where_exp:"n","n.labels contains tag_name and n.process != true" %}
    <span class="tag-btn" onclick="filterByTag('{{ tag_name | slugify }}', this)">{{ tag_name }} ({{ posts_for_tag | size }})</span>
  {% endfor %}
</div>

<!-- ── Ongoing Reflections ── -->
<ul class="reflections-list">
  {% assign notes_by_display_date = site.notes | sort: "display_date" | reverse %}
  {% for note in notes_by_display_date %}
    {% unless note.process %}
      {% if note.labels contains 'Field Note' %}
        {% continue %}
      {% endif %}
      {% assign tag_slugs = "" %}
      {% for label in note.labels %}
        {% assign slug = label | strip | slugify %}
        {% assign tag_slugs = tag_slugs | append: slug | append: " " %}
      {% endfor %}
      <li class="reflection-item filterable" data-tags="{{ tag_slugs | strip }}">
        <a class="post-title"
          href="{% if note.external_url %}{{ note.external_url }}{% else %}{{ site.baseurl }}{{ note.url }}{% endif %}"
          {% if note.external_url %}target="_blank"{% endif %}>
          {{ note.title }}
        </a>
        {% if note.description %}
          <span class="reflection-desc">{{ note.description }}</span>
        {% endif %}
        <div class="reflection-meta">
          <span>{{ note.display_date | date: "%B %d, %Y" }}</span>
          {% if note.labels and note.labels.size > 0 %}
            {% for label in note.labels %}
              <span class="reflection-tag">{{ label }}</span>
            {% endfor %}
          {% endif %}
        </div>
      </li>
    {% endunless %}
  {% endfor %}
</ul>

<!-- ── In Other Spaces ── -->
<p class="other-spaces">
  I don't have an active Substack or Medium as both require a level of attention I'd rather put toward
  Civic Builders (coming soon) and CIB Mango Tree's research. Maybe one day.
</p>

<script>
function filterByTag(tag, btn) {
  document.querySelectorAll('.tag-btn').forEach(function(b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  document.querySelectorAll('.filterable').forEach(function(item) {
    if (tag === 'all') {
      item.classList.remove('hidden');
    } else {
      var tags = (item.getAttribute('data-tags') || '').split(' ');
      if (tags.indexOf(tag) !== -1) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    }
  });
}
</script>