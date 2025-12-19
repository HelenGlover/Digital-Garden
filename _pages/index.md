<h2>Latest notes</h2>

<ul style="list-style: none; padding-left: 0;">
  {% assign notes_by_date = site.notes | sort: "last_modified_at" | reverse %}
  {% for note in notes_by_date %}
    <li style="margin-bottom: 1em;">
      {{ note.last_modified_at | date: "%Y.%m.%d" }}
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
