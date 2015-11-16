---
layout: layout-sidebar
name: Off-canvas Menu
---

# Off-canvas Menu

## Dependencies

This plugin works best with Bootstrap 3.1.1 or greater, but will work decently on its own.

## HTML

<p><strong>You only need three things:</strong></p>
<ul>
	<li>The trigger: This can be an anchor or button. Give it a unique ID or class.</li>
	<li>The sidebar: This holds the content to be shown/hidden in the off-canvas sidebar.</li>
	<li>The wrapper: This is the DIV that holds the page content. It will slide to the left when the sidebar is active. (Preferably this DIV wraps your entire page.)</li>
</ul>
<pre class="line-numbers"><code class="language-markup">
&lt;div id="page">

	&lt;header>
	
		&lt;nav id="global-nav">
			&lt;a href="#" id="utility-toggle">Toggle Off-canvas Menu&lt;/a>
		&lt;/nav>
		
		&lt;nav id="utility">
			&lt;!-- This is your off-canvas sidebar. -->
			&lt;!-- Put anything you want in here. -->
		&lt;/nav>
		
	&lt;/header>

	&lt;!-- ... -->
	&lt;!-- ... -->

&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("OffCanvas", function (app, bbi, $) {
	return {
		init: function (options, element) {
			bbi.require(["off-canvas-menu"], function ($) {
				$.fn.OffCanvas({
					sidebarSelector: '#utility',
					triggerSelector: '#utility-toggle',
					wrapperSelector: '#page'
				});
			});
		}
	};
});</code></pre>
