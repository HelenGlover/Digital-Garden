---
title: Designing a Pitch Event
labels: 
  - Civic Tech Reflections
description: Pitches on what does it actually look like when technology strengthens civic engagement?
image: assets/pitchnight000.jpg
display_date: 2026-06-19

# process_log:
#   - date: April 2026
    
#     content: >
#       I was reading <a href="https://www.sfcivictech.org/blog/2024-05-15-crafting-impactful-narratives/" target="_blank">
#       SF Civic Tech Blog on Crafting Impactful Narratives
#       </a> where they brought together three veterans in civic tech who shared their past work. It made me think: with the wave of federal layoffs in DC, what would an event in this series look like for former government employees to highlight the work they built while in gov? It could also serve as a space to recognize their public service.
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

Civic Tech DC's community has always been split between two groups: contributors who plug into existing projects at regular Project Nights, and builders who show up with ideas and pitches, but who the Project Nights are not designed for. Those builders need a higher-visibility format where they can get direct feedback from the audience and find out who else in the community might want to help. Pitch nights are useful for this, so we created one to support builders and entrepreneurs. It is also a important addition to the variety of events Civic Tech DC runs, reflecting a broader conviction that civic tech can be startups, small businesses, govtech companies, and independent builders. Hopefully this event (and series) works to expands this definition.

<b>Update:</b> We launched the event! On June 17, 2026, Civic Tech DC and Learning Journey AI co-hosted the first Civic Builders: Pitch & Demo Night. Six builders pitched, 159 people RSVP'd, and the night closed with open breakout conversations. **More on how it went can be found on the [Matter of Public](https://publicfutures.netlify.app/civicbuildersnight).**

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="{{ '/assets/pitchnight01.png' | relative_url }}" style="flex: 1 1 250px; max-width: 30%; height: auto;">
  <img src="{{ '/assets/pitchnight2.jpg' | relative_url }}" style="flex: 1 1 250px; max-width: 30%; height: auto;">
  <img src="{{ '/assets/pitchnight3.jpg' | relative_url }}" style="flex: 1 1 250px; max-width: 30%; height: auto;">
</div>

<!--
#### Format
 
Six pitches per event. Each presenter gets 7 minutes to pitch or demo, followed by 3 minutes of Q&A from the room. After all pitches, founders break off into informal breakout spaces and attendees move freely between them for open conversation and feedback.
 
####  Who Should Pitch
- Early-stage civic tech startups looking for feedback and visibility
- Builders with a working demo or prototype they want to pressure-test
- Small businesses or social enterprises with a civic angle
- Projects at the intersection of policy, public services, and technology
Pitches should be problem-first. Presenters are encouraged to lead with the public problem they're solving before getting into the product.
 
####  Benefit to the Builders
- Practice your public-facing narrative. Pitching to a civic audience is different from pitching to VCs, and the feedback is more useful if your product serves the public
- Access the Civic Tech DC network
- Find people who want to join your startup / has connections
  
#### Benefit to the Audience
- See what's being built in the civic tech space right now
- For policy folks, see the products being built for problems you work on every day
- Give feedback that actually shapes what gets built
- Understand what a broad definition of civic tech looks like
  
####  Long-Term Goals
- Deepen governance representation in the room over time to strengthen the gap between the builder and policy communities
- Explore partnerships with other entrepreneurial meetups
- Explore partnerships with local government innovation offices, civic accelerators, and policy organizations to co-host or co-promote future events 

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

  </div> -->