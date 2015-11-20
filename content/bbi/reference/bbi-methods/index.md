---
layout: layout-sidebar
name: BBI methods
order: 2
---

# BBI Methods

These methods are considered the "meat and potatoes" of BBI, as they create many efficiencies for your customizations.

BBI methods are invoked as immediate child properties of the global BBI object.

### Chaining

Please note that some of the methods below can utilize chaining, allowing for code efficiencies. For example:

<pre class="line-numbers"><code class="language-javascript">BBI
    .executeFunctionByName("helloWorld")
    .attach(method.helloWorld)
    .log("Hello, World!");</code></pre>


## .apps()

<div id="method-apps" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.apps()</h4>
			<div class="panel-subtitle">Returns: <em>Object array</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an object representing all apps on the page.</p>
			<h4>Examples:</h4>
<pre class="line-numbers"><code class="language-javascript">var allApps = BBI.apps();

// Access a specific app's actions...
allApps.MyApp.actions.sayHello.init();</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .attach()

<div id="method-attach" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.attach( <em>function, arguments, context</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Adds a callback method to the .NET PageRequestManager's <code>add_endRequest()</code> method. <br><a href="http://msdn.microsoft.com/en-us/library/bb311028(v=vs.100).aspx" target="_blank">Microsoft Developer Network, PRM documentation&nbsp;&rarr;</a></p>
			<p class="alert alert-info"><span class="label label-info">NOTE</span> Useful for NetCommunity's partial form refreshes.</p>
			<div class="well">
				<p>
					<strong>function</strong><br>
					<span class="text-muted">Type: function literal</span>
				</p>
				<p>
					<strong>arguments</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: any</span>
				</p>
				<p>
					<strong>context</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: object</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">BBI.attach(function () {
    // Do something after every add_endRequest...
});</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .defaults()

<div id="method-defaults" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.defaults( <em>key</em>, <em>value</em> )</h4>
			<div class="panel-subtitle">Returns: <em>various</em></div>
		</div>
		<div class="panel-body">
			<p>Returns BBI's global defaults. This method may also return a specific item from the defaults array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
			<?php echo $bbi_parameters_description; ?>
			<div class="well">
				<p>
					<strong>key</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>value</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: various</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Get all defaults:
var bbi_defaults = BBI.defaults();

// Get one default:
var isDebug = BBI.defaults("debug");

// Set a default value:
BBI.defaults("debug", true);</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## extension

The namespace consists of several extensions. Each extension has a specific purpose. For example, the "helper" methods are contained in an extension named "helper".

<p class="alert alert-info">Extensions can only be created in BBI's initialization cycle. In other words, you cannot add an extension to BBI inside one of your actions. To learn more about extensions and how they're built, go to the Contributing section.</p>

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.extension ( Object args )</code></h4>
	</div>
	<div class="panel-body">
		<h3>Parameters</h3>
		<div class="table-responsive">
    		<table class="table table-parameters">
    		    <thead>
    		        <tr>
    		            <th>Name</th>
    		            <th>Type</th>
    		            <th>Description</th>
    		        </tr>
    		    </thead>
    		    <tbody>
    				<tr>
    					<td class="name">args</td>
    					<td class="type">Object</td>
    					<td>
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">alias</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							A unique string to designate your extension. Avoid spaces and special characters.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">defaults</h4>
            						<p>
            							<span class="text-muted">Type: Object</span><br>
            							Any defaults you wish to use in your directive
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">directive</h4>
            						<p>
            							<span class="text-muted">Type: Function</span><br>
            							A function describing what this directive does, and what it returns to be used publicly. This function receives attributes for the extension itself, a reference to BBI, and a reference to jQuery.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Create a new extension named "myExtension":</h4>
        <pre><code class="language-javascript">(function () {
            
    BBI.extension({
        alias: "myExtension",
        defaults: {
            foo: "bar"
        },
        directive: function (ext, bbi, $) {
            var settings = ext.settings();
            return {
                getFoo: function () {
                    return settings.foo;
                }
            };
        }
    });
            
}());</code></pre>
	</div>
</div>

## .info()
<div id="method-info" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.info()</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Returns information about the current page's customizations, in the browser console.</p>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">BBI.info(); // prints stuff in the console</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .init()
<div id="method-init" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.init( <em>options</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Initializes the BBI namespace.</p>
			<div class="well">
				<p>
					<strong>options</strong><br>
					<span class="text-muted">Type: hash</span>
				</p>
				<ol class="list-group">
					<li class="list-group-item">
						<code>adminViewSelector</code><br>
						<span class="text-muted">Type: string | Default: ".bb_menu"</span><br>
						The CSS class BBI will look for on the page to determine if the current user is an admin user.
					</li>
					<li class="list-group-item">
						<code>alias</code><br>
						<span class="text-muted">Type: string | Default: "BBI"</span><br>
						Change the name of the global variable associated with the namespace. This is especially helpful if the variable "BBI" already exists on the page (see <a href="http://api.blackbaud.com/documentation/#gs-conflicts">Namespace Conflicts</a>).
					</li>
					<li class="list-group-item">
						<code>bbiLogContainerDisclaimer</code><br>
						<span class="text-muted">Type: string | Default: "* This message pane is visible only to administrators."</span><br>
						The message appended to the bottom of the log message container.
					</li>
					<li class="list-group-item">
						<code>bbiLogContainerId</code><br>
						<span class="text-muted">Type: string | Default: "bbi-message"</span><br>
						The CSS ID given to the log message container.
					</li>
					<li class="list-group-item">
						<code>bbiLogPrependSelector</code><br>
						<span class="text-muted">Type: string | Default: "body"</span><br>
						The CSS selector that will be used to prepend the log message container.
					</li>
					<li class="list-group-item">
						<code>bbiLogContainerTitle</code><br>
						<span class="text-muted">Type: string | Default: "Customization Alerts:"</span><br>
						The title given to the log message container.
					</li>
					<li class="list-group-item">
						<code>bbiStylesHref</code><br>
						<span class="text-muted">Type: string | Default: "//api.blackbaud.com/assets/namespace/css/styles.min.css"</span><br>
						URL to the default BBI interface stylesheet.
					</li>
					<li class="list-group-item">
						<code>dataAttr_action</code><br>
						<span class="text-muted">Type: string | Default: "data-bbi-action"</span><br>
						BBI will look for this HTML5 data- attribute to execute your application's actions().
					</li>
					<li class="list-group-item">
						<code>dataAttr_app</code><br>
						<span class="text-muted">Type: string | Default: "data-bbi-app"</span><br>
						BBI will look for this HTML5 data- attribute to retrieve an application's actions().
					</li>
					<li class="list-group-item">
						<code>dataAttr_script</code><br>
						<span class="text-muted">Type: string | Default: "data-bbi-src"</span><br>
						BBI will look for this HTML5 data- attribute to asynchronously load your custom JavaScript files.
					</li>
					<li class="list-group-item">
						<code>debug</code><br>
						<span class="text-muted">Type: boolean | Default: false</span><br>
						Set to "true" to see console messages for each step of the BBI initializing process.
					</li>
					<li class="list-group-item">
						<code>jQuery</code><br>
						<span class="text-muted">Type: function | Default: null</span><br>
						This attribute will allow you to pass a different version of jQuery to BBI (see <a href="http://api.blackbaud.com/documentation/#gs-jquery-conflicts">jQuery Conflicts</a>).
					</li>
					<li class="list-group-item">
						<code>loadBBIStyles</code><br>
						<span class="text-muted">Type: boolean | Default: true</span><br>
						Tell BBI to load the default BBI interface stylesheet onto the page.
					</li>
					<li class="list-group-item">
						<code>pageEditorUrlRegex</code><br>
						<span class="text-muted">Type: string | Default: "edit=|/cms/"</span><br>
						The regular expression BBI uses to determine if the current NetCommunity page is in "Edit Mode".
						This regex is based entirely on what's in the URL.
					</li>
					<li class="list-group-item">
						<code>partTitleKeyword</code><br>
						<span class="text-muted">Type: string | Default: "Customization"</span><br>
						BBI will look for this keyword being used by your NetCommunity Unformatted Text parts, while in Edit Mode.
						When it finds the keyword in the parts' titles, it will add styles to make it easier for users to spot
						them on the page.
					</li>
					<li class="list-group-item">
						<code>scriptLoaderUrl</code><br>
						<span class="text-muted">Type: string | Default: "//api.blackbaud.com/services/asset-loader/"</span><br>
						The URL of the asset loader.
					</li>
				</ol>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">BBI.init({
    debug: true
});</code></pre>
			<p>
				<a class="btn btn-sm btn-primary" href="//api.blackbaud.com/documentation/#gs-options">Read more about initializing BBI with options&nbsp;&rarr;</a>
			</p>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## instantiate

After you've written an extension, you'll need to instantiate it so that BBI can use it.

<p class="alert alert-info">You cannot instantiate an extension after BBI has been initialized. To learn more about extensions, go to the Contributing section.</p>

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.instantiate ( String alias, Object options )</code></h4>
	</div>
	<div class="panel-body">
		<h3>Parameters</h3>
		<div class="table-responsive">
    		<table class="table table-parameters">
    		    <thead>
    		        <tr>
    		            <th>Name</th>
    		            <th>Type</th>
    		            <th>Description</th>
    		        </tr>
    		    </thead>
    		    <tbody>
    		        <tr>
    					<td class="name">alias</td>
    					<td class="type">String</td>
    					<td>The alias of the directive you wish to instantiate</td>
    				</tr>
    				<tr>
    					<td class="name">options</td>
    					<td class="type">Object</td>
    					<td>Any options you wish to push to the directive. The options will be merged with the defaults, producing the directive's settings. To allow a developer to configure an extension outside of BBI, you can use the options object passed via <a href="#">BBI.init()</a>. To do this, simply instantiate the extension with the <a href="#">BBI.options()</a> method (see example below).</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Create an extension named "myExtension" and instantiate it:</h4>
        <pre><code class="language-javascript">(function () {
            
    BBI.extension({
        alias: "myExtension",
        defaults: {
            foo: "bar"
        },
        directive: function (ext, bbi, $) {
            var settings = ext.settings();
            return {
                getFoo: function () {
                    return settings.foo;
                }
            };
        }
    });
    
    BBI.instantiate("myExtension", BBI.options());
            
}());</code></pre>
        <h4>Then, developers outside of BBI can configure your extension via:</h4>
        <pre><code class="language-javascript">(function () {
            
    BBI.init({
        foo: "baz" // pass in a different value
    });
            
}());</code></pre>
	</div>
</div>

## .isAdminView()

<div id="method-is-admin-view" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.isAdminView()</h4>
			<div class="panel-subtitle">Returns: <em>Boolean</em></div>
		</div>
		<div class="panel-body">
			<p>Returns <code>true</code> or <code>false</code> if the current page is an administrator-accessible page.</p>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">if (true === BBI.isAdminView()) {
	// We're on an admin page!
}</code></pre>
            <p>
                The admin view is determined by the presence of a certain HTML selector. You can change this selector via:
                <pre class="line-numbers"><code class="language-javascript">BBI.init({ 
    adminViewSelector: '.some-selector'
});</code></pre>
            </p>
		</div>
	</div>
</div>

## .isDebugMode()

<div id="method-is-debug-mode" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.isDebugMode()</h4>
			<div class="panel-subtitle">Returns: <em>Boolean</em></div>
		</div>
		<div class="panel-body">
			<p>Returns <code>true</code> or <code>false</code> if BBI is currently in debug mode.</p>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">if (true === BBI.isDebugMode()) {
	// We're in debug mode, so display an error log!
}</code></pre>
		</div>
	</div>
</div>

## .isPageEditor()
<div id="method-is-page-editor" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.isPageEditor()</h4>
			<div class="panel-subtitle">Returns: <em>Boolean</em></div>
		</div>
		<div class="panel-body">
			<p>Returns <code>true</code> or <code>false</code> if the current user is editing a NetCommunity page or template.</p>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">if (true === BBI.isPageEditor()) {
	// We're editing the page!
}</code></pre>
            <p>
                The editor view is determined by certain string fragments in the URL. You can change this regex via:
                <pre class="line-numbers"><code class="language-javascript">BBI.init({ 
    pageEditorUrlRegex: "/something/in/the/url"
});</code></pre>
            </p>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .isPartEditor()
<div id="method-is-part-editor" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.isPartEditor()</h4>
			<div class="panel-subtitle">Returns: <em>Boolean</em></div>
		</div>
		<div class="panel-body">
			<p>Returns <code>true</code> or <code>false</code> if the current user is in the editor popup of a NetCommunity Custom Part.</p>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">if (true === BBI.isPartEditor()) {
	// The user is editing a custom part...
}</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .jQuery()

<div id="method-jquery" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.jQuery( <em>location</em> )</h4>
			<div class="panel-subtitle">Returns: <em>jQuery</em></div>
		</div>
		<div class="panel-body">
			<p>This method returns jQuery based on its location (or parent object). This is especially useful when using jQuery's noConflict() setup.</p>
			<div class="well">
				<p>
					<strong>location</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span><br>
					<span class="text-muted">Possible values: "namespace", "window", "yahoo"</span><br>
					<span class="text-muted">Default: "namespace"</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">var bbi$ = BBI.jQuery("namespace"); // Get jQuery associated with BBI
var win$ = BBI.jQuery("window"); // Get jQuery associated with the Window
var yahoo$ = BBI.jQuery("yahoo"); // Get jQuery associated with PageBuilder
</code></pre>
            <p>How to check if a certain plugin is associated with a version of jQuery:</p>
			<pre class="line-numbers"><code class="language-javascript">if (typeof BBI.jQuery("namespace").fn.owlCarousel === "function") {
	// Owl Carousel exists on BBI's version of jQuery...
} else if (typeof bbi.jQuery("window").fn.owlCarousel === "function") {
	// Owl Carousel exists on the window's version of jQuery...
} else {
	// Owl Carousel doesn't exist at all...
}</code></pre>
		</div>
	</div>
</div>

## .log()
				
<div id="method-log" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.log( <em>message, addToDOM</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Adds a custom message to either the browser console, or to the top of the page.</p>
			<div class="alert alert-info">
				For debugging, and printing complex messages with object references, etc., continue to use console.log().
			</div>
			<div class="well">
				<p>
					<strong>message</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>addToDOM</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: boolean</span><br>
					<span class="text-muted">Default: <code>true</code></span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">// Display a message to users where the BBI.isAdminView() passes.
BBI.log("The function name you specified does not exist.");

// Print the message only in the console
BBI.log("Hello, World!", false);</code></pre>
						</div>
					</div>
					<p class="back-to-top"><a href="#top">Back to top ^</a></p>
				</div>

## .map()
				
<div id="method-map" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.map( <em>key, value</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI, value</em></div>
		</div>
		<div class="panel-body">
			<p>Values passed to this method will be saved in BBI's <em>public</em> scope, allowing its various extensions, apps, and actions to access them. (To set <em>private</em> keys, use <code>BBI()</code>, instead.)</p>
			<p>This method prevents duplicates.</p>
			<p>
				<strong>Reserved Keys</strong><br>
				These keys are currently in use by BBI and should not be set:<br>
				<em>extension</em><br>
				<em>instantiate</em><br>
				<em>jQuery</em><br>
				<em>helper</em><br>
				<em>info</em><br>
				<em>isAdminView</em><br>
				<em>isDebugMode</em><br>
				<em>isPageEditor</em><br>
				<em>isPartEditor</em><br>
				<em>log</em><br>
				<em>storage</em><br>
				<em>attach</em><br>
				<em>olx</em><br>
				<em>require</em><br>
				<em>register</em><br>
				<em>apps</em>
			</p>
			<div class="well">
				<p>
					<strong>key</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>value</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: any</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Set the data:
BBI.map("myData", {
	first: "Jayne",
	last: "Cobb"
});

// Then, in your action, access the data:
BBI.myData.first; // produces, "Jayne"
</code></pre>
		</div>
	</div>
</div>

## on

This method allows you to insert code at specific points during BBI's initialization cycle.

<p class="alert alert-info">This method may only be used during BBI's initialization cycle, specifically when dealing with extensions. To learn more about extensions and how they're built, go to the Contributing section.</p>

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.on ( String hook, Function callback )</code></h4>
	</div>
	<div class="panel-body">
		<h3>Parameters</h3>
		<div class="table-responsive">
    		<table class="table table-parameters">
    		    <thead>
    		        <tr>
    		            <th>Name</th>
    		            <th>Type</th>
    		            <th>Description</th>
    		        </tr>
    		    </thead>
    		    <tbody>
    				<tr>
    					<td class="name">hook</td>
    					<td class="type">String</td>
    					<td>
    					    The hook attribute can be one of the following:
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">preload</h4>
            						<p>
            							Fires before jQuery is implemented and before any extension has been instantiated.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">init</h4>
            						<p>
            							Fires after jQuery is implemented. BBI.init is executed, and all extensions are instantiated here. If you are adding a new extension, this is where your extension should be instantiated.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">complete</h4>
            						<p>
            							All extensions have been instantiated. Use this hook to perform any clean-up before any BBI applications are called.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    				<tr>
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>This function is executed at a specific time during BBI's initialization cycle. It receives a reference to BBI.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>A demonstration of each hook:</h4>
        <pre><code class="language-javascript">(function () {
            
    BBI.on("preload", function (bbi) {
        // Extensions have not been instantiated
    });
    
    BBI.on("init", function (bbi) {
        // Extensions are being instantiated
    });
    
    BBI.on("complete", function (bbi) {
        // Extensions have been instantiated
    });
            
}());</code></pre>
	</div>
</div>

## .options()

<div id="method-options" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.options( <em>key</em>, <em>value</em> )</h4>
			<div class="panel-subtitle">Returns: <em>various</em></div>
		</div>
		<div class="panel-body">
			<p>Returns BBI's global options. This method may also return a specific item from the options array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
			<?php echo $bbi_parameters_description; ?>
			<div class="well">
				<p>
					<strong>key</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>value</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: various</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Get all options:
var bbi_options = BBI.options();

// Get one option:
var isDebug = BBI.options("debug");

// Set an option's value:
BBI.options("debug", true);</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .register()

<div id="method-register" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.register( <em>options</em> )</h4>
			<div class="panel-subtitle">Returns: <em>App Object</em></div>
		</div>
		<div class="panel-body">
			<p>Creates (and returns) a custom application object, within the global BBI namespace.</p>
			<div class="well">
				<p>
					<strong>options</strong><br>
					<span class="text-muted">Type: hash</span>
				</p>
				<ul class="list-group">
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>alias</code>
						</h5>
						<p>
							<span class="text-muted">Type: string</span><br>
							The name given to your application. This name must be unique to the webpage.
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>requires</code>
						</h5>
						<p>
							<span class="text-muted">Type: array, hash</span><br>
							Tell the application what assets are required before initializing.
							The same assets are entered in the <a href="#method-require">BBI.require()</a> method, below.
							By default, stylesheets will also be loaded for each respective asset (if it exists).
							To disable this feature, pass a hash Object for each asset, instead of a single-level array.
							You can see an example of this below, under "Examples".
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>author</code>
						</h5>
						<p>
							<span class="text-muted">Type: string</span><br>
							First and last name of the author that wrote this customization file
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>client</code>
						</h5>
						<p>
							<span class="text-muted">Type: string</span><br>
							SalesForce Account Name for the client that owns this customization file
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>created</code>
						</h5>
						<p>
							<span class="text-muted">Type: string</span><br>
							The date this file was created, yyyy/mm/dd
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>assignment_numbers</code>
						</h5>
						<p>
							<span class="text-muted">Type: string</span><br>
							A comma-sparated list of all SalesForce Assignment Numbers associated with this application. The assignent numbers are found on the assignments' detail pages.
						</p>
					</li>
					<li class="list-group-item">
						<h5 class="list-group-item-heading">
							<code>changelog</code>
						</h5>
						<p>
							<span class="text-muted">Type: hash</span><br>
							Lists any changes to the custom file, specifying <code>author</code>, <code>date</code>, and <code>notes</code>
						</p>
					</li>
				</ul>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">// Basic usage.
var app = BBI.register({
    alias: "MyApp",
    author: "Jayne Cobb",
    client: "Organization, Inc.",
    created: "yyyy/mm/dd",
    assignment_numbers: "A-555555, A-345235",
    changelog: [{
        author: "First Last",
        date: "yyyy/mm/dd",
        notes: ""
    }]
});

// Require assets.
var app = BBI.register({
    alias: "MyApp",
    requires: ["slideset", "cookie"],
    author: "Jayne Cobb"
});

// Require assets, but don't load their stylesheets.
var app = BBI.register({
    alias: "MyApp",
    requires: {
    	assets: ["slideset", "cookie"],
    	loadCSS: false
    },
    author: "Jayne Cobb"
});</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .require()

<div id="method-require" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.require( <em>assets, callback, loadCSS, jQueryLocation</em> )</h4>
			<div class="panel-subtitle">Returns: <em>window.jQuery</em></div>
		</div>
		<div class="panel-body">
			<p>Loads required libraries onto the page, before proceeding with a custom method.</p>
			<p class="alert alert-info"><strong>Asset Dependencies:</strong><br>If you specify any asset its dependencies will automatically be loaded as well, so you don't need to keep track of which assets are required, and in what order.</p>
			<div class="well">
				<p>
					<strong>assets</strong><br>
					<span class="text-muted">Type: String array</span><br>
					<a href="../assets/" target="_blank">View possible values &rarr;</a>
				</p>
				<p>
					<strong>callback</strong><br>
					<span class="text-muted">Type: function</span>
				</p>
				<p>
					<strong>loadCSS</strong><br>
					<span class="text-muted">Type: boolean</span><br>
					By default, stylesheets will also be loaded for each respective asset (if it exists).
					To disable this feature, set this argument to the boolean, false.
				</p>
				<p>
					<strong>jQueryLocation</strong><br>
					<span class="text-muted">Type: "string"</span><br>
					<span class="text-muted">Possible Values: "namespace", "window", "yahoo"</span><br>
					<span class="text-muted">Default: "window"</span><br>
					This string represents the parent object for a version of jQuery. This is ideal when using noConflict() as it lets you decide to which jQuery object the asset gets appended.
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">// Simple usage:
BBI.require(['slideset'], function ($) {
    $('table.slide').SlideSet();
});

// Complex usage...
BBI.require(['slideset'], function ($) { // Returns the version of jQuery the plugin is appended to.
	$('table.slide').SlideSet();
}, true, "namespace");</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .settings()

<div id="method-settings" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.settings( <em>key</em>, <em>value</em> )</h4>
			<div class="panel-subtitle">Returns: <em>various</em></div>
		</div>
		<div class="panel-body">
			<p>Returns BBI's global settings. This method may also return a specific item from the settings array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
			<?php echo $bbi_parameters_description; ?>
			<div class="well">
				<p>
					<strong>key</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>value</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: various</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Get all settings:
var bbi_settings = BBI.settings();

// Get one setting:
var isDebug = BBI.settings("debug");

// Set the value of a setting:
BBI.settings("debug", true);
</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .yield()

<div id="method-yield" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.yield( <em>function</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>This method is only available within the Window's <code>bbiAsyncInit</code> function.</p>
			<p>Essentially, it allows any number of bbiAsyncInit functions to fire on the same page.</p>
			<div class="well">
				<p>
					<strong>function</strong><br>
					<span class="text-muted">Type: function</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Store a reference to a previous instance of bbiAsyncInit:
var oldAsyncInit = window.bbiAsyncInit;

// Overwrite bbiAsyncInit with our own version:
window.bbiAsyncInit = function (bbi) {

	// Run the older version of bbiAsynInit, first:
	bbi.yield(oldAsyncInit);

	// Then, initialize...
	bbi.init({
		debug: true
	});

}</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>
