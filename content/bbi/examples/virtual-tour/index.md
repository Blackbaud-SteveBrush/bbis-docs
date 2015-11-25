---
layout: layout-sidebar
name: Virtual Tour
---

# Virtual Tour

## Dependencies

<p>
	If you decide to use a version of jQuery above 1.9, you'll need to include the Migrate plugin for jQuery tools to work correctly. You can include the plugin in your layouts via a standard script tag (directly after your call to jQuery); <a href="https://github.com/jquery/jquery-migrate/">download it here</a>.
</p>

## HTML

<strong>Data attributes:</strong>
<pre class="line-numbers"><code class="language-markup">&lt;div id="wrapTour" data-bbi-app="MyApp" data-bbi-action="virtualTour">&lt;/div></code></pre>

<strong>Include this in a Formatted Text and Images part:</strong>
<pre class="line-numbers"><code class="language-markup">&lt;table id="virtualTourDataTable" class="formattedTable">
	&lt;tbody>
		&lt;tr>
			&lt;th>Location Title&lt;/th>
			&lt;th>Short Description&lt;/th>
			&lt;th>Thumbnail&lt;/th>
			&lt;th>Link&lt;/th>
			&lt;th>X Coord&lt;/th>
			&lt;th>Y Coord&lt;/th>
		&lt;/tr>
		&lt;tr>
			&lt;td>&lt;strong>Alfond Athletics Center&lt;/strong>&lt;/td>
			&lt;td>A state-of-the-art facility, The Harold and Ted Alfond Athletics Center was constructed in 2001...&lt;/td>
			&lt;td>&lt;img height="400" src="images/zones/zone-1.jpg" width="600" />&lt;/td>
			&lt;td>popup.html&lt;/td>
			&lt;td>&nbsp;775&lt;/td>
			&lt;td>&nbsp;60&lt;/td>
		&lt;/tr>
		...
		...
		...
	&lt;/tbody>
&lt;/table></code></pre>

<p><strong>Code for each popup needs to live on their own page, in a blank template:</strong></p>
<pre class="line-numbers"><code class="language-markup">&lt;!-- POPUP TEXT -->
&lt;h1>Sample Popup&lt;/h1>
&lt;p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pharetra molestie massa. Suspendisse vitae mi ligula. Donec ornare pretium enim. Aliquam et elit nunc, nec ultrices urna. Maecenas ac lacus ut leo consequat tristique at non ante. Maecenas aliquam placerat velit vitae viverra. Vestibulum lacinia, sapien et vulputate malesuada, metus orci blandit enim, sed rutrum diam nibh eget turpis. Sed gravida magna quis odio tempor sollicitudin. In egestas gravida ipsum, ut pharetra diam luctus in. &lt;/p>
&lt;p>Integer porta turpis eleifend neque rutrum aliquam. Curabitur nisl mauris, commodo a mattis sed, cursus sed mauris. In at nisl at lectus pretium luctus sed et eros. Donec a turpis quam. Fusce iaculis, mauris sit amet tempor auctor, lorem leo dignissim leo, at varius mi ante vitae sapien. Integer turpis nulla, consequat sit amet ornare a, elementum ac mauris. Vivamus ac commodo nunc. Proin luctus, neque eu ultricies pharetra, eros dui ornare libero, et sagittis justo leo ut dui. Donec nisl magna, pretium non interdum vel, consectetur ac sapien. Ut a hendrerit ipsum. Duis dignissim iaculis lectus ac vulputate. Integer placerat urna at purus viverra porta. Cras purus tortor, molestie eget interdum quis, scelerisque non augue. Vivamus dignissim ipsum placerat ligula consequat sodales. Ut rutrum luctus eros non scelerisque. Pellentesque hendrerit vehicula commodo. &lt;/p>


&lt;!-- POPUP SLIDE 1 (IMAGE)... -->
&lt;table class="slide" border="0" cellspacing="3" cellpadding="3">
&lt;tbody>
	&lt;tr>
		&lt;td class="image">&lt;img src="images/zones/popup-thumbnail-1.jpg" />&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td class="caption">Bearce Hall Lobby&lt;/td>
	&lt;/tr>
&lt;/tbody>
&lt;/table>


&lt;!-- POPUP SLIDE 2 (VIDEO)... -->
&lt;table class="slide" border="0" cellspacing="3" cellpadding="3">
&lt;tbody>
	&lt;tr>
		&lt;td class="image">
			&lt;img src="images/zones/popup-thumbnail-0.jpg" alt="" />
		&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td class="caption">http://www.youtube.com/watch?v=dePMU8R131s&lt;/td>
	&lt;/tr>
&lt;/tbody>
&lt;/table>


&lt;!-- POPUP SLIDE 3 (IMAGE)... -->
&lt;table class="slide" border="0" cellspacing="3" cellpadding="3">
&lt;tbody>
	&lt;tr>
		&lt;td class="image">&lt;img src="images/zones/popup-thumbnail-2.jpg" />&lt;/td>
	&lt;/tr>
	&lt;tr>
		&lt;td class="caption">Bearce Hall&lt;/td>
	&lt;/tr>
&lt;/tbody>
&lt;/table></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("virtualTour", function (app, bbi, $) {
	window.isEditView = bbi.isPageEditor(); // virtual tour plugin references a global variable for the edit view
	var settings;
	var defaults = {
		mapImage: 'assets/vtour/images/map.jpg',
		width: 920,
		height: 570,
		overlayWidth: 840,
		overlayHeight: 460,
		blankGIF: 'assets/vtour/images/blank.gif',
		dataTableSelector: '#virtualTourDataTable',
		zoneButtonType: 'links',
		slideSelector: '.slide',
		SlideSetOptions: {
			display: 'album',
			tabs: 'thumb',
			tabParams: {
				effect: "fade",
				fadeOutSpeed: "slow",
				rotate: false
			},
			slideshowParams: {
				autoplay: false,
				clickable: false
			},
			tabNavPos: 'none',
			tabQty: 'auto'
		}
	};
	return {
	    init: function (options, element) {
	        settings = $.extend(true, {}, defaults, options);
	        if (bbi.isPageEditor() === false) {
		        bbi.require(["bbnc-virtual-tour"], function ($) {
		        	$(element).virtualTour(settings);
		        });
	        }
	    }
	};
});</code></pre>
