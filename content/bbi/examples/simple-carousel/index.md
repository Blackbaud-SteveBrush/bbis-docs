---
layout: layout-sidebar
name: Simple Carousel
---

# Simple Carousel

## Dependencies

<p class="alert alert-info">
	This plugin only creates the HTML necessary for a Bootstrap 3 Carousel. The JavaScript and CSS provided by Bootstrap should already be on the page.
</p>

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;div id="media" data-bbi-app="MyApp" data-bbi-action="carousel">
	&lt;!--
	Each table represents one slide.
	No classes are required on the tables; the plugin simply associates:
	The first row is the image
	The second row is the title
	The third row is the caption
	-->
	&lt;table>
		&lt;tr>
			&lt;td>
				&lt;img src="slide-1.jpg" alt="">
			&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>
				&lt;h4>Title Here&lt;/h4>
			&lt;/td>
		&lt;/tr>
		&lt;tr>
			&lt;td>
				&lt;p>This is a caption.&lt;/p>
			&lt;/td>
		&lt;/tr>
	&lt;/table>
	&lt;!--
	Add as many tables as you want
	...
	...
	...
	-->
&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("carousel", function (app, bbi, $) {
	var settings;
	var defaults = {
        auto: true,
        pause: "hover",
        interval: 3000,
        transition: "slide",
        transitionSpeed: 600
    };
    return {
        init: function (options, element) {
            settings = $.extend(true, {}, defaults, options);
            if (bbi.isPageEditor() === false) {
	            bbi.require(["simple-carousel"], function ($) {
	                $(element).SimpleCarousel(settings);
	            });
            }
        }
    };
});</code></pre>
