---
layout: layout-sidebar
name: Parse RSS
---

# Parse RSS

## Dependencies

<p class="alert alert-info">
	This asset is designed to work with BBNC RSS feeds - either blog or event, but should (and has) worked with many external RSS feeds.
</p>
<p><a class="btn btn-sm btn-primary" href="assets/#asset-parse-rss">View a list of all available options&nbsp;→</a></p>

## JavaScript

<ul class="nav nav-tabs">
	<li class="active"><a href="#common-parse-rss-simple" data-toggle="tab">Simple</a></li>
	<li><a href="#common-parse-rss-advanced" data-toggle="tab">Advanced</a></li>
</ul>
<div class="tab-content">
	<div class="tab-pane active" id="common-parse-rss-simple">
		<p><strong>Data attributes:</strong></p>
		<pre class="line-numbers"><code class="language-markup">&lt;div 
	data-bbi-app="MyApp" 
	data-bbi-action="initEventsFeed" 
	data-feed="//domain.org/feed.rss?id=1">
	Loading Upcoming Events...
&lt;/div></code></pre>
		<p><strong>Add the following action to your BBI Application JavaScript file:</strong></p>
		<pre class="line-numbers"><code class="language-javascript">app.action('initEventsFeed', function(app, bbi, $) {
	return {
		init: function(options, element) {
			if (bbi.isPageEditor() === false) {
				bbi.require(["parse-rss"], function ($) {
					$(element).parseRSS({
						ajax: {
							url: options.feed
						}
					});
				});
			}
		}
	};
});</code></pre>
</div>

<div class="tab-pane" id="common-parse-rss-advanced">
	<p>This is one of the most complex uses of this plugin.  A few of the advanced features it's taking advantage of:</p>
	<ul>
		<li>Reading non-BBNC RSS feed</li>
		<li>Custom error alert</li>
		<li>Parsing custom (namespaced) XML nodes</li>
		<li>Using the beforeUpdate callback to group events by date.</li>
	</ul>
	<p><strong>Data attributes:</strong></p>
	<pre class="line-numbers"><code class="language-markup">&lt;div 
	bbi-app="MyApp" 
	data-bbi-action="initEventsFeed" 
	data-feed="//domain.org/Calendar/RSSFeeds.aspx?data=555" 
	data-limit="4" 
	data-limit-inner="3">
	Loading Upcoming Events...
&lt;/div></code></pre>
	<p><strong>Add the following action to your BBI Application JavaScript file:</strong></p>
	<pre class="line-numbers"><code class="language-javascript">app.action('initEventsFeed', function (app, bbi, $) {
    var container;
    return {
    	init: function(options, element) {
    
    		// Clear our loading message if page editor
    		if (bbi.isPageEditor()) {
    			$(element).html("");
    		}
    
    		else {
    			bbi.require(["parse-rss"], function ($) {
    				container.parseRSS({
    
    					debug: true,
    
    					/&#42; Requests all events now in case they're not in chronological order &#42;/
    					eventsToDisplay: -1,
    					ajax: {
    						url: options.feed,
                            error: function (a, b, c) {
                            	alert('Custom error alert.');
                            }
    					},
    					xmlMap: {
    						location: "mc&#92;&#92;:location",
    						locationUrl: "mc&#92;&#92;:locationurl",
    						eventDate: "mc&#92;&#92;:eventdate",
    						allDayEvent: "mc&#92;&#92;:alldayevent",
    						timeStart: "mc&#92;&#92;:startTime",
    						timeEnd: "mc&#92;&#92;:endTime"
    					},
    					template: &#91;
    						"&lt;div class=&#92;"row&#92;">",
    						"	&#123;&#123;# each events }}",
    						"		&lt;div class=&#92;"col-sm-6 col-md-3&#92;">",
    						"			&lt;div class=&#92;"event-wrapper&#92;">",
    						"   			&lt;ul class=&#92;"date&#92;">",
    						"       			&lt;li class=&#92;"day-of-year&#92;">&#123;&#123; formatDT &#64;key &#92;"DD&#92;" }}&lt;/li>",
    						"       			&lt;li class=&#92;"day-of-week&#92;">&#123;&#123; formatDT &#64;key &#92;"dddd&#92;" }}&lt;/li>",
    						"       			&lt;li class=&#92;"month&#92;">&#123;&#123; formatDT &#64;key &#92;"MMMM&#92;" }}&lt;/li>",
    						"   			&lt;/ul>",
    						"   			&lt;ul class=&#92;"events&#92;">",
    						"       			&#123;&#123;# each event }}",
    						"           			&lt;li>",
    						"							&lt;ul>",
    						"								&lt;li class=&#92;"event-title&#92;">&#123;&#123;{ title }}}&lt;/li>",
    						"								&lt;li class=&#92;"event-location&#92;">&#123;&#123;{ location }}}&lt;/li>",
    						"								&lt;li class=&#92;"event-time&#92;">",
    						"									&#123;&#123;# if allDayEvent }}",
    						"										All Day",
    						"									&#123;&#123; else }}",
    						"										&#123;&#123;{ timeStart }}}&lt;/li>",
    						"									&#123;&#123;/ if }}",
    						"								&lt;/li>",
    						"							&lt;/ul>",
    						"						&lt;/li>",
    						"       			&#123;&#123;/ each }}",
    						"   			&lt;/ul>",
    						"			&lt;/div>",
    						"		&lt;/div>",
    						"	&#123;&#123;/ each }}",
    						"&lt;/div>"
    					].join(""),
    
    					/*
    					Group events by date
    					*/
    					beforeUpdate: function (events) {
    
    						var r = events,
    							dates = {},
    							key = "",
    							limitInner = -1;
    
    						// See if we're limiting the inner
    						if (typeof options.limitInner !== "undefined") {
    							limitInner = parseInt(options.limitInner);
    						}
    
    						for (var i = 0, j = events.length; i &lt; j; i++) {
    
    							// Read the as the key
    							key = events[i].description.dateTimeMoment.format("MM/DD/YYYY");
    
    							// Catch the first event for this date
    							if (typeof dates[key] === "undefined") {
    								dates[key] = {
    									event: []
    								};
    							}
    
    							// Convert the "allDayEvent" tag to native boolean
    							if (typeof events[i].allDayEvent === "string") {
    								events[i].allDayEvent = events[i].allDayEvent.toLowerCase() === "true";
    							}
    
    							// Add our event to the correct date
    							if (limitInner === -1 || dates[key].event.length &lt; limitInner) {
    								dates[key].event.push(events[i]);
    							}
    						}
    
    						// Limit the size of the object
    						if (typeof options.limit !== "undefined") {
    							var limit = parseInt(options.limit),
    								count = 0;
    							r = {};
    							for (var key in dates) {
    								if (count++ &lt; limit) {
    									r[key] = dates[key];
    								}
    							}
    						}
    
    						return r;
    					}
    				});
    			});
    		}
    	}
    };
});</code></pre>
		<p><strong>Result:</strong></p>
		<p><img src="<?php echo $url_root; ?>/assets/img/parse-rss-advanced.png" alt="Advanced Parse RSS Example" class="img-responsive" /></p>
	</div>
</div>
