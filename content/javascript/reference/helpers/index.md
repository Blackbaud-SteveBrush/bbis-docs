---
layout: layout-sidebar
name: Helper methods
order: 4
---

# Helper Methods

Helper methods are commonly used JavaScript methods that you can use on your projects. A helper method (in this case) is a _utility_ function that has no direct relationship with BBI, but is common enough to merit its inclusion.

## .arrayFromString()

<div id="method-array-from-string" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.arrayFromString( <em>string</em>, <em>delimiter</em> )</h4>
			<div class="panel-subtitle">Returns: <em>Array</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an array based on a specified delimiter. The results are also trimmed automatically.</p>
			<div class="well">
				<p>
					<strong>string</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>delimiter <em>(optional)</em></strong><br>
					<span class="text-muted">Type: string</span><br>
					<span class="text-muted">Default: ","</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">var myList = "orange/yellow/green";
var myArr = BBI.helper.arrayFromString(myList, "/");
alert(myArr[0]); // "orange"</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .clone()

<div id="method-clone" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.clone( <em>variable</em> )</h4>
			<div class="panel-subtitle">Returns: <em>Various</em></div>
		</div>
		<div class="panel-body">
			<p>Returns a duplicate of a variable or object.</p>
			<p class="alert alert-info"><span class="label label-info">NOTE</span> Useful when you need to alter the contents of an array, but keep its original state intact.</p>
			<div class="well">
				<p>
					<strong>variable</strong><br>
					<span class="text-muted">Type: any</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">var fruits = { red: "apple", green: "lime" };
var temp = BBI.helper.clone(fruits);

var fruit;
while (fruit = temp.pop()) {
	alert(fruit);
}</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .data()

<div id="method-data" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.data( <em>element</em> )</h4>
			<div class="panel-subtitle">Returns: <em>Object</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an object storing all HTML attributes for an element, in camelCase.</p>
			<div class="well">
				<p>
					<strong>element</strong><br>
					<span class="text-muted">Type: HTML DOM Element</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">var element = document.getElementById("wrapper");
var attributes = BBI.helper.data(element);
console.log(attributes.id, attributes.apiKey);</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .doOnFind()

<div id="method-do-on-find" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.doOnFind( <em>selector</em>, <em>callback</em>, <em>duration</em> )</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Executes a callback when a certain element appears on the page.</p>
			<div class="well">
				<p>
					<strong>selector</strong><br>
					<span class="text-muted">Type: string, jQuery selector</span>
				</p>
				<p>
					<strong>callback</strong><br>
					<span class="text-muted">Type: function</span>
				</p>
				<p>
					<strong>duration</strong><br>
					<span class="text-muted">Type: integer (milliseconds)</span><br>
					<span class="text-muted">Default: 10000</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">BBI.helper.doOnFind('#my-div', function () {
	// The div was found, do something!
}, 15000); // wait 15 seconds before quitting the search</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .executeFunctionByName()

<div id="method-execute-function-by-name" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.executeFunctionByName( <em>name, arguments, context</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Executes a function based on its name alone.</p>
			<p class="alert alert-info"><span class="label label-info">NOTE</span> Useful when you have the function's name stored as a variable, and need to execute it.</p>
			<div class="well">
				<p>
					<strong>name</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>arguments</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: Array, various types</span>
				</p>
				<p>
					<strong>context</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: object</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">// Pass the context object as a parameter:
BBI.helper.executeFunctionByName("sayHello", [], MyApp.actions);

// Or, just pass the entire context chain at once:
BBI.helper.executeFunctionByName("MyApp.actions.sayHello");</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .functionExists()

<div id="method-function-exists" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.functionExists( <em>function_name, context</em> )</h4>
			<div class="panel-subtitle">Returns: <em>Boolean</em></div>
		</div>
		<div class="panel-body">
			<p>
				Returns <code>true</code> or <code>false</code> if the named function exists. The second parameter is optional, but allows you to pass in the named function's context.
			</p>
			<div class="well">
				<p>
					<strong>function_name</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
				<p>
					<strong>context</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: object</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">if (BBI.helper.functionExists("MyApp.actions.example1.init")) {
    MyApp.actions.example1.init();
}

// or
if (BBI.helper.functionExists("example1.init", MyApp.actions)) {
    MyApp.actions.example1.init();
}</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .getUrlVars()

<div id="method-get-url-vars" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.getUrlVars( <em>url</em> )</h4>
			<div class="panel-subtitle">Returns: <em>Array</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an array representing the variables in the URL string. If a string is passed as an argument, the variables will be derived from the string instead.</p>
			<div class="well">
				<p>
					<strong>url</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">var variables;
var pageId;

// from url:
variables = BBI.helper.getUrlVars();
pageId = variables["pid"];

// or, from string:
variables = BBI.helper.getUrlVars("http://www.domain.org/?pid=5");
pageId = variables["pid"];

// or, for one-time use:
pageId = BBI.helper.getUrlVars()["pid"];</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .isMobile()

<div id="method-is-mobile" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.isMobile()</h4>
			<div class="panel-subtitle">Returns: <em>Object</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an object containing functions to check for specific mobile platforms; specifically: Android, BlackBerry, iOS, Opera, and Windows mobile.</p>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">if (BBI.helper.isMobile.any()) {
	// We're on a mobile device!
}
if (BBI.helper.isMobile.Android()) {
	// We're on an Android device!
}</code></pre>
		</div>
	</div>
</div>

## .loadScript()

<div id="method-load-script" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.loadScript( <em>src, callback</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Loads a script from a URL onto the page.</p>
			<div class="well">
				<p>
					<strong>src</strong><br>
					<span class="text-muted">Type: String</span>
				</p>
				<p>
					<strong>callback</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: function</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">BBI.helper.loadScript("myscript.js", function () {
	// Do something after load...
});</code></pre>
		</div>
	</div>
</div>

## .objectLength()

<div id="method-object-length" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.objectLength( <em>obj</em> )</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Returns the number of top-level properties in an Object.</p>
			<div class="well">
				<p>
					<strong>obj</strong><br>
					<span class="text-muted">Type: Object</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">var settings = {debug: true, name: "Marsha", gender: "Female"};
var length = BBI.helper.objectLength(settings); // returns 3</code></pre>
		</div>
	</div>
</div>

## .scrollTo()

<div id="method-scroll-to" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.scrollTo( <em>target</em>, <em>speed</em>, <em>callback</em> )</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Allows the screen to pan to a certain element on the page.</p>
			<div class="well">
				<p>
					<strong>target</strong><br>
					<span class="text-muted">Type: String (selector) or DOM element</span>
				</p>
				<p>
					<strong>speed <em>(optional)</em></strong><br>
					<span class="text-muted">Type: integer</span><br>
					<span class="text-muted">Default: 500 (milliseconds)</span>
				</p>
				<p>
					<strong>callback <em>(optional)</em></strong><br>
					<span class="text-muted">Type: function</span>
				</p>
			</div>
			<h4>Examples:</h4>
			<pre class="line-numbers"><code class="language-javascript">// Pass a selector:
BBI.helper.scrollTo('#my-div');

// Pass a jQuery object:
BBI.helper.scrollTo($('#my-div'));

// Do something after the scroll is complete:
BBI.helper.scrollTo('#my-div', 800, function () {
	// ...
});</code></pre>
		</div>
	</div>
</div>

## .urlContains()

<div id="method-url-contains" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.helper.urlContains( <em>keyword</em> )</h4>
		</div>
		<div class="panel-body">
			<p>Returns a boolean describing if the given keyword exists in the URL.</p>
			<div class="well">
				<p>
					<strong>keyword</strong><br>
					<span class="text-muted">Type: string</span>
				</p>
			</div>
			<h4>Examples:</h4>
<pre class="line-numbers"><code class="language-javascript">if (BBI.helper.urlContains("faf/register.asp")) {
    alert("We're on the FAF registration page!");
}</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>
