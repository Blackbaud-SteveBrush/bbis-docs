---
layout: layout-sidebar
name: Storage methods
order: 5
---

# Storage Methods

BBI includes a public property named "storage" that allows you to get and set data using key-value pairs. The storage object is an alias for the browser's sessionStorage, so there may be some browser limitations.

## .clear()
<div id="method-storage-clear" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.storage.clear( <em>key</em> )</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Deletes a stored variable by name (key), or deletes the entire storage object if a key is not provided.</p>
			<div class="well">
				<p>
					<strong>key</strong> <em>(optional)</em><br>
					<span class="text-muted">Type: string</span><br>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">// Delete a specific variable
BBI.storage.clear("myVar");

// Delete the entire storage object
BBI.storage.clear();</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .expose()

<div id="method-storage-expose" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.storage.expose()</h4>
			<div class="panel-subtitle">Returns: <em>Object</em></div>
		</div>
		<div class="panel-body">
			<p>Returns an object representing the current variables in storage.</p>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">BBI.storage.set("myVar", "Hello");
BBI.storage.expose(); // returns { myVar: "Hello" }</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .get()

<div id="method-storage-clear" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.storage.get( <em>key</em> )</h4>
			<div class="panel-subtitle">Returns: <em>various</em></div>
		</div>
		<div class="panel-body">
			<p>Returns the value of a storage variable by name (key).</p>
			<div class="well">
				<p>
					<strong>key</strong><br>
					<span class="text-muted">Type: string</span><br>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">var value = BBI.storage.get("myVar"); // returns value of myVar</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>

## .set()

<div id="method-storage-set" class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">BBI.storage.set( <em>key, value</em> )</h4>
			<div class="panel-subtitle">Returns: <em>null</em></div>
		</div>
		<div class="panel-body">
			<p>Saves a variable to storage by name (key), or overwrites an existing storage variable of the same name.</p>
			<div class="well">
				<p>
					<strong>key</strong><br>
					<span class="text-muted">Type: string</span><br>
				</p>
				<p>
					<strong>value</strong><br>
					<span class="text-muted">Type: various</span><br>
				</p>
			</div>
			<h4>Examples:</h4>
            <pre class="line-numbers"><code class="language-javascript">BBI.storage.set("myVar", 15);</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#header">Back to top ^</a></p>
</div>
