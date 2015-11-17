---
layout: layout-sidebar
name: Plugin
---

<div class="page-header">
    <h1>Plugin Methods & Properties</h1>
</div>

## expose_setting

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title">
		    <code class="language-php">void $plugin->expose&#95;setting ( string $key, various $value )</code>
		 </h4>
	</div>
	<div class="panel-body">
		<p>Prints PHP options as JavaScript objects, to be used on the front-end. Options are accessed via `window.BBWP.plugins`.</p>
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
    					<td class="type">string</td>
    					<td>A unique string to designate your option. This string must not contain spaces or special characters beyond a dash or underscore.</td>
    				</tr>
    				<tr>
    					<td class="name">value</td>
    					<td class="type">string</td>
    					<td>Any value that parses successfully into JSON. This can be any literal value, or a PHP array.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>In your plugin's PHP file, choose a setting to expose to the front-end:</h4>
        <pre><code class="language-php">$plugin->expose&#95;setting('someSetting', array( "foo" => "bar" ));</code></pre>
        <h4>Then, in your custom JavaScript file, you can access your exposed settings via:</h4>
        <pre><code class="language-javascript">(function () {
    // Retrieve settings for your plugin:
    var settings = BBWP.plugins.my&#95;plugin&#95;alias;

    // Prints "bar":
    console.log(settings.someSetting.foo);
}());</code></pre>
	</div>
</div>

<p class="back-to-top"><a href="#top">Back to top ^</a></p>
