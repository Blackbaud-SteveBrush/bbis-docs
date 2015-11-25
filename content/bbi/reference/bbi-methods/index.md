---
layout: layout-sidebar
name: BBI methods
description: Core BBI methods and properties
icon: fa fa-database
order: 2
---

# BBI Methods

These methods are considered the "meat and potatoes" of BBI, as they create many efficiencies for your customizations.

BBI methods are invoked as immediate child properties of the global BBI object.

### Chaining

Most of the methods below can utilize chaining, allowing for code efficiencies. For example:

<pre class="line-numbers"><code class="language-javascript">BBI
    .executeFunctionByName("helloWorld")
    .attach(method.helloWorld)
    .log("Hello, World!");</code></pre>

## apps

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.apps ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an object representing all apps on the page.</p>
		<h3>Examples</h3>
        <pre><code class="language-javascript">$(document).on('bbi-ready', function (e, bbi) {
    
    var allApps = bbi.apps();

    // Access a specific app's actions...
    allApps.MyApp.actions.sayHello.init();
    
});</code></pre>
	</div>
</div>

## attach

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.attach ( Function callback, Object arguments, String context )</code></h4>
	</div>
	<div class="panel-body">
		<p>Adds a callback method to the .NET PageRequestManager's <code>add&#95;endRequest</code> method. <br><a href="http://msdn.microsoft.com/en-us/library/bb311028(v=vs.100).aspx" target="_blank">Microsoft Developer Network, PRM documentation&nbsp;&rarr;</a></p>
		<p>Returns BBI.</p>
        <p class="alert alert-info">Useful for NetCommunity's partial form refreshes.</p>
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
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>The function to add to .NET PageRequestManager's <code>add&#95;endRequest</code></td>
    				</tr>
    				<tr>
    					<td class="name">arguments</td>
    					<td class="type">Object</td>
    					<td>(Optional) Any arguments you wish to pass to the callback</td>
    				</tr>
    				<tr>
        				<td class="name">context</td>
    					<td class="type">Object</td>
        				<td>(Optional) The object to be referenced as 'this' in the callback</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Basic usage:</h4>
        <pre><code class="language-javascript">BBI.attach(function () {});</code></pre>
        <h4>Send arguments to the callback:</h4>
        <pre><code class="language-javascript">var myCallback = function (args) {};
BBI.attach(myCallback, { foo: "bar" });</code></pre>
        <h4>Send the value of 'this' to the callback:</h4>
        <pre><code class="language-javascript">(function () {
    
    // A callback method, located...somewhere
    var myCallback = function (args) {
        this.sayHello(); // prints 'Hey!'
    };
    
    // The context to be used in the callback
    var methods = {
        sayHello: function () {
            console.log("Hey!");
        }
    };
    
    // Add our callback and link it to methods object
    BBI.attach(myCallback, {}, methods);
    
}());</code></pre>
	</div>
</div>

## defaults

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.defaults ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns BBI's global defaults. This method may also return a specific item from the defaults array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
		<div class="alert alert-info">
    		<h4><strong>What's the difference between defaults, options, and settings?</strong></h4>
    		<div class="table-responsive">
        		<table class="table table-parameters">
        		    <tbody>
        				<tr>
        					<td class="name">defaults</td>
        					<td>The defaults set by BBI's extensions.</td>
        				</tr>
        				<tr>
        					<td class="name">options</td>
        					<td>Custom properties set by the developer.</td>
        				</tr>
        				<tr>
        					<td class="name">settings</td>
        					<td>The defaults and options merged into a single object.</td>
        				</tr>
        			</tbody>
        		</table>
    		</div>
		</div>
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
    					<td class="name">key</td>
    					<td class="type">String</td>
    					<td>(Optional) The name of the property to set</td>
    				</tr>
    				<tr>
    					<td class="name">value</td>
    					<td class="type">Various</td>
    					<td>(Optional) The value to set</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Get all defaults:</h4>
        <pre><code class="language-javascript">var defaults = BBI.defaults();</code></pre>
        <h4>Get one default:</h4>
        <pre><code class="language-javascript">var isDebug = BBI.defaults("debug");</code></pre>
        <h4>Set a default value:</h4>
        <pre><code class="language-javascript">BBI.defaults("debug", true);</code></pre>
	</div>
</div>

## extension

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.extension ( Object args )</code></h4>
	</div>
	<div class="panel-body">
	    <p>The namespace consists of several extensions. Each extension has a specific purpose. For example, the "helper" methods are contained in an extension named "helper".</p>
        <p class="alert alert-info">Extensions can only be created in BBI's initialization cycle. In other words, you cannot add an extension to BBI inside one of your actions. To learn more about extensions and how they're built, go to the Contributing section.</p>
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

## info

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.info ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Prints information about the current page's applications, in the browser console. Returns BBI.</p>
		<h3>Examples</h3>
		<h4>Print application information in the browser console:</h4>
        <pre><code class="language-javascript">BBI.info();</code></pre>
	</div>
</div>

## init

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.init ( Object options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Initializes the BBI namespace.</p>
		<p>
			<a class="btn btn-primary" href="/bbi/tips">Read more about initializing BBI with options&nbsp;&rarr;</a>
		</p>
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
        				<td class="name">options</td>
    					<td class="type">Object</td>
        				<td>
            				<p>(Optional) The following options can be used:</p>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">adminViewSelector</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: ".bb_menu"</span><br>
                                        The CSS class BBI will look for on the page to determine if the current user is an admin user.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">alias</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "BBI"</span><br>
                                        Change the name of the global variable associated with the namespace. This is especially helpful if the variable "BBI" already exists on the page (see <a href="/bbi/tips/#legacy-bbi-conflicts">Namespace Conflicts</a>).
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbiLogContainerDisclaimer</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "* This message pane is visible only to administrators."</span><br>
                                        The message appended to the bottom of the log message container.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbiLogContainerId</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "bbi-message"</span><br>
                                        The CSS ID given to the log message container.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbiLogPrependSelector</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "body"</span><br>
                                        The CSS selector that will be used to prepend the log message container.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbiLogContainerTitle</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "Customization Alerts:"</span><br>
                                        The title given to the log message container.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbiStylesHref</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "//api.blackbaud.com/assets/namespace/css/styles.min.css"</span><br>
                                        URL to the default BBI interface stylesheet.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">dataAttr_action</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "data-bbi-action"</span><br>
                                        BBI will look for this HTML5 data- attribute to execute your application's actions().
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">dataAttr_app</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "data-bbi-app"</span><br>
                                        BBI will look for this HTML5 data- attribute to retrieve an application's actions().
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">dataAttr_script</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "data-bbi-src"</span><br>
                                        BBI will look for this HTML5 data- attribute to asynchronously load your custom JavaScript files.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">debug</h4>
            						<p>
            							<span class="text-muted">Type: boolean | Default: false</span><br>
                                        Set to "true" to see console messages for each step of the BBI initializing process.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">jQuery</h4>
            						<p>
            							<span class="text-muted">Type: function | Default: null</span><br>
                                        This attribute will allow you to pass a different version of jQuery to BBI (see <a href="/bbi/tips/#jquery-conflicts">jQuery Conflicts</a>).
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">loadBBIStyles</h4>
            						<p>
            							<span class="text-muted">Type: boolean | Default: true</span><br>
                                        Tell BBI to load the default BBI interface stylesheet onto the page.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">pageEditorUrlRegex</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "edit=|/cms/"</span><br>
                						The regular expression BBI uses to determine if the current NetCommunity page is in "Edit Mode".
                						This regex is based entirely on what's in the URL.
                                    </p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">partTitleKeyword</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "Customization"</span><br>
                						BBI will look for this keyword being used by your NetCommunity Unformatted Text parts, while in Edit Mode.
                						When it finds the keyword in the parts' titles, it will add styles to make it easier for users to spot
                						them on the page.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">scriptLoaderUrl</h4>
            						<p>
            							<span class="text-muted">Type: string | Default: "//api.blackbaud.com/services/asset-loader/"</span><br>
                                        The URL of the asset loader.
                                    </p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">BBI.init({
    debug: true
});</code></pre>
	</div>
</div>


## instantiate

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.instantiate ( String alias, Object options )</code></h4>
	</div>
	<div class="panel-body">
	    <p>After you've written an extension, you'll need to instantiate it so that BBI can use it.</p>
        <p class="alert alert-info">You cannot instantiate an extension after BBI has been initialized. To learn more about extensions, go to the Contributing section.</p>
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
    					<td>(Optional) Any options you wish to push to the directive. The options will be merged with the defaults, producing the directive's settings. To allow a developer to configure an extension outside of BBI, you can use the options object passed via <a href="#init">BBI.init()</a>. To do this, simply instantiate the extension with the <a href="#options">BBI.options()</a> method (see example below).</td>
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

## isAdminView

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.isAdminView ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns <code>true</code> or <code>false</code> if the current page is an administrator-accessible page.</p>
		<p>The admin view is determined by the presence of a certain HTML selector. You can change this selector via:</p>
        <pre class="line-numbers"><code class="language-javascript">BBI.init({ 
    adminViewSelector: '.some-selector'
});</code></pre>
		<h3>Examples</h3>
        <h4>Do something if we're on an admin page:</h4>
        <pre><code class="language-javascript">if (true === BBI.isAdminView()) {
	// We're on an admin page!
}</code></pre>
	</div>
</div>

## isDebugMode

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.isDebugMode ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns <code>true</code> or <code>false</code> if BBI is currently in debug mode.</p>
		<p>You can put BBI in debug mode via:</p>
        <pre class="line-numbers"><code class="language-javascript">BBI.init({ 
    debug: true
});</code></pre>
		<h3>Examples</h3>
        <h4>Do something if BBI is in debug mode:</h4>
        <pre><code class="language-javascript">if (true === BBI.isDebugMode()) {
	// We're in debug mode...
}</code></pre>
	</div>
</div>

## isPageEditor

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.isPageEditor ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns <code>true</code> or <code>false</code> if the current page is a CMS page.</p>
		<p>A page is determined to be a CMS page when a certain string fragment exists in the URL. You can change this string via:</p>
        <pre><code class="language-javascript">BBI.init({ 
    pageEditorUrlRegex: "/wp-admin/"
});</code></pre>
		<h3>Examples</h3>
        <h4>Do something on a CMS page:</h4>
        <pre><code class="language-javascript">if (true === BBI.isPageEditor()) {
	// We're editing the page!
}</code></pre>
	</div>
</div>

## isPartEditor

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.isPartEditor ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns <code>true</code> or <code>false</code> if the current user is in the editor popup of a NetCommunity Custom Part.</p>
		<h3>Examples</h3>
        <h4>Do something when editing a NetCommunity Custom Part:</h4>
        <pre><code class="language-javascript">if (true === BBI.isPartEditor()) {
	// The user is editing a custom part...
}</code></pre>
	</div>
</div>

## jQuery

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.jQuery ( String parent )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method returns jQuery based on its parent object. This is especially useful when using jQuery's `noConflict` setup.</p>
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
    					<td class="name">parent</td>
    					<td class="type">String</td>
    					<td>
    					    <p>(Optional) The name of the object that contains the jQuery version you wish to return.</p>
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">namespace (default)</h4>
            						<p>Return a reference to BBI's jQuery.</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">window</h4>
            						<p>Return a reference to Window's jQuery.</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">yahoo</h4>
            						<p>Return a reference to Luminate's Yahoo jQuery.</p>
            					</li>
            				</ul>
                        </td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Get a certain reference to jQuery:</h4>
        <pre><code class="language-javascript">var bbi$ = BBI.jQuery("namespace"); // Get jQuery associated with BBI
var win$ = BBI.jQuery("window"); // Get jQuery associated with the Window
var yahoo$ = BBI.jQuery("yahoo"); // Get jQuery associated with PageBuilder</code></pre>
        <h4>Check if a certain plugin is associated with a version of jQuery:</h4>
        <pre><code class="language-javascript">if (typeof BBI.jQuery("namespace").fn.owlCarousel === "function") {
	// Owl Carousel exists on BBI's version of jQuery...
} else if (typeof bbi.jQuery("window").fn.owlCarousel === "function") {
	// Owl Carousel exists on the window's version of jQuery...
} else {
	// Owl Carousel doesn't exist at all...
}</code></pre>
	</div>
</div>

## log

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.log ( String message, Boolean addToDOM)</code></h4>
	</div>
	<div class="panel-body">
		<p>Adds a custom message to either the browser console, or to the top of the page.</p>
		<p class="alert alert-info">
			For debugging, and printing complex messages with object references, etc., continue to use console.log().
		</p>
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
    					<td class="name">message</td>
    					<td class="type">String</td>
    					<td>The message to display.</td>
    				</tr>
    				<tr>
        				<td class="name">addToDOM</td>
    					<td class="type">Boolean</td>
        				<td>(Optional) Set to `true` to add it to the top of the page. Note that this message will only appear if `BBI.isAdminView` passes. Defaults to `true`.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Print a message for admin users:</h4>
        <pre><code class="language-javascript">BBI.log("The function name you specified does not exist.");</code></pre>
        <h4>Print a message only in the browser console:</h4>
        <pre><code class="language-javascript">BBI.log("The function name you specified does not exist.", false);</code></pre>
	</div>
</div>

## map

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.map ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Values passed to this method will be saved in BBI's <em>public</em> scope, allowing its various extensions, apps, and actions to access them. (To set <em>private</em> keys, use <a href="/bbi/reference/window-methods/#bbi">BBI()</a>, instead.)</p>
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
    					<td class="name">key</td>
    					<td class="type">String</td>
    					<td>
    					    <p>The name of the public property. While this method does check to make sure you're not overwriting something that's already in use, the following keys are reserved:</p>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						extension
            					</li>
                				<li class="list-group-item">
            						instantiate
            					</li>
                				<li class="list-group-item">
            						jQuery
            					</li>
                				<li class="list-group-item">
            						helper
            					</li>
                				<li class="list-group-item">
            						info
            					</li>
                				<li class="list-group-item">
            						isAdminView
            					</li>
                				<li class="list-group-item">
            						isDebugMode
            					</li>
                				<li class="list-group-item">
            						isPageEditor
            					</li>
                				<li class="list-group-item">
            						isPartEditor
            					</li>
                				<li class="list-group-item">
            						log
            					</li>
                				<li class="list-group-item">
            						storage
            					</li>
                				<li class="list-group-item">
            						attach
            					</li>
                				<li class="list-group-item">
            						olx
            					</li>
                				<li class="list-group-item">
            						require
            					</li>
                				<li class="list-group-item">
            						register
            					</li>
                				<li class="list-group-item">
            						apps
            					</li>
            				</ul>
    					</td>
    				</tr>
    				<tr>
        				<td class="name">value</td>
    					<td class="type">Various</td>
        				<td>The value to set.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>First, set a public property of BBI:</h4>
        <pre><code class="language-javascript">BBI.map("myData", {
	first: "Jayne",
	last: "Cobb"
});</code></pre>
        <h4>Then, access the property, via:</h4>
        <pre><code class="language-javascript">console.log(BBI.myData.first); // prints, "Jayne"</code></pre>
	</div>
</div>

## on

This method allows you to insert code at specific points during BBI's initialization.

<p class="alert alert-info">This method may only be used during BBI's initialization, specifically when dealing with extensions. To learn more about extensions and how they're built, go to the <a href="/bbi/contributing/">Contributing</a> section.</p>

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
    					    <p>The hook attribute can be one of the following:</p>
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

## options

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.options ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns BBI's global options. This method may also return a specific item from the options array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
		<div class="alert alert-info">
    		<h4><strong>What's the difference between defaults, options, and settings?</strong></h4>
    		<div class="table-responsive">
        		<table class="table table-parameters">
        		    <tbody>
        				<tr>
        					<td class="name">defaults</td>
        					<td>The defaults set by BBI's extensions.</td>
        				</tr>
        				<tr>
        					<td class="name">options</td>
        					<td>Custom properties set by the developer.</td>
        				</tr>
        				<tr>
        					<td class="name">settings</td>
        					<td>The defaults and options merged into a single object.</td>
        				</tr>
        			</tbody>
        		</table>
    		</div>
		</div>
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
    					<td class="name">key</td>
    					<td class="type">String</td>
    					<td>(Optional) The name of the property to set</td>
    				</tr>
    				<tr>
    					<td class="name">value</td>
    					<td class="type">Various</td>
    					<td>(Optional) The value to set</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Get all options:</h4>
        <pre><code class="language-javascript">var options = BBI.options();</code></pre>
        <h4>Get one option:</h4>
        <pre><code class="language-javascript">var isDebug = BBI.options("debug");</code></pre>
        <h4>Set an option's value:</h4>
        <pre><code class="language-javascript">BBI.options("debug", true);</code></pre>
	</div>
</div>

## register

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.register ( Object definition )</code></h4>
	</div>
	<div class="panel-body">
		<p>Creates (and returns) a custom application object, within the global BBI namespace.</p>
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
        				<td class="name">definition</td>
    					<td class="type">Object</td>
        				<td>
            				<p>The following properties can be passed to the register method:</p>
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">alias</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							(Required) The name given to your application. Avoid special characters.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">author</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							(Required) First and last name of the author that wrote this customization file
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">client</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							(Optional) SalesForce Account Name for the client that owns this customization file
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">created</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							(Optional) The date this file was created, yyyy/mm/dd
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">requires</h4>
            						<p>
            							<span class="text-muted">Type: Array|Object</span><br>
            							(Optional) Tell the application what assets are required before initializing.
            							The same assets are entered in the <a href="#require">BBI.require()</a> method, below.
            							By default, stylesheets will also be loaded for each respective asset (if it exists).
            							To disable this feature, pass a hash Object for each asset, instead of a single-level array.
            							You can see an example of this below, under "Examples".
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">assignment_numbers</h4>
            						<p>
            							<span class="text-muted">Type: String</span><br>
            							(Optional) A comma-sparated list of all SalesForce Assignment Numbers associated with this application. The assignent numbers are found on the assignments' detail pages.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">changelog</h4>
            						<p>
            							<span class="text-muted">Type: Object</span><br>
            							(Optional) Lists any changes to the custom file, specifying <code>author</code>, <code>date</code>, and <code>notes</code>
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Basic usage:</h4>
        <pre><code class="language-javascript">var app = BBI.register({
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
});</code></pre>
        <h4>Require certain assets:</h4>
        <pre><code class="language-javascript">var app = BBI.register({
    alias: "MyApp",
    author: "Jayne Cobb",
    requires: ["slideset", "cookie"]
});</code></pre>
        <h4>Require assets, but don't load their stylesheets:</h4>
        <pre><code class="language-javascript">var app = BBI.register({
    alias: "MyApp",
    author: "Jayne Cobb",
    requires: {
    	assets: ["slideset", "cookie"],
    	loadCSS: false
    }
});</code></pre>
	</div>
</div>

## require

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.require ( Array assets, Function callback, Boolean includeCSS, String jQueryParent )</code></h4>
	</div>
	<div class="panel-body">
		<p>Loads required libraries onto the page, before executing a callback.</p>
        <p class="alert alert-info"><strong>Asset Dependencies:</strong><br>If you specify any asset, its dependencies will automatically be loaded as well, so you don't need to keep track of which assets are required, and in what order.</p>
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
        				<td class="name">assets</td>
    					<td class="type">Array</td>
        				<td>
            				<p>An array of assets' keys. The following keys are acceptable. The source files listed below are located in the <a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services/tree/master/assets" target="_blank">GMBU&#95;Interactive&#95;Services GitHub repository</a>.</p>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">accordion-content</h4>
            						<p>accordion-content/2.0.0/accordion-content.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bb-twitter-feed</h4>
            						<p>bb-twitter-feed/jquery.bb-twitter-feed.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-carousel</h4>
            						<p>bbnc-custom-parts/bbnc-carousel/1.0.0/bbnc-carousel.custom-part.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-carousel-2.0.0</h4>
            						<p>bbnc-custom-parts/bbnc-carousel/2.0.0/bbnc-carousel.custom-part.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-donation</h4>
            						<p>bbnc-donation/bbnc-donation.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-localize-parts</h4>
            						<p>bbnc-localize-parts/bbnc-localize-parts.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-mobile</h4>
            						<p>bbnc-mobile/bbnc-mobile.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-page-mapper</h4>
            						<p>bbnc-page-mapper/bbnc-page-mapper.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">bbnc-virtual-tour</h4>
            						<p>bbnc-virtual-tour/jquery.bbnc-virtual-tour.min.js<br>bbnc-virtual-tour/bbnc-virtual-tour.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">cookie</h4>
            						<p>cookie/cookie.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">flickr-gallery</h4>
            						<p>flickr-gallery/flickr-gallery.jquery.min.js<br>flickr-gallery/flickr-gallery.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">font-resizer</h4>
            						<p>font-resizer/font-resizer.jquery.min.js</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">google-drive-api</h4>
            						<p>google-drive-api/google-drive-api.jquery.min.js</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">google-maps</h4>
            						<p>google-maps/google-maps.jquery.min.js</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">handlebars</h4>
            						<p>handlebars/1.3.0/handlebars.min.js</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">handlebars-helpers</h4>
            						<p>handlebars-helpers/1.0.0/handlebars-helpers.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">hover-intent</h4>
            						<p>hover-intent/jquery.hover-intent.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jquery-easing</h4>
            						<p>jquery-easing/1.3.0/jquery.easing.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jquery-scroll-to</h4>
            						<p>jquery-scroll-to/jquery.scrollTo.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jquery-tools</h4>
            						<p>jquery-tools/1.2.5/jquery-tools.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jquery-placeholder</h4>
            						<p>jquery-placeholder/jquery.placeholder.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jquery-waypoints</h4>
            						<p>jquery-waypoints/jquery.waypoints.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">jplayer</h4>
            						<p>jplayer/jquery.jplayer.min.js<br>jplayer/jplayer.blue.monday.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">lawnchair</h4>
            						<p>lawnchair/lawnchair.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">mega-menu</h4>
            						<p>mega-menu/1.0.0/mega-menu.jquery.min.js<br>mega-menu/1.0.0/mega-menu.min.css</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">moment</h4>
            						<p>moment/2.6.0/moment.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">off-canvas-menu</h4>
            						<p>off-canvas-menu/1.0.0/off-canvas-menu.jquery.min.js<br>off-canvas-menu/1.0.0/off-canvas-menu.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">owl-carousel</h4>
            						<p>owl-carousel/2.0.0/owl.carousel.min.js<br>owl-carousel/2.0.0/owl.carousel.min.css</p>
                            	</li>
                                <li class="list-group-item">
            						<h4 class="list-group-item-heading">parse-rss</h4>
            						<p>parse-rss/parse-rss.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">png-fix</h4>
            						<p>png-fix/png-fix.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">sessvars</h4>
            						<p>sessvars/1.0.0/sessvars.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">simple-carousel</h4>
            						<p>simple-carousel/1.0.0/simple-carousel.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">simple-carousel-2.0.0</h4>
            						<p>simple-carousel/2.0.0/simple-carousel.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">slideset</h4>
            						<p>slideset/2.0.0/slideset.jquery.min.js<br>slideset/2.0.0/slideset.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">slideset-1.0.0</h4>
            						<p>slideset/1.0.0/slideset.jquery.min.js<br>slideset/1.0.0/slideset.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">swipebox</h4>
            						<p>swipebox/swipebox.jquery.min.js<br>swipebox/swipebox.min.css</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">xdomainrequest</h4>
            						<p>xdomainrequest/1.0.0/jquery.xdomainrequest.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">youtube-gallery</h4>
            						<p>youtube-gallery/youtube-gallery.jquery.min.js</p>
                            	</li>
                            	<li class="list-group-item">
            						<h4 class="list-group-item-heading">youtube-tv</h4>
            						<p>youtube-tv/ytv.min.js<br>youtube-tv/ytv.min.css</p>
                            	</li>
            				</ul>
        				</td>
    				</tr>
    				<tr>
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>(Optional) The function to execute when the assets are loaded. This function receives a reference to the version of jQuery the assets were appended to (see "jQueryParent", below).</td>
    				</tr>
    				<tr>
    					<td class="name">includeCSS</td>
    					<td class="type">Boolean</td>
    					<td>(Optional) By default, a stylesheet will be loaded for each respective asset (if applicable). To disable this feature, set to `false`. Default: true.</td>
    				</tr>
    				<tr>
    					<td class="name">jQueryParent</td>
    					<td class="type">String</td>
    					<td>
    					    <p>(Optional) The name of the object that contains the jQuery version you wish to attach the assets to. Assets loaded via the require method are automatically appended to the version of jQuery being used by BBI.</p>
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">namespace (default)</h4>
            						<p>Add the assets to BBI's jQuery.</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">window</h4>
            						<p>Add the assets to  Window's jQuery.</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">yahoo</h4>
            						<p>Add the assets to Luminate's Yahoo jQuery.</p>
            					</li>
            				</ul>
    					</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Basic usage:</h4>
        <pre><code class="language-javascript">BBI.require(['slideset'], function ($) {
    $('table.slide').SlideSet();
});</code></pre>
        <h4>Load the assets, but append them to Window's jQuery:</h4>
        <pre><code class="language-javascript">BBI.require(['slideset'], function (win$) {
	win$('table.slide').SlideSet();
}, true, "window");</code></pre>
        <h4>Load the assets, but append them to Luminate's Yahoo jQuery. Also, don't include the asset's stylesheets!</h4>
        <pre><code class="language-javascript">BBI.require(['slideset'], function (yahoo$) {
	yahoo$('table.slide').SlideSet();
}, false, "yahoo");</code></pre>
	</div>
</div>

## settings

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">BBI.settings ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns BBI's global settings. This method may also return a specific item from the settings array if a key is provided. If the second parameter is specified (value), this will overwrite the existing key's value.</p>
		<div class="alert alert-info">
    		<h4><strong>What's the difference between defaults, options, and settings?</strong></h4>
    		<div class="table-responsive">
        		<table class="table table-parameters">
        		    <tbody>
        				<tr>
        					<td class="name">defaults</td>
        					<td>The defaults set by BBI's extensions.</td>
        				</tr>
        				<tr>
        					<td class="name">options</td>
        					<td>Custom properties set by the developer.</td>
        				</tr>
        				<tr>
        					<td class="name">settings</td>
        					<td>The defaults and options merged into a single object.</td>
        				</tr>
        			</tbody>
        		</table>
    		</div>
		</div>
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
    					<td class="name">key</td>
    					<td class="type">String</td>
    					<td>(Optional) The name of the property to set</td>
    				</tr>
    				<tr>
    					<td class="name">value</td>
    					<td class="type">Various</td>
    					<td>(Optional) The value to set</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Get all settings:</h4>
        <pre><code class="language-javascript">var settings = BBI.settings();</code></pre>
        <h4>Get one settings:</h4>
        <pre><code class="language-javascript">var isDebug = BBI.settings("debug");</code></pre>
        <h4>Set a settings value:</h4>
        <pre><code class="language-javascript">BBI.settings("debug", true);</code></pre>
	</div>
</div>

## yield

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.yield ( Function callback )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method is only available within the Window's <code>bbiAsyncInit</code> function.</p>
        <p>Essentially, it allows any number of bbiAsyncInit functions to fire on the same page.</p>
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
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>A reference to another bbiAsyncInit function on the page</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">// Store a reference to a previous instance of bbiAsyncInit:
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
