---
layout: page
permalink: /tags/
title: Tags
---


<div id="archives">
{% for category in site.tags %}
  <div class="archive-group">
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <div id="#{{ category_name | slugize }}"></div>
    <p></p>
    
    <h3 class="category-head"><span class="tag" style="color:#349dfc"><i class="fa fa-tag"></i>{{category_name}}</span></h3>
    <a name="{{ category_name | slugize }}"></a>
    {% for post in site.tags[category_name] %}
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
{% endfor %}
</div>