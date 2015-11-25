---
layout: layout-sidebar
name: Helper methods
order: 4
description: Methods to make your job easier
icon: fa fa-medkit
---

# Helper Methods

Helper methods are commonly used JavaScript methods that you can use on your projects. A helper method (in this case) is a _utility_ function that has no direct relationship with BBI, but is common enough to merit its inclusion.

## arrayFromString

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.arrayFromString ( String serial, String delimiter)</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an array based on a specified delimiter. The results are also trimmed automatically.</p>
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
    					<td class="name">serial</td>
    					<td class="type">String</td>
    					<td>A string to separate into an array</td>
    				</tr>
    				<tr>
        				<td class="name">delimiter</td>
    					<td class="type">String</td>
        				<td>(Optional) The string to use to separate the serial into parts. Default: ","</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">var myList = "orange/yellow/green";
var myArr = BBI.helper.arrayFromString(myList, "/");
alert(myArr[0]); // "orange"</code></pre>
	</div>
</div>

## clone

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.clone ( Various variable )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns a duplicate of a variable or object.</p>
		<p class="alert alert-info">Useful when you need to alter the contents of an array, but keep its original state intact.</p>
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
    					<td class="name">variable</td>
    					<td class="type">Various</td>
    					<td>Anything you wish to clone (most likely an array or object).</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">var fruits = { red: "apple", green: "lime" };
var temp = BBI.helper.clone(fruits);

var fruit;
while (fruit = temp.pop()) {
	console.log(fruit);
}</code></pre>
	</div>
</div>

## data

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.data ( Object element )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an object storing all HTML attributes for an element, in camelCase.</p>
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
    					<td class="name">element</td>
    					<td class="type">HTML DOM Element</td>
    					<td>The element that holds the attributes you wish to retrieve</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>Given the following HTML:</h4>
		<pre><code class="language-markup">&lt;div id="wrapper" data-api-key="myKey">
    &lt;!-- ... -->
&lt;/div></code></pre>
		<h4>The following JavaScript will return the element's attributes:</h4>
        <pre><code class="language-javascript">var element = document.getElementById("wrapper");
var attributes = BBI.helper.data(element);
console.log(attributes.id); // prints 'wrapper'
console.log(attributes.apiKey); // prints 'myKey'</code></pre>
	</div>
</div>

## doOnFind

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.doOnFind ( String selector, Function callback, Integer duration )</code></h4>
	</div>
	<div class="panel-body">
		<p>Executes a callback when a certain element appears on the page.</p>
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
    					<td class="name">selector</td>
    					<td class="type">String</td>
    					<td>The jQuery selector for the element to look for</td>
    				</tr>
    				<tr>
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>This function is called when the element is found</td>
    				</tr>
    				<tr>
    					<td class="name">duration</td>
    					<td class="type">Integer</td>
    					<td>(Optional) The number of milliseconds to wait before quitting the search. Default: 10000 (10 seconds).</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>The following JavaScript will return the element's attributes:</h4>
        <pre><code class="language-javascript">BBI.helper.doOnFind('#my-div', function () {
	// The div was found, do something!
}, 15000);</code></pre>
	</div>
</div>

## executeFunctionByName

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.executeFunctionByName ( String function, Array arguments, Object context )</code></h4>
	</div>
	<div class="panel-body">
		<p>Executes a function based on its name alone.</p>
        <p class="alert alert-info">Useful when you have the function's name stored as a variable, and need to execute it inside a certain context.</p>
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
    					<td class="name">function</td>
    					<td class="type">String</td>
    					<td>The name of the function to execute</td>
    				</tr>
    				<tr>
    					<td class="name">arguments</td>
    					<td class="type">Array</td>
    					<td>(Optional) Arguments to pass to the function</td>
    				</tr>
    				<tr>
    					<td class="name">context</td>
    					<td class="type">Object</td>
    					<td>(Optional) The object that contains the function.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>Execute a function in a certain context:</h4>
        <pre><code class="language-javascript">BBI.helper.executeFunctionByName("sayHello", [], MyApp.actions); // Executes MyApp.actions.sayHello</code></pre>
        <h4>Or, just pass the entire context chain at once:</h4>
        <pre><code class="language-javascript">BBI.helper.executeFunctionByName("MyApp.actions.sayHello");</code></pre>
	</div>
</div>

## functionExists

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.functionExists ( String function, Object context )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns <code>true</code> or <code>false</code> if the named function exists. The second parameter is optional, but allows you to pass in the named function's context.</p>
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
    					<td class="name">function</td>
    					<td class="type">String</td>
    					<td>The name of the function to check.</td>
    				</tr>
    				<tr>
    					<td class="name">context</td>
    					<td class="type">Object</td>
    					<td>(Optional) The object that contains the function.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>Check if a function exists before executing it:</h4>
        <pre><code class="language-javascript">if (BBI.helper.functionExists("myFunction")) {
    myFunction();
}</code></pre>
        <h4>Pass in the function's context, if it belongs to an object:</h4>
        <pre><code class="language-javascript">if (BBI.helper.functionExists("init", MyApp.actions.sayHello)) {
    MyApp.actions.sayHello.init();
}</code></pre>
        <h4>Or, just pass the entire context chain at once:</h4>
        <pre><code class="language-javascript">if (BBI.helper.functionExists("MyApp.actions.sayHello.init")) {
    MyApp.actions.sayHello.init();
}</code></pre>
	</div>
</div>

## getUrlVars

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.getUrlVars ( String url )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an array representing the variables in the URL string. If a string is passed as an argument, the variables will be derived from the string instead.</p>
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
    					<td class="name">url</td>
    					<td class="type">String</td>
    					<td>(Optional) A URL string to retrieve attributes from, instead of the actual URL</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>Get attributes from URL:</h4>
        <pre><code class="language-javascript">var variables = BBI.helper.getUrlVars();
var pageId = variables["pid"];</code></pre>
        <h4>Get attributes from URL string:</h4>
        <pre><code class="language-javascript">var variables = BBI.helper.getUrlVars("http://www.domain.org/?pid=5");
var pageId = variables["pid"];</code></pre>
        <h4>Get a single attribute, all in one statement:</h4>
        <pre><code class="language-javascript">var pageId = BBI.helper.getUrlVars()["pid"];</code></pre>
	</div>
</div>

## isMobile

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.isMobile ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an object containing functions to check for specific mobile platforms; specifically: Android, BlackBerry, iOS, Opera, and Windows mobile.</p>
		<h3>Examples</h3>
        <pre><code class="language-javascript">if (BBI.helper.isMobile.any()) {
	// We're on a mobile device!
}

if (BBI.helper.isMobile.Android()) {
	// We're on an Android device!
}</code></pre>
	</div>
</div>

## loadScript

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.loadScript ( String source, Function callback )</code></h4>
	</div>
	<div class="panel-body">
		<p>Loads a script from a URL onto the page.</p>
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
    					<td class="name">source</td>
    					<td class="type">String</td>
    					<td>The source of the JavaScript file.</td>
    				</tr>
    				<tr>
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>(Optional) The function to call after the script has loaded.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">BBI.helper.loadScript("myscript.js", function () {
	// Do something after load...
});</code></pre>
	</div>
</div>

## objectLength

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.objectLength ( Object object )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the number of top-level properties in an Object.</p>
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
    					<td class="name">object</td>
    					<td class="type">Object</td>
    					<td>The object whose properties you wish to count</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">var settings = { 
    debug: true, 
    name: "Marsha", 
    gender: "Female"
};

var length = BBI.helper.objectLength(settings); // returns 3</code></pre>
	</div>
</div>

## scrollTo

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.scrollTo ( String target, Integer speed, Function callback )</code></h4>
	</div>
	<div class="panel-body">
		<p>Pans the screen to a certain element on the page.</p>
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
    					<td class="name">target</td>
    					<td class="type">String</td>
    					<td>The jQuery selector of the element to pan to</td>
    				</tr>
    				<tr>
    					<td class="name">speed</td>
    					<td class="type">Integer</td>
    					<td>(Optional) How quickly, in milliseconds, to pan to the element. Default: 500.</td>
    				</tr>
    				<tr>
    					<td class="name">callback</td>
    					<td class="type">Function</td>
    					<td>(Optional) The function to call after the pan is complete.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">BBI.helper.scrollTo('#my-div', 500, function () {
	// Do something after the pan completes...
});</code></pre>
	</div>
</div>

## urlContains

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.helper.urlContains ( String needle )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns `true` or `false` if the given "needle" exists in the URL ("haystack").</p>
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
    					<td class="name">needle</td>
    					<td class="type">String</td>
    					<td>The string to find in the URL</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">if (BBI.helper.urlContains("faf/register.asp")) {
    alert("We're on the FAF registration page!");
}</code></pre>
	</div>
</div>
