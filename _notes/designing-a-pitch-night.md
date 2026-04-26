---
title: (In Progress) Designing A Pitch Night
labels: 
  - Civic Tech Reflections
description: Demostrating the work of civic tech out in the open
image: assets/civictechdc.jpg
display_date: 2026-04-26

process_log:
  - date: April 2025
    
    content: >
      I was reading <a href="https://www.sfcivictech.org/blog/2024-05-15-crafting-impactful-narratives/" target="_blank">
      SF Civic Tech Blog on Crafting Impactful Narratives
      </a> where they brought together three veterans in civic tech who shared their past work. It made me think: with the wave of federal layoffs in DC, what would an event in this series look like for former government employees to highlight the work they built while in gov? It could also serve as a space to recognize their public service.
---

<style>

  /* PROCESS LOG */
.process-log-container {
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e5e5e5;
}

.process-log-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

/* TIMELINE WRAPPER */
.process-timeline {
  position: relative;
  border-left: 2px solid #ddd;
  padding-left: 2rem; /* 🔑 creates space so dot doesn't overlap text */
}

/* EACH ITEM */
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

/* DOT FIXED ALIGNMENT */
.timeline-dot {
  position: absolute;
  left: -11px;  /* aligns to border-left line */
  top: 0.25rem;
  width: 10px;
  height: 10px;
  background: #222;
  border-radius: 50%;
}

/* DATE */
.timeline-date {
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #777;
  margin-bottom: 0.3rem;
  margin-left: 0; /* ensure no overlap shift */
}

/* TEXT */
.timeline-text {
  font-size: 1rem;
  line-height: 1.6;
  margin-left: 0;
}

/* TAGS */
.tags {
  margin-top: 2rem;
}

.tag-pill {
  display: inline-block;
  background: #f2f2f2;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  margin-right: 0.3rem;
  font-size: 0.85rem;
}
</style>

<article class="post">

  <!-- MAIN CONTENT -->
  <div class="post-content">
    <p>
      <i style="color: #122e85">This blog post is an evolving, in-progress reflection. The log at the bottom captures how my thinking develops over time. Once finalized, the “In Progress” will be removed from the title.</i>
      <br><br>
      Civic Tech DC's community has always been split between two groups: contributors who plug into existing projects at regular Project Nights, and builders who show up with ideas and pitches, but who the Project Nights are not designed for. This event is for the builders and reflects a broader conviction that civic tech isn't just nonprofits. It's startups, small businesses, govtech companies, and independent builders. This event (and hopefully series) works to expand the definition of what civic tech means. <br><br>
      <b>Format</b><br>
      3–4 pitches per event. Each presenter gets 7 minutes to pitch or demo, followed by 3 minutes of Q&A from the room. After all pitches, founders break off into informal breakout spaces and attendees move freely between them for open conversation and feedback. <br><br>
      <b>Who Should Pitch</b>
      <ul> 
      <li>Early-stage civic tech startups looking for feedback and visibility</li>
      <li>Builders with a working demo or prototype they want to pressure-test</li>
      <li>Small businesses or social enterprises with a civic angle</li>
      <li>Projects at the intersection of policy, public services, and technology</li>
      </ul>
    </p>
  </div>

  <!-- PROCESS LOG (BOTTOM ONLY) -->
  {% if page.process_log %}
  <div class="process-log-container">

    <div class="process-log-title">Process Log</div>

    <div class="process-timeline">

      {% for item in page.process_log %}
      <div class="timeline-item">

        <div class="timeline-dot"></div>

        <div class="timeline-date">
          {{ item.date }}
        </div>

        <div class="timeline-text">
          {{ item.content }}
        </div>

      </div>
      {% endfor %}

    </div>

  </div>
  {% endif %}


</article>