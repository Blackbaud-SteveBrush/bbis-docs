---
layout: layout-sidebar
name: Flickr Gallery
---

# Flickr Gallery and Feed

## Dependencies

<ul>
	<li><a href="http://getbootstrap.com/javascript/#collapse" target="_blank">Bootstrap Collapse (JavaScript)</a></li>
	<li><a href="http://getbootstrap.com/javascript/#transitions" target="_blank">Bootstrap Transitions (JavaScript)</a></li>
</ul>
<p class="alert alert-info">If your site is already using the Bootstrap framework, you won't need to worry about the above dependencies.</p>

## HTML

<p>Insert the following HTML where you want the <strong>gallery preview</strong> to appear (useful for home pages, or sidebars).</p>
<pre class="line-numbers"><code class="language-markup">&lt;div class="flickr-pane" data-collection-id="555555555555" data-display="preview" data-bbi-app="MyApp" data-bbi-action="flickrGallery">
    &lt;div class="flickr-loader">
    	Loading...
    &lt;/div>
&lt;/div></code></pre>
<p>Insert the following HTML where you want the <strong>complete gallery</strong> to appear.</p>
<pre class="line-numbers"><code class="language-markup">&lt;div class="flickr-pane" data-collection-id="555555555555" data-bbi-app="MyApp" data-bbi-action="flickrGallery">
    &lt;div class="flickr-loader">
    	Loading...
    &lt;/div>
&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("flickrGallery", function(app, bbi, $) {
	var settings;
	var defaults = {
        collectionId: "55555555555555555",
        userId: "555555555@N05",
        apiKey: "55555555555555555"
    };
    return {
        init: function (options, element) {
            settings = $.extend(true, {}, defaults, options);
            if (!bbi.isPageEditor()) {
                bbi.require(["flickr-gallery"], function ($) {
                    $(element).FlickrGallery(settings);
                });
            }
        }
    }
});</code></pre>
