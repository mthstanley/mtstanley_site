---
layout: resume
title: Resume
permalink: /resume/
---
{% assign author = site.data.author %}

# {{ author.name }} 
{: .name}
## {{ author.description }}
{{ author.location.address }} | {{ author.location. city }}, {{ author.location.postal_code }}  
{{ author.phone }} | [{{ author.email }}](mailto:{{ author.email }})  
\[ [pdf]({{ author.resume_pdf }}) \]  

### Education
{% for education in author.educations %}
#### [{{ education.institution }}]({{ education.website }})
**{{ education.degree }}**  
{{ education.start_date | date: "%b %d, %Y" }} - {{ education.end_date | date: "%b %d, %Y" }}

Major
: {{ education.major }}

Minor
: {{ education.minor }}

GPA
: {{ education.gpa }}

Honors
: {{ education.achievements | join: ', '}}  
{% endfor %}

### Skills
{% assign skills_by_category = author.skills | group_by:"category" %}
{% for skill_category in skills_by_category %}
{% assign skill_names = skill_category.items | map: "name" %}
{{ skill_category.name }}
: {{ skill_names | join: ', ' }}
{% endfor %}

### Experience
{% for experience in author.experiences %}
#### **{{ experience.position}}**  
**[{{ experience.company }}]({{ experience.website }})**  
{{ experience.start_date | date: "%b %d, %Y" }} - {{ experience.end_date | date: "%b %d, %Y" }}  

{% for highlight in experience.highlights %}
- {{ highlight }}
{% endfor %}
{% endfor %}
