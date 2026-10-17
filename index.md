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
  background: #e5eaf6;
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
  background: #e5eaf6;
  color: #3d52a0;
}
.sub-btn.active {
  background: #eef1f9;
  color: #3d52a0;
  border-color: #bbc5e4;
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
  color: #3d52a0;
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


/* ── Substack subscription ── */
.subscribe-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
  background: #faf7f2;
  border: 1px solid #eee7dc;
  border-radius: 8px;
  padding: 1.25em 1.5em;
  margin: 0 0 2em;
}

.subscribe-text {
  flex: 1;
  min-width: 200px;
}

.subscribe-text h2 {
  font-size: 1.05em;
  font-weight: 400;
  margin: 0 0 0.4em;
}

.subscribe-text p {
  color: #555;
  font-size: 0.88em;
  line-height: 1.6;
  margin: 0;
}

.subscribe-button {
  display: inline-block;
  background: #3d52a0;
  color: #fff !important;
  padding: 0.7em 1.15em;
  border-radius: 5px;
  font-size: 0.88em;
  font-weight: 600;
  white-space: nowrap;
  text-decoration: none !important;
}

.subscribe-button:hover {
  background: #2d3f80;
  text-decoration: none !important;
}

@media (max-width: 600px) {
  .subscribe-block {
    padding: 1.15em;
  }

  .subscribe-button {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}

/* ── Hidden state ── */
.filterable.hidden {
  display: none;
}
/* Comfortable homepage proportions across screen sizes. */
body {
  box-sizing: border-box;
  max-width: 1040px;
  padding: clamp(16px, 3vh, 28px) clamp(16px, 4vw, 48px);
  font-size: 16px;
  line-height: 1.65;
  overflow-wrap: break-word;
}
nav { margin: 0 0 20px; }
.garden-nav { margin-bottom: 20px; }
.intro-block {
  padding: clamp(18px, 3vw, 28px);
  margin-bottom: 20px;
  line-height: 1.7;
  font-size: 1em;
}
.intro-block p { margin-bottom: 16px; }
.process-links { padding-top: 0; margin-bottom: 0; gap: 6px; }
.process-links li a { font-size: 1em; }
.subscribe-block { padding: 16px 20px; margin-bottom: 24px; gap: 12px; }
.subscribe-text { min-width: 0; flex-basis: 260px; }
.subscribe-text h2 { font-size: 1em; line-height: 1.5; }
.tags-row { gap: 8px; margin-bottom: 16px; }
.tag-btn, .sub-btn { padding: 7px 12px; line-height: 1.5; }
.subtheme-row { padding-left: 0; margin-bottom: 20px; }
.reflections-list { margin: 0; }
.reflection-item { padding: 16px 0; gap: 6px; }
.reflection-item a.post-title { font-size: 1.05em; }
.reflection-desc { font-size: 0.94em; }
.reflection-meta { flex-wrap: wrap; gap: 6px 12px; font-size: 0.82em; }
@media (max-width: 600px) {
  .intro-block { padding: 18px; }
  .subscribe-block { padding: 16px; }
  .subscribe-text { flex-basis: 100%; }
  .subscribe-button { white-space: normal; }
  .garden-nav { margin-bottom: 16px; }
}
@media (min-width: 900px) {
  body { max-width: 960px; padding: 20px 32px; }
  nav, .garden-nav { margin-bottom: 16px; }
  .intro-block { padding: 18px 22px; line-height: 1.6; margin-bottom: 16px; }
  .intro-block p { margin-bottom: 12px; }
  .process-links { gap: 4px; }
  .subscribe-block { padding: 12px 16px; margin-bottom: 18px; }
  .subscribe-text h2 { font-size: 0.95em; }
  .reflection-item { padding: 12px 0; }
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
  <p style="padding-bottom: 0;">I'm interested in how technology shapes the way we work, learn, and organize ourselves. Inspired by the idea of a <a href="https://www.technologyreview.com/2020/09/03/1007716/digital-gardens-let-you-cultivate-your-own-little-bit-of-the-internet/">digital garden</a>, this site is where I explore those questions, with a focus on civic technology and the systems that help new ideas move into practice.</p>

  <p>I think of this as independent research: a self-directed practice of connecting ideas and documenting what I learn. Some writings are more developed than others (chicken sratch), and not everything leads to a clear answer. But that's part of what makes this process so fun!</p>

  <p>If you're new here, start with:</p>
  {% assign process_notes = site.notes | where: "process", true | sort: "order" | slice: 0,4 %}
  <ul class="process-links">
    {% for note in process_notes %}
      <li>
        {% if note.external_url %}
          <a href="{{ note.external_url }}" target="_blank" rel="noopener noreferrer">{{ note.title }}</a>
        {% else %}
          <a href="{{ site.baseurl }}{{ note.url }}">{{ note.title }}</a>
        {% endif %}
      </li>
    {% endfor %}
  </ul>
</div>


<!-- ── Substack subscription ── -->
<section class="subscribe-block" aria-label="Subscribe to my writing">
  <div class="subscribe-text">
    <h2>You can find all my writing below, but if you'd like to be notify when I write something new:</h2>
  </div>

  <a
    class="subscribe-button"
    href="https://substack.com/@helenyglover"
    target="_blank"
    rel="noopener noreferrer"
  >
    Subscribe on Substack 
  </a>
</section>


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