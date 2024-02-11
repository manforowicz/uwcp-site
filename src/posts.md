---
title: Posts - UW Competitive Programming
heading: Posts
---

Every once in a while, we'll post something here. Posts may include events, achievements, contest results, and how-to guides. However, for up-to-date announcements, please join our [Discord]({{ data.discord_link }}).

<ul>
{% for post in collections.post %}
    <li>
        <a href="{{ post.url }}"><b>{{ post.data.heading }}</b></a> - {{ post.data.author }}, {{ post.date | showDate }}
    </li>
{% endfor %}
</ul>
