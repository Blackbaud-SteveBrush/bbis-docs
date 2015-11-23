---
layout: layout-sidebar
name: Window methods
order: 1
---

# Window Methods
BBI has very few Window methods. This is intentional, to avoid as many code collisions as possible. In the cases below, a Window method is absolutely required for various stages of BBI's execution cycle.

## bbiAsyncInit

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">window.bbiAsyncInit</code></h4>
	</div>
	<div class="panel-body">
		<p>Provides the window an access point to pass options to the namespace, before it's built. The method receives a reference to BBI that can be initialized manually.</p>
		<h3>Examples</h3>
        <pre><code class="language-javascript">window.bbiAsyncInit = function (bbi) {
	bbi.init({
		debug: true
	});
};</code></pre>
	</div>
</div>

## bbiGetInstance

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">window.bbiGetInstance ()</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the public namespace variable (in the default case, <code>window.BBI</code>).</p>
        <p>This method is especially useful when you do not know what the namespace variable is called, or if it has been explicitly changed by another developer, especially in the case of <a href="/bbi/tips/#legacy-bbi-conflicts">Namespace Conflicts</a>.</p>
		<h3>Examples</h3>
        <pre><code class="language-javascript">(function () {
    var bbi = window.bbiGetInstance();

    bbi.log("Hello, World!");
}());</code></pre>
	</div>
</div>

## BBI

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-javascript">window.BBI ( String key, Various value )</code></h4>
	</div>
	<div class="panel-body">
		<p>BBI itself is actually a "getter/setter" method. Values passed to this method will be saved in BBI's <em>private</em> scope, allowing its various extensions, apps, and actions to access them. (To set <em>public</em> keys, use <a href="/bbi/reference/bbi-methods/#map">BBI.map()</a>, instead.)</p>
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
    					    <p>The following keys are currently in use by BBI and should not be used:</p>
    					    <ul class="list-group">
            					<li class="list-group-item">jQuery</li>
                    			<li class="list-group-item">helper</li>
                    			<li class="list-group-item">debug</li>
                    			<li class="list-group-item">events</li>
                    			<li class="list-group-item">storage</li>
                    			<li class="list-group-item">bbnc</li>
                    			<li class="list-group-item">luminate</li>
                    			<li class="list-group-item">online-express</li>
                    			<li class="list-group-item">assets-handler</li>
                    			<li class="list-group-item">app</li>
                    			<li class="list-group-item">applications-handler</li>
                    			<li class="list-group-item">applications-script-handler</li>
                    			<li class="list-group-item">applications-tag-handler</li>
            				</ul>
                        </td>
    				</tr>
    				<tr>
        				<td class="name">value (optional)</td>
    					<td class="type">Various</td>
        				<td>Set a key to any valid value. Omit to return the existing value.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Description...</h4>
        <pre><code class="language-javascript">(function () {
            
    // Set the data:
    BBI("myData", {
    	first: "Jayne",
    	last: "Cobb"
    });
    
    // Then, in your action, access the data:
    var data = BBI("myData");
    console.log(data.first); // prints: "Jayne"
    
}());</code></pre>
	</div>
</div>
