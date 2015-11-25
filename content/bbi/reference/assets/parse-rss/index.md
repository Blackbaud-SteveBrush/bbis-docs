---
name: Parse RSS
showInNav: false
---

# Parse RSS `parse-rss`

## Dependencies
<ul>
	<li>jQuery 1.7.2 or greater</li>
	<li>Handlebars.js</li>
</ul>

## How to use

<pre><code class="language-javascript">BBI.require(['parse-rss'], function () {
    var options = {};
    $(element).parseRSS(options);
});</code></pre>

## Options
					<ul class="list-group">
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>afterUpdate</code>
							</h5>
							<p>
								<span class="text-muted">Type: function</span><br>
								Callback function after DOM has been updated, in case you need events to perform another action.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>ajax</code>
							</h5>
							<p>
								<span class="text-muted">Type: Object</span><br>
								<span class="text-muted">Default:</span>
<pre class="line-numbers"><code class="language-javascript">{
	type: 'GET',
	contentType: 'application/rss+xml',
	dataType: 'xml'
}</code></pre>
								Underlying ajax object that's passed to jQuery's <code>$.ajax()</code> method.

							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>beforeUpdate</code>
							</h5>
							<p>
								<span class="text-muted">Type: function</span><br>
								Callback function which allows you to make modifications to the events before updating the DOM.  Only parameter to callback is the events array.  Return an array with any changes made.  See <a href="common/#common-parse-rss">advanced example</a>.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>cacheCrossDomain</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: true</span><br>
								If true, appends a unique string to the Google JSAPI service in order to circumvent their caching mechanisms.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>cacheEvents</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: true</span><br>
								Cache the events using sessvars.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>cacheKey</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: [current url]</span><br>
								If cacheEvents is true, this is the name of the root object uses in sessvars.  If the same feed is being requested on multiple pages (different URLs), I suggest passing in a key here.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>dateTimeParseFormat</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: "dd, DD MMM YYYY HH:mm:ss Z"</span><br>
								<a href="http://momentjs.com/docs/#/parsing/string-format/" target="_blank">Moment format for parsing</a> the DateTime in the Event Description (BBNC).
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>dateTimeParseFormatRange</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: ""</span><br>
								<a href="http://momentjs.com/docs/#/parsing/string-format/" target="_blank">Moment format for parsing</a> the DateTime in the Event Description.  Use this to support a DateTime range, for example: Sat, 28 Apr, 2012 1:30 PM - 3:00 PM.  	This only works as a "hack" in moment where specifying the time again in the parse function chooses the last time.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>debug</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: false</span><br>
								Display log messages in the console.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>descriptionMap</code>
							</h5>
							<p>
								<span class="text-muted">Type: Object</span><br>
								<span class="text-muted">Default: </span><br>
<pre class="line-numbers"><code class="language-javascript">{
	"dateTime": {
		key: "Event Date(s) / Time: ",
		truncate: -1,
		text: ""
	},
	"details": {
		key: "Details: ",
		truncate: -1,
		text: ""
	},
	"location": {
		key: "Location: ",
		truncate: -1,
		text: ""
	},
	"fees": {
		key: "Fees: ",
		truncate: -1,
		text: ""
	},
	"contact": {
		key: "Contact: ",
		truncate: -1,
		text: ""
	},
	"category": {
		key: "Category: ",
		truncate: -1,
		text: ""
	},
	"updatedBy": {
		key: "Updated by: ",
		truncate: -1,
		text: ""
	}
}</code></pre>
								Object used to parse the description field.  BBNC event RSS sends over lots of conctatenated information in this field. Each property supports the key property, the length to truncate the information to, and any hard-coded text to be used instead.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>errorMessages</code>
							</h5>
							<p>
								<span class="text-muted">Type: Object</span><br>
								<span class="text-muted">Default: </span><br>
	<pre class="line-numbers"><code class="language-javascript">{
	  url: "Please provide a valid url.",
	  ajax: "Error requesting feed."
	}</code></pre>
								Error messages presented to the end user through the plugin.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>eventsToDisplay</code>
							</h5>
							<p>
								<span class="text-muted">Type: Integer, String</span><br>
								<span class="text-muted">Default: 10</span><br>
								Number of events to display.  Use -1 or "" to display all events.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>hideCanceled</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: true</span><br>
								In BBNC, "canceled" events contain " - Canceled" in the title.  If the latest entry for an event contains this keyword, this property will cause the event to be ignored.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>hideUpdated</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: true</span><br>
								This property is useful when compensating for BBNC's unique RSS feeds.  Event time an event is updated, a new entry in the RSS feed is published.  Using an event's "ceid" (in BBNC), an event's date (via the BBNC description item), or the event's title, and educated guess is made to determine if this event is simply an updated duplicate event.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>hidePast</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: true</span><br>
								Ignores any past events.  For Upcoming Events, leaving this true makes sense; however, for Blogs/News it should be set to false.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>htmlToRemove</code>
							</h5>
							<p>
								<span class="text-muted">Type: array</span><br>
								<span class="text-muted">Default: </span><br>
<pre class="line-numbers"><code class="language-javascript">[
  '&lt;p&gt;&amp;nbsp;&lt;/p&gt;',
  '&lt;p&gt;&lt;/p&gt;',
  '&lt;br /&gt;&lt;br /&gt;',
  '&lt;div&gt;&lt;/div&gt;'
]</code></pre>
								HTML to completely remove from the description field.  BBNC is notorious for adding random HTML.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>isCrossDomain</code>
							</h5>
							<p>
								<span class="text-muted">Type: boolean</span><br>
								<span class="text-muted">Default: false</span><br>
								If true, uses the Google JSAPI service to request the feeds.  Developer note, this could probably be rewritten to use the API/Services/Proxy.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>pubDateParseFormat</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: "dd, DD MMM YYYY HH:mm:ss Z"</span><br>
								<a href="http://momentjs.com/docs/#/parsing/string-format/" target="_blank">Moment format for parsing</a> the DateTime in the pubDate field.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>range</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: ""</span><br>
								Range of dates to display (overrides hidePast) in the following format: mm/dd/yyyy-mm/dd/yyyy.  This can be extremely useful when specifying sports seasons, for example.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>sanitizeDetailsAttributes</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: "class style"</span><br>
								For the text or html (BBNC) in the description field, these space separated attributes are removed from the selectors listed above.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>sanitizeDetailsSelector</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: "p,span,div,strong"</span><br>
								For the text or html (BBNC) in the description field, this selector is used in conjunction with the property below.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>sanitizeImageAttributes</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: "class style"</span><br>
								For any images contained in the description field (BBNC), these space separated attributes will be removed.  Height and width are also useful here.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>sort</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: ""</span><br>
								Change from the default sorting method (none) to "asc" or "desc"
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>template</code>
							</h5>
							<p>
								<span class="text-muted">Type: String</span><br>
								<span class="text-muted">Default: </span><br>
<pre class="line-numbers"><code class="language-markup">&lt;ul>
	{{# each events }}
		&lt;li>
			&lt;dl>
				{{# each this }}
					&lt;dt class="event-key-{{ @key }}">{{ @key }}&lt;/dt>
					&lt;dd class="event-value-{{ @key }}">{{ this }}&lt;/dd>
				{{/ each }}
				{{# each description }}
					&lt;dt class="event-key-{{ @key }}">{{ @key }}&lt;/dt>
					&lt;dd class="event-value-{{ @key }}">{{ this }}&lt;/dd>
				{{/ each }}
			&lt;/dl>
		&lt;/li>
 {{/ each }}
&lt;/ul></code></pre>
								<a href="http://handlebarsjs.com/" target="_blank">Handlebars template</a> to use.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>xmlMap</code>
							</h5>
							<p>
								<span class="text-muted">Type: Object</span><br>
								<span class="text-muted">Default: </span><br>
<pre class="line-numbers"><code class="language-javascript">{}</code></pre>
							Any custom XML tags we should parse. In the object passed in, the key is used as the handlebars template key.  This is useful if the XML/RSS contains namespaced tags, which have a colon.  Using a colon in an object key caused strange behavior.<br /><br />The value can either be a jQuery selector or a callback function with current XML item as its parameter.
							</p>
						</li>
					</ul>
