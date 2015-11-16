---
layout: layout-sidebar
name: YouTube Gallery
---

# YouTube Gallery

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;!-- SHOW RECENT UPLOADS -->
&lt;div data-bbi-app="MyApp" data-bbi-action="YouTubeGallery" data-channel-id="UCXneDVRq1lLde3oREF_cFyA">Loading videos...&lt;/div>

&lt;!-- SHOW A PLAYLIST -->
&lt;div data-bbi-app="MyApp" data-bbi-action="YouTubeGallery" data-playlist-id="PLS6aqv-GslqKONEZnpUOSmWl81A6bOxHD">Loading videos...&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("YouTubeGallery", function (app, bbi, $) {
	var settings;
	var defaults = {
		username: '[insert username here]',
		apiKey: '[YOUR GOOGLE API KEY]',
        hideAuthor: true,
        quantity: 12
	};
	return {
		init: function (options, element) {
			settings = $.extend(true, {}, defaults, options);
			if (bbi.isPageEditor() === false) {
				bbi.require(["youtube-gallery"], function ($) {
					$(element).YouTubeGallery(settings);
				});
			}
		}
	};
});</code></pre>
