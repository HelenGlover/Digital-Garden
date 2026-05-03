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
  margin-bottom: 0.75em;
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

/* ── Subtheme filter row ── */
.subtheme-row {
  display: none;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5em;
  margin-bottom: 2em;
  padding-left: 0.25em;
}
.subtheme-row.visible {
  display: flex;
}
.subtheme-row-label {
  font-size: 0.75em;
  color: #bbb;
  margin-right: 0.25em;
}
.sub-btn {
  background: #f7f7fb;
  color: #777;
  padding: 3px 10px;
  border-radius: 20px;
  font-size: 0.75em;
  cursor: pointer;
  display: inline-block;
  border: 1px solid #e8e8f0;
  transition: background 0.15s, color 0.15s;
  user-select: none;
  font-style: italic;
}
.sub-btn:hover {
  background: #e4e6f8;
  color: #3d52a0;
}
.sub-btn.active {
  background: #eeedfe;
  color: #3c3489;
  border-color: #afa9ec;
  font-style: normal;
  font-weight: 500;
}

/* ── Reflections list ── */
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
.reflection-subtheme {
  color: #7f77dd;
  font-size: 0.9em;
  font-style: italic;
}

/* ── Other spaces ── */
.other-spaces {
  font-size: 0.88em;
  color: #000000;
  line-height: 1.7;
  padding-top: 1.5em;
}

/* ── Hidden state ── */
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
{% assign extra_labels = "Articles" | split: "," %}
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
    <span class="tag-btn"
      onclick="filterByTag('{{ tag_name | slugify }}', this)"
      data-tag="{{ tag_name | slugify }}">
      {{ tag_name }} ({{ posts_for_tag | size }})
    </span>
  {% endfor %}
</div>

<!-- ── Subtheme filter row (shown only when a category with subthemes is active) ── -->
<div class="subtheme-row" id="subtheme-row">
  <span class="subtheme-row-label">within this:</span>
  <span class="sub-btn active" onclick="filterBySub('all', this)">All</span>
  {% assign all_subthemes = "" | split: "," %}
  {% for note in site.notes %}
    {% if note.subtheme %}
      {% assign st = note.subtheme | strip %}
      {% unless all_subthemes contains st %}
        {% assign all_subthemes = all_subthemes | push: st %}
      {% endunless %}
    {% endif %}
  {% endfor %}
  {% for st in all_subthemes %}
    <span class="sub-btn"
      onclick="filterBySub('{{ st | slugify }}', this)"
      data-subtheme="{{ st | slugify }}"
      data-label="{% for note in site.notes %}{% if note.subtheme == st %}{% for l in note.labels %}{{ l | strip | slugify }} {% endfor %}{% break %}{% endif %}{% endfor %}">
      {{ st }}
    </span>
  {% endfor %}
</div>

<!-- ── Reflections list ── -->
<ul class="reflections-list">
  {% assign notes_by_display_date = site.notes | sort: "display_date" | reverse %}
  {% for note in notes_by_display_date %}
    {% unless note.process %}
      {% if note.labels contains 'Field Note' %}{% continue %}{% endif %}
      {% assign tag_slugs = "" %}
      {% for label in note.labels %}
        {% assign slug = label | strip | slugify %}
        {% assign tag_slugs = tag_slugs | append: slug | append: " " %}
      {% endfor %}
      <li class="reflection-item filterable"
        data-tags="{{ tag_slugs | strip }}"
        data-subtheme="{% if note.subtheme %}{{ note.subtheme | strip | slugify }}{% endif %}">
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
          {% for label in note.labels %}
            <span class="reflection-tag">{{ label }}</span>
          {% endfor %}
          {% if note.subtheme %}
            <span class="reflection-subtheme">· {{ note.subtheme }}</span>
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
var activeTag = 'all';
var activeSub = 'all';

var subthemesByTag = {};
document.querySelectorAll('.sub-btn[data-subtheme]').forEach(function(btn) {
  var labels = (btn.getAttribute('data-label') || '').trim().split(' ');
  labels.forEach(function(lbl) {
    if (!lbl) return;
    if (!subthemesByTag[lbl]) subthemesByTag[lbl] = [];
    subthemesByTag[lbl].push(btn.getAttribute('data-subtheme'));
  });
});

function filterByTag(tag, btn) {
  activeTag = tag;
  activeSub = 'all';

  document.querySelectorAll('.tag-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');

  var subRow = document.getElementById('subtheme-row');
  var subBtns = subRow.querySelectorAll('.sub-btn[data-subtheme]');
  var relevantSubs = subthemesByTag[tag] || [];

  var anyVisible = false;
  subBtns.forEach(function(b) {
    if (relevantSubs.indexOf(b.getAttribute('data-subtheme')) !== -1) {
      b.style.display = '';
      anyVisible = true;
    } else {
      b.style.display = 'none';
    }
  });

  if (tag !== 'all' && anyVisible) {
    subRow.classList.add('visible');
  } else {
    subRow.classList.remove('visible');
  }

  subRow.querySelectorAll('.sub-btn').forEach(function(b) { b.classList.remove('active'); });
  subRow.querySelector('.sub-btn[onclick*="\'all\'"]').classList.add('active');

  applyFilters();
}

function filterBySub(sub, btn) {
  activeSub = sub;
  document.querySelectorAll('.sub-btn').forEach(function(b) { b.classList.remove('active'); });
  btn.classList.add('active');
  applyFilters();
}

function applyFilters() {
  document.querySelectorAll('.filterable').forEach(function(item) {
    var tags = (item.getAttribute('data-tags') || '').trim().split(' ');
    var sub = item.getAttribute('data-subtheme') || '';

    var tagMatch = activeTag === 'all' || tags.indexOf(activeTag) !== -1;
    var subMatch = activeSub === 'all' || sub === activeSub;

    item.classList.toggle('hidden', !(tagMatch && subMatch));
  });
}
</script>