---
layout: layout-sidebar
name: Mega Menu
---

# Mega Menu

## Dependencies

This plugin is designed to work with NetCommunity Menu Parts, but can work with any &lt;ul /&gt; menu, provided the requirements are met, below.

## HTML

<p><strong>Add the following snippet anywhere on the page:</strong></p>

<pre class="line-numbers"><code class="language-markup">&lt;div 
    id="nav" data-bbi-app="MyApp" 
    data-bbi-action="megaMenu">
&lt;/div></code></pre>

<p><strong>Your menu should look similar to the example below, whether you write it manually, or generated by a plugin or part:</strong></p>
<pre class="line-numbers"><code class="language-markup">&lt;!-- Add the class "mega-menu" to the top-level UL. -->
&lt;ul class="mega-menu">

	&lt;!-- List items with submenus should have the class "parent". -->
	&lt;!-- The class "selected" should be used when the current menu item is being viewed. -->
	&lt;li class="parent selected">

		&lt;!-- The title attribute stores the mega menu dropdown's heading -->
		&lt;!-- The target attribute stores the selector of container to be loaded into the dropdown -->
		&lt;a class="selected" href="page.aspx" title="Title of Mega Menu Item" target="#mm-content-1">
			Parent Link
		&lt;/a>
		&lt;ul>
			&lt;li>&lt;a href="#">Subitem 1&lt;/a>&lt;/li>
			&lt;li>&lt;a href="#">...&lt;/a>&lt;/li>
			&lt;li>&lt;a href="#">...&lt;/a>&lt;/li>
		&lt;/ul>
	&lt;/li>
	&lt;li>&lt;a href="#">...&lt;/a>&lt;/li>
	&lt;li>&lt;a href="#">...&lt;/a>&lt;/li>
&lt;/ul>
</code></pre>

<p><strong>Create one DIV (like the one below) for each dropdown that requires a thumbnail or special content.</strong></p>
<pre class="line-numbers"><code class="language-markup">&lt;div class="mega-menu-content" id="mm-content-1">
	&lt;img src="thumbnail.jpg">
	&lt;p>Content here...&lt;/p>
	&lt;iframe>&lt;/iframe> <!-- Videos work too! -->
&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("accordion", function (app, bbi, $) {
	$(function () {
		bbi.require(["accordion-content"], function ($) {
			$('.accordion-menu').accordionContent();
		});
	});
});</code></pre>
