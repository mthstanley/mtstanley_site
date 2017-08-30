---
layout: page
title: Projects
permalink: /projects/
---
{% assign author = site.data.author %}
{% for project in author.projects %}
## [{{ project.name }}]({{ project.website }})
{% icon fa-github %} [Source]({{ project.source }})  

{{ project.description }}
{% endfor %}
