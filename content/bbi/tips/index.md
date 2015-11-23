---
layout: layout-sidebar
order: 7
name: Tips & Tricks
description: Description here.
icon: fa fa-sitemap
---

# Tips & tricks

## Passing options to BBI

By default, simply adding the namespace script to the page causes it to auto-initialize. However, it is possible to pass in options to customize your version of BBI.

<a class="btn btn-sm btn-primary" href="//api.blackbaud.com/documentation/methods/index.php#method-init">View a list of all available options for BBI&nbsp;&rarr;</a>

<pre><code class="language-markup">&lt;!-- Insert before BBI is added to the page: -->
&lt;script>
(function (o) {
	window.bbiAsyncInit = function (bbi) {
		bbi.yield(o).init({
			debug: true
		});
	}
})(window.bbiAsyncInit);
&lt;/script></code></pre>

## Events

Using jQuery's `$(document).on()` method, you can trigger certain methods during various stages of BBI's execution.

The arguments provided in the `.on()` method's callback include: the event itself, a reference to BBI, and a reference to jQuery.

<h3>Order of execution</h3>
<table class="table table-striped">
	<thead>
		<tr>
			<th>Event name:</th>
			<th>When it's triggered:</th>
		</tr>
	</thead>
	<tbody>
    <tr>
		<th>bbi-extension-service</th>
		<td>Fires before the initializer. Allows you to access the defaults and add your own extensions before BBI initializes.</td>
	</tr>
	<tr>
		<th>bbi-ready</th>
		<td>The namespace has been initialized</td>
	</tr>
	<tr>
		<th>bbi-[alias]-ready</th>
		<td>A specific app's <code>build()</code> method has been called</td>
	</tr>
	<tr>
		<th>bbi-apps-ready</th>
		<td>All applications have been loaded</td>
	</tr>
	<tr>
		<th>bbi-apps-loaded</th>
		<td>All applications' actions have been compiled and global requirements uploaded to the page.</td>
	</tr>
	<tr>
		<th>bbi-[app-alias]-loaded</th>
		<td>A specific app's actions have been compiled</td>
	</tr>
	<!--
	<tr>
		<th>bbi-assets-loaded</th>
		<td>Assets loaded via the <code>require()</code> method have been loaded</td>
	</tr>
	-->
	<tr>
		<th>bbi-loaded</th>
		<td>All custom scripts, app assets (requested via the <code>register()</code> method), and apps have been loaded and compiled</td>
	</tr>
	</tbody>
</table>
<div class="alert alert-info">
	For example, to execute something after BBI has loaded all required assets, and all apps have been compiled:<br>
	<pre><code class="language-javascript">jQuery(document).on('bbi-loaded', function (event, bbi, $) {
    // Do something once BBI has loaded...
});</code></pre>
</div>

___

## NetCommunity

### Custom Parts

When creating a NetCommunity Custom Part, you will need to wait for NetCommunity to execute your Custom Part's initializing method. While the name for this method is defined by you, NetCommunity does not call the method until both jQuery and NetCommunity have loaded. To make sure your Custom Part JavaScript executes in the correct order, wrap your BBI Application's init() method in the following code snippet.

Replace <code>[YOUR APP]</code> with your app's alias.

Replace <code>[YOUR ACTION]</code> with your app's action name.

Replace <code>[YOUR CUSTOM PART INITIALIZING METHOD]</code> with the custom part's initializing method.

<pre><code class="language-markup">&lt;!-- Wait for the custom part's initializer. -->
&lt;script>
(function(b,a,n,e){a[e]=function(c){if(a.bbiGetInstance &&
a.bbiGetInstance.done)b.call({},c);else jQuery(document).on
(n,function(){b.call({},c)})}})(function(args){

    [YOUR APP].actions.[YOUR ACTION].init(args);

}, window, "bbi-loaded", "[YOUR CUSTOM PART INITIALIZING METHOD]");
&lt;/script></code></pre>

___

## PageBuilder

### Using "S" Tag data in your actions

Passing arguments to <code>bbi()</code> allows you to easily store common "S" tag data in the namespace, and use it later inside your actions.</p>

To do so, simply add the "bbi-loaded" event snippet (below) just above the bbiAsyncInit function.</p>

<pre class="line-numbers"><code class="language-markup">&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function (o, $) {
&nbsp;
    // Start S:tag storage.
    $(document).on("bbi-loaded", function (e, bbi) {
        bbi("pageData", {
            frId:      '[[?x1x9x::x[[S4]]x::[[S334:FR_ID]]::[[S42:0:fr-id]]]]',
            pageSlug:  '[[S334:pg]]',
            siteName:  '[[S0:SITE_NAME]]',
            username:  '[[S1:user_name]]',
            firstName: '[[S1:first_name]]',
            lastName:  '[[S1:last_name]]'
        });
    });
    // End S:tag storage.
&nbsp;
    window.bbiAsyncInit = function (bbi) {
        bbi.yield(o).init({
            jQuery: $
        });
    };
})(window.bbiAsyncInit, jQuery.noConflict(true));
&lt;/script></code></pre>

Then, in your action, access the S:tag data in this way:

<pre class="line-numbers"><code class="language-javascript">app.action("doSomething", function (app, bbi, $) {
	return {
	    init: function (options, element) {
    		var data = bbi('pageData');
    		console.log("Welcome back, " + data.firstName + "!");
    	}
    };
});</code></pre>

### Using conditionals to execute a specific action

<pre class="line-numbers"><code class="language-markup">[[?x[[S334:pg]]x::xpersonalx::
&lt;div
    data-bbi-action="PersonalPage"
    data-bbi-app="MyApp">
&lt;/div>
::]]
&nbsp;
[[?x[[S334:pg]]x::xteamx::
&lt;div
    data-bbi-action="TeamPage"
    data-bbi-app="MyApp">
&lt;/div>
::]]</code></pre>

___

## Legacy BBI conflicts

Sometimes, when adding a customization to an existing client's website, you'll encounter older versions of the BBI namespace. When this happens, be cautious, as you may unintentionally override a previous customization. Thankfully, when this happens, you'll be alerted in your browser's console, so always check that before submitting the customizaion for review.

<p class="alert alert-warning">
	Even though the current BBI namespace <em>extends</em> itself to older versions, the newer version takes precedence, so if there are older methods or properties of BBI that currently exist on the newer version, those will be overwritten.
</p>

### Use this version of the namespace reference when you encounter a namespace conflict:

<pre class="line-numbers"><code class="language-markup">&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
/&#42;&#42;
 &#42; The 'alias' can be anything, as long as it doesn't conflict
 &#42; with an existing Window property.
 &#42;&#42;/
(function (o) {
	window.bbiAsyncInit = function (bbi) {
		bbi.yield(o).init({
			alias: "BBI_NAMESPACE"
		});
	}
})(window.bbiAsyncInit);
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script></code></pre>
			
### If you're feeling generous...

Obviously the above method is a bit dicey, and could cause problems in the future. If you've got the time, it would help the entire team if you were to simply <strong>migrate the older customizations into the namespace</strong>.

If you don't have the time to do this, ping one of the principal designers, and see if they can be of assistance. The end goal here is to have top-quality deliveries on all of our customizations, and anything you can do to help that process will certainly go a long way.

___

## jQuery conflicts

The namespace requires at least jQuery version 1.7.2 to operate effectively. In some cases, a CMS may already be reliant on a different version of jQuery (re: Luminate), so what do you do in this situation?

<pre class="line-numbers"><code class="language-markup">&lt;!-- My Version of JQuery -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function (o, $) {
	window.bbiAsyncInit = function (bbi) {
		bbi.yield(o).init({
			jQuery: $
		});
	}
})(window.bbiAsyncInit, jQuery.noConflict(true));
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script></code></pre>

___

## Cross-domain requests

Blackbaud provides a proxy service to allow cross-domain requests.

<pre class="line-numbers"><code class="language-javascript">var proxy = '//api.blackbaud.com/services/proxy/?url=';
var url = encodeURLComponent('http://domain.org/some/api/endpoint');
$.getJSON(proxy + url, function (res) {});</code></pre>

The proxy can also pass along cookies.

<pre class="line-numbers"><code class="language-javascript">var proxy = '//api.blackbaud.com/services/proxy/';
var url = encodeURLComponent('http://domain.org/some/api/endpoint');
var cookie = 'some/cookie/value';
$.get({
    url: proxy,
    data: {
        url: url,
        send_cookies: 1
    },
    headers: {
        'Set-Cookie': '.ASPXAUTH=' + cookie
    }
    dataType: 'json',
    success: function (res) {}
});
</code></pre>
