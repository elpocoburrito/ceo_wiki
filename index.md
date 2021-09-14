---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---
<h1>Frequently asked questions:</h1>
{% for faq in site.faqs %}
  <h2><a href="{{ faq.url }}">- {{ faq.question }}</a></h2>
{% endfor %}

<h1>Useful informations:</h1>
{% for info in site.info %}
  <h2><a href="{{ info.url }}">- {{ info.title }}</a></h2>
{% endfor %}