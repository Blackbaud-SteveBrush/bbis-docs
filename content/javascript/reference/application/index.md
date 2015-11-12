---
layout: layout-sidebar
name: Application methods
order: 3
---

# Application Methods

The following methods are used by the custom application generated by BBI.register(). For the sake of simplicity, the custom application will be referred to as <strong>MyApp</strong>.

To access any of the methods below, simply type: <code>BBI.apps.MyApp.[method name]</code> or <code>window.MyApp.[method name]</code>, after registering your application.

## .action()

<div id="method-action" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">MyApp.action( <em>name, function</em> )</h4>
			<div class="panel-subtitle">Returns: <em>MyApp</em></div>
		</div>
		<div class="panel-body">
			<p>Adds an executable object to your application.</p>
			<div class="well">
				<p>
					<strong>name</strong><br>
					<span class="text-muted">Type: string</span><br>
					The name must be unique to the global Window's scope.
				</p>
				<p>
					<strong>function</strong><br>
					<span class="text-muted">Type: function</span><br>
					This function will be executed once, when the application's build() method is called. It receives a copy of the application, BBI, and jQuery as arguments.
				</p>
			</div>
			<h4>Chaining</h4>
			<p>The .action() method returns its Application object, so you can easily chain actions one after the other.</p>
            <pre class="line-numbers"><code class="language-javascript">app
    .action("sayHello", function (app, bbi, $) {}) // no semicolon
    .action("welcomeUser", function (app, bbi, $) {}) // no semicolon
    .action("globalUI", function (app, bbi, $) {});</code></pre>
			<hr>
			<h4>Automatic Actions</h4>
			<p>By default, the contents of an action() are executed as soon as the application's build() method is called. These actions are useful for site-wide code, such as global navigation adjustments, mobile-view checking, mega menus, or font-resizing.</p>
            <pre class="line-numbers"><code class="language-javascript">.action("sayHello", function (app, bbi, $) {
	console.log("I always say hello, whether you want me to or not! >:-D ");
})</code></pre>
			<hr>
			<h4>Manual Actions</h4>
			<p>An "automatic action" does exactly what it sounds like: it runs as soon as the page loads. These actions are useful for site-wide code, such as global navigation adjustments, mobile-view checking, mega menus, or font-resizing.</p>
			<p>To create an action() that is manually initialized, simply have the action() return a function named "init". When using data- attributes to call your action on the page, the "init" function will get called, passing additional data- attributes on the same tag as options--as well as the tag element itself--so you can manipulate it within your action().</p>
			<p><strong>For example, if you initialize your action using data attributes:</strong></p>
			<pre class="line-numbers"><code class="language-markup">&lt;div 
    id="my-div" 
    data-bbi-app="MyApp" 
    data-bbi-action="sayHello" 
    data-file-src="document.doc?id=4">
&lt;/div></code></pre>
			<p><strong>When the "sayHello" action is called, it will receive the element and element's data- attributes:</strong></p>
            <pre class="line-numbers"><code class="language-javascript">app.action("sayHello", function (app, bbi, $) {
	return {
		init: function (options, element) {
			console.log("I only say hello when asked. :-( ");
			console.log("ID: ", $(element).attr("id")); // prints "my-div"
			console.log("File SRC: ", options.fileSrc); // prints "document.doc?id=4"
		}
	};
});</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .scope()

<div id="method-scope" class="panel-wrapper">
	<div  class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">MyApp.scope( <em>anything</em> )</h4>
			<div class="panel-subtitle">Returns: <em>MyApp</em></div>
		</div>
		<div class="panel-body">
			<p>Adds a global namespace for your application. This is helpful when you need to share variables or objects with all actions, or other applications.</p>
			<div class="well">
				<p>
					<strong>anything</strong><br>
					<span class="text-muted">Type: function or object</span><br>
					You can pass a literal object -- or a function that returns an object, after making some specific computations.
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">app.scope({
    donationFormId: 45
});

// Or...
app.scope(function (app, bbi, $) {
    var id = $('.DonationFormTable').attr('id');
    return {
        donationFormId: id
    }
});

// To retrieve the information from the scope, simply call it from within your actions:
app.action("sayHello", function (app, bbi, $) {
	var donationId = app.scope.donationFormId;
});

// Or retrieve the information from another app:
var someScope = BBI.apps().SomeOtherApp.scope;</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .build()

<div id="method-build" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">MyApp.build()</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Executes your application. First, the application will load the required assets onto the page. Then, it will search for any psuedo-tags or remaining customization files, and load those onto the page. Once everything is ready, it will execute your actions.</p>
			<p>This method is required.</p>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">app.build();</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>