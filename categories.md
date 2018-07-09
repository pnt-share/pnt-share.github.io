---
layout: page
permalink: /categories/
title: Categories
---


<div id="archives">
{% for category in site.categories %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>

<h3 class="category-head">{{ category_name }}</h3>
<a name="{{ category_name | slugize }}"></a>
<div class="archive-container">
{% for post in site.categories[category_name] %}
<article class="archive-item">
<a href="{{ site.url }}{{ post.url }}">
  {% if post.featured-img %}
  <figure class="archive-post__thumb">
    <img src="{{site.url}}/assets/img/posts/{{post.featured-img}}_placehold.jpg" data-srcset="{{site.url}}/assets/img/posts/{{post.featured-img}}_thumb.jpg,{{site.url}}/assets/img/posts/{{post.featured-img}}_thumb@2x.jpg 2x" class="lazyload blur" alt="{{post.title}}"/>
    <noscript><img src="{{site.url}}/assets/img/posts/{{post.featured-img}}_thumb.jpg" alt="{{ post.title }}"></noscript></figure>
  {% else %}
    <figure class="archive-post__thumb">
      <div class="dark-bg"></div>
    </figure>
  {% endif %}
      <p>{{post.title}}</p>
      </a>
    </article>
    {% endfor %}
    </div>
  </div>
{% endfor %}
</div>