---
layout: page
title: Projects
permalink: /projects/
---
{% assign author = site.data.author %}
{% for project in author.projects %}
## [{{ project.name }}]({{ project.website }})
{{ project.description }}
{% endfor %}
