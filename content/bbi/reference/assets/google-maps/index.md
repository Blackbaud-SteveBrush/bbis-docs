---
name: Google Maps
showInNav: false
---

# Google Maps `google-maps`

## Dependencies
<ul>
	<li>jQuery 1.7.2 or greater</li>
	<li>Handlebars.js, if passing in a hover template.</li>
    <li><a href="https://developers.google.com/maps/documentation/javascript/tutorial" target="_blank">Google Maps API</a></li>
</ul>

## How to use

<pre><code class="language-javascript">BBI.require(['google-maps'], function () {
    var options = {};
    jQuery(element).googleMaps(options);
});</code></pre>
					
## Events
					<p>Using jQuery's <code>$(document).on()</code> method, you can listen to any of the following events.</p>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>Event name:</th>
								<th>When it's triggered:</th>
							</tr>
						</thead>
						<tbody>
						<tr>
							<th>bbGoogleMaps.LOADED</th>
							<td>After locations have been parsed and added to the map.</td>
						</tr>
						<tr>
							<th>bbGoogleMaps.INFO_WINDOW_OPENED</th>
							<td>After an infoWindow has been opened.</td>
						</tr>
						</tbody>
					</table>
					<h3>Options</h3>
					<ul class="list-group">
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>commongLatLng</code></h5>
							<p>
								<span class="text-muted">Type: object</span><br />
								Broken down into 'CA' and 'US' properties, contain a lat, lng, zoom, and name for each state/province.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>controlHomeClass</code></h5>
							<p>
								<span class="text-muted">Type: string</span><br>
								<span class="text-muted">Default: "controlHomeClass"</span><br />
								If present, adds a home control which centers the map.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>headers</code></h5>
							<p>
								<span class="text-muted">Type: object</span><br>
								<span class="text-muted">Default:</span>
<pre class="line-numbers"><code class="language-javascript">{
	title: {
		text: 'Title'
	},
	content: {
		text: 'Content'
	},
	address: {
		text: 'Address'
	},
	city: {
		text: 'City'
	},
	state: {
		text: 'State'
	},
	zip: {
		text: 'Zip'
	},
	lat: {
		text: 'Lat'
	},
	lng: {
		text: 'Lng'
	},
	url: {
		text: 'URL'
	}
}</code></pre>
								When an external CSV file is specified, these corredspond to the header row.  <code>index</code> can also be used instead of <code>text</code> to specify the location of the header.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>locations</code></h5>
							<p>
								<span class="text-muted">Type: array</span><br>
								<span class="text-muted">Default: <pre class="line-numbers"><code class="language-javascript">[]</code></pre></span><br />
								If locations aren't coming from external CSV, they can be manually passed in here as an array of objects.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>locationsWithErrors</code></h5>
							<p>
								<span class="text-muted">Type: array</span><br>
								<span class="text-muted">Default: <pre class="line-numbers"><code class="language-javascript">[]</code></pre></span><br />
								If error parsing locations occurs, this array contains any locations which couldn't be parsed.
							</p>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading">
								<code>map</code>
							</h5>
							<p>
								<span class="text-muted">Type: object</span><br>
								<span class="text-muted">Default:</span><br />
<pre class="line-numbers"><code class="language-javascript">{
	// Custom that gets converted
	mapTypeId: 'ROADMAP',
	markerIcon: '',

	// Handlebars Template
	infoWindowTemplate: '',
	infoWindowOptions: {
		content: ''
	},
	allowedBounds: [],
	styledMapTypes: [],
	center: {
		lat: 37.439974,
		lng: -94.658203
	},

	// Default
	visualRefresh: true,
	options: {
		zoom: 4,
		mapTypeControlOptions: {
			mapTypeIds: []
		}
	}
}</code></pre>
								Settings directly related to the google maps api instance.  Most are native <a href="https://developers.google.com/maps/documentation/javascript/reference" target="_blank">Google Maps API</a> properties, but a few (as denoted below) must be converted before passed to the API.
							</p>



							<ul class="list-group">
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>allowedBounds</code> <span class="label label-default">CONVERTED</span> <span class="label label-warning">EXPERIMENTAL</span></h5>
									<p>
										<span class="text-muted">Type: array | <a href="https://developers.google.com/maps/documentation/javascript/reference#LatLngBounds" target="_blank">LatLngBounds</a></span><br />
										<span class="text-muted">Default: </span><br />
										 First array has two items.  Each item is another two item array, where first item is lat and second item is lng.  Root items converted to <a href="https://developers.google.com/maps/documentation/javascript/reference#LatLng" target="_blank">LatLng</a>
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>center</code> <span class="label label-default">CONVERTED</span></h5>
									<p>
										<span class="text-muted">Type: object</span><br />
										<span class="text-muted">Default:
<pre class="line-numbers"><code class="language-javascript">{
	lat: 37.439974,
	lng: -94.658203
}</code></pre></span>
										Converted to <a href="https://developers.google.com/maps/documentation/javascript/reference#LatLng" target="_blank">LatLng</a>
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>infoWindowOptions</code></h5>
									<p>
										<span class="text-muted">Type: <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindowOptions" target="_blank">InfoWindowOptions</a></span><br />
										<span class="text-muted">Default:
<pre class="line-numbers"><code class="language-javascript">{
	content: ''
}</code></pre></span>
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>infoWindowTemplate</code></h5>
									<p>
										<span class="text-muted">Type: string</span><br />
										<span class="text-muted">Default:</span><br />
										<a href="http://handlebarsjs.com/" target="_blank">Handlebars template</a> to use.
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>mapTypeId</code> <span class="label label-default">CONVERTED</span></h5>
									<p>
										<span class="text-muted">Type: string | <a href="https://developers.google.com/maps/documentation/javascript/reference#MapTypeId" target="_blank">MapTypeId</a></span><br />
										<span class="text-muted">Default: "ROADMAP"</span><br />
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>markerIcon</code> <span class="label label-default">CONVERTED</span></h5>
									<p>
										<span class="text-muted">Type: string | <a href="https://developers.google.com/maps/documentation/javascript/reference#Icon" target="_blank">Icon</a></span><br />
										<span class="text-muted">Default:</span><br />
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>options</code></h5>
									<p>
										<span class="text-muted">Type: object</span><br />
										<span class="text-muted">Default: [see above]</span><br />
										<a href="https://developers.google.com/maps/documentation/javascript/reference#MapOptions" target="_blank">https://developers.google.com/maps/documentation/javascript/reference#MapOptions</a>
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading"><code>styledMapTypes</code> <span class="label label-default">CONVERTED</span></h5>
									<p>
										<span class="text-muted">Type: array | <a href="https://developers.google.com/maps/documentation/javascript/reference#styledMapType" target="_blank">styledMapType</a></span><br />
										<span class="text-muted">Default: </span><br />
										Each item is converted to <a href="https://developers.google.com/maps/documentation/javascript/reference#styledMapType" target="_blank">styledMapType</a>.  Each item in this array should be an object with two properties - a <a href="https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle" target="_blank">MapTypeStyle</a> and a name (string).
									</p>
									<p>
										<a class="btn btn-sm btn-primary" href="http://snazzymaps.com/" target="_blank">View styledMapType examples&nbsp;→</a>
									</p>
								</li>
								<li class="list-group-item">
									<h5 class="list-group-item-heading">
										<code>visualRefresh</code>
										<span class="label label-danger">DEPRECATED</span>
									</h5>
									<p>
										<span class="text-muted">Type: boolean</span><br />
										<span class="text-muted">Default: true</span><br />
										<a href="https://developers.google.com/maps/documentation/javascript/basics#VisualRefresh" target="_blank">https://developers.google.com/maps/documentation/javascript/basics#VisualRefresh</a>
									</p>
								</li>
							</ul>
						</li>
						<li class="list-group-item">
							<h5 class="list-group-item-heading"><code>markerClusterer</code></h5>
							<p>
								<span class="text-muted">Type: object</span><br />
								<span class="text-muted">Default: <em>undefined</em></span><br />
								A "plugin," if you will, which allows you to group pins based on their density and the zoom level.  If used, markercluster.js from reference site must also be included on page.  <a href="http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/docs/reference.html" target="_blank">http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/docs/reference.html</a>
							</p>
						</li>
					</ul>
