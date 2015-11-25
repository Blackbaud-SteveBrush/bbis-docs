---
layout: layout-sidebar
name: Storage methods
description: Methods to make localStorage a cinch
icon: fa fa-floppy-o
order: 5
---

# Storage Methods

BBI includes a public property named "storage" that allows you to get and set data using key-value pairs. The storage object is an alias for the browser's sessionStorage, so there may be some browser limitations.

## clear

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.storage.clear ( String key )</code></h4>
	</div>
	<div class="panel-body">
		<p>Deletes a stored field by name (key), or deletes the entire storage object if a key is not provided.</p>
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
    					<td>(Optional) The name of the storage field you wish to delete.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Delete a specific field:</h4>
        <pre><code class="language-javascript">BBI.storage.clear("myVar");</code></pre>
        <h4>Delete all fields:</h4>
        <pre><code class="language-javascript">BBI.storage.clear();</code></pre>
	</div>
</div>

## expose

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.storage.expose ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an object representing all fields in storage.</p>
		<h3>Examples</h3>
        <h4>Description...</h4>
        <pre><code class="language-javascript">BBI.storage.set("foo", "bar");
BBI.storage.expose(); // prints { foo: "bar" }</code></pre>
	</div>
</div>

## get

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.storage.get ( String key )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the value of a storage field by its key.</p>
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
    					<td>The name of the field to return.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">var value = BBI.storage.get("myVar");</code></pre>
	</div>
</div>

## set

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">BBI.storage.set ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Sets a storage field's value.</p>
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
    					<td>The name of the field to set.</td>
    				</tr>
    				<tr>
    					<td class="name">value</td>
    					<td class="type">Various</td>
    					<td>The value to set to the field.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-javascript">BBI.storage.set("myVar", 15);</code></pre>
	</div>
</div>
