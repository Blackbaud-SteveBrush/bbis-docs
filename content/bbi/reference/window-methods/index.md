---
layout: layout-sidebar
name: Window methods
order: 1
---

# Window Methods
BBI has very few Window methods. This is intentional, to avoid as many code collisions as possible. In the cases below, a Window method is absolutely required for various stages of BBI's execution cycle.

## .bbiAsyncInit

<div class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">window.bbiAsyncInit</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Provides the window an access point to pass options to the namespace, before it's built. The method receives a "mini" version of the namespace that can be initialized manually.</p>
			<h4>Example:</h4>
			<pre class="line-numbers"><code class="language-javascript">(function (o) {
	window.bbiAsyncInit = function (bbi) {
		bbi.yield(o).init({
			debug: true
		});
	}
})(window.bbiAsyncInit);</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .bbiGetInstance()

<div id="method-bbi-get-instance" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">window.bbiGetInstance()</h4>
			<div class="panel-subtitle">Returns: <em>BBI</em></div>
		</div>
		<div class="panel-body">
			<p>Returns the public namespace variable (in the default case, <code>window.BBI</code>).</p>
			<p>This method is especially useful when you do not know what the namespace variable is called, or if it has been explicitly changed by another developer, especially in the case of <a href="#">Namespace Conflicts</a>.</p>
			<h4>Example:</h4>
			<pre class="line-numbers"><code class="language-javascript">var bbi = window.bbiGetInstance();

bbi.log("Hello, World!");
</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>

## .BBI()

<div class="panel panel-primary">
	<div class="panel-heading">
		<h4 class="panel-title">window.BBI( <em>key, value</em> )</h4>
		<div class="panel-subtitle">Returns: <em>BBI, value</em></div>
	</div>
	<div class="panel-body">
		<p>BBI itself is actually a "getter/setter" method. Values passed to this method will be saved in BBI's <em>private</em> scope, allowing its various extensions, apps, and actions to access them. (To set <em>public</em> keys, use <code>BBI.map()</code>, instead.)</p>
		<p>
			<strong>Reserved Keys</strong><br>
			These keys are currently in use by BBI and should not be set:<br>
			<em>jQuery</em></br>
			<em>helper</em></br>
			<em>debug</em></br>
			<em>events</em></br>
			<em>storage</em></br>
			<em>bbnc</em></br>
			<em>luminate</em></br>
			<em>online-express</em></br>
			<em>assets-handler</em></br>
			<em>app</em></br>
			<em>applications-handler</em></br>
			<em>applications-script-handler</em></br>
			<em>applications-tag-handler</em>
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
var data = {
	first: "Jayne",
	last: "Cobb"
};
BBI("myData", data);

// Then, in your action, access the data:
BBI("myData").first; // produces, "Jayne"</code></pre>
	</div>
</div>
