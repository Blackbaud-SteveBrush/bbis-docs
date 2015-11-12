---
layout: layout-sidebar
order: 2
name: Getting Started
description: Description here.
icon: fa fa-sitemap
---

# Getting Started

## Dependencies

jQuery 1.7.2 or higher is required - <a href="http://jquery.com/download/#using-jquery-with-a-cdn" target="_blank"><small class="glyphicon glyphicon-link"></small>&nbsp;jQuery CDN</a>
<pre><code class="language-markup">&lt;script src="//code.jquery.com/jquery-1.11.3.min.js">&lt;/script></code></pre>

___

## How to use

### Installing BBI on your site

Place the following code after the opening <code>&lt;body&gt;</code> tag:
<pre><code class="language-markup">&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
</code></pre>

### Make sure BBI is operating correctly

Next, open your browser console and check the log. If all is well, you should see:
<pre><code class="language-markup">[BBI.init] Options not found. Initialized with defaults.</code></pre>
This isn't an error, but simply a message explaining how BBI was initialized. If you do not see this message, double-check your code snippet and make sure it is placed correctly on the page.
