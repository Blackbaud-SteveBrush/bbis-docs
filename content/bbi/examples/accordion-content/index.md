---
layout: layout-sidebar
name: Accordion Content
---

# Accordion Content

## Dependencies

<ul>
	<li><a href="http://getbootstrap.com/javascript/#collapse" target="_blank">Bootstrap Collapse (JavaScript)</a></li>
	<li><a href="http://getbootstrap.com/javascript/#transitions" target="_blank">Bootstrap Transitions (JavaScript)</a></li>
</ul>
<p class="alert alert-info">If your site is already using the Bootstrap framework, you won't need to worry about the above dependencies.</p>

## HTML

<p><strong>First, create each content block in a separate <code>&lt;div&gt;</code>, each with a unique ID:</strong></p>
<p>The <code>DIV</code>s' class will let you add styles to all content blocks. The ID exists so your menu (next step) can interact with specific content.</p>
<pre class="line-numbers"><code class="language-markup">&lt;div class="accordion-content" id="accordion-1">
    &lt;p>HTML content here.&lt;/p>
&lt;/div>
&lt;div class="accordion-content" id="accordion-2">
    &lt;p>Another content block&lt;/p>
&lt;/div></code></pre>
<p><strong>Next, create a menu to interact with the content:</strong></p>
<p>The <code>UL</code>'s class is important. Also, make sure the anchors' target attributes reference the correct <code>DIV</code> ID's.</p>
<pre class="line-numbers"><code class="language-markup">&lt;ul class="accordion-menu">
	&lt;li>&lt;a target="#accordion-1">Content Title 1&lt;/a>&lt;/li>
	&lt;li>&lt;a target="#accordion-2">Content Title 2&lt;/a>&lt;/li>
&lt;/ul></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("accordion", function (app, bbi, $) {
	$(function () {
		bbi.require(["accordion-content"], function ($) {
			$('.accordion-menu').accordionContent();
		});
	});
});</code></pre>
