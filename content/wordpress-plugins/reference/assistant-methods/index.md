---
layout: layout-sidebar
name: Assistant
---

<div class="page-header">
    <h1>Plugin Assistant `$blackbaud`</h1>
</div>

The Plugin Assistant is represented as the global object `$blackbaud`. All of the following methods belong to this object and can be used within your plugins.

## do_shortcode

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title">
		    <code class="language-php">string $blackbaud->do&#95;shortcode ( string $post_content )</code>
		 </h4>
	</div>
	<div class="panel-body">
		<p>Returns the $post_content after its shortcodes have been processed. This is the same as WordPress's own `do_shortcode` method, only this method also enqueue's any assets that are required for it to operate.</p>
		<p>For example, if you forged an asset that should only appear for a certain shortcode (i.e., `for_shortcode="my_shortcode"`), those assets would not be included in a standard WordPress do_shortcode. The shortcode would create the appropriate HTML, but any CSS/JS associated with the shortcode would not be included. `$blackbaud->do_shortcode` was designed to handle this requirement.</p>
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
    					<td class="name">post_content</td>
    					<td class="type">string</td>
    					<td>The WordPress Post content, generally derived in the Loop.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
		<h4>Look for a shortcode in the Post content and automatically enqueu any required assets:</h4>
        <pre><code class="language-php">echo $blackbaud->do&#95;shortcode(get&#95;the&#95;content());</code></pre>
	</div>
</div>

## get_settings_field

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">string|boolean $blackbaud->get&#95;settings&#95;field ( string $option_group, string $id )</code></h4>
	</div>
	<div class="panel-body">
		<p>The Blackbaud Plugin Assistant stores WordPress settings (or "options") as arrays. To retrieve a WordPress option that was set by one of your Plugins, you must provide the setting's `$option_group` and its `$id`.</p>
		<p>This method will either return the setting's value (string), or it will return `false`.</p>
		<p class="alert alert-info">Note: This is extremely similar to WordPress's own <a href="https://codex.wordpress.org/Function_Reference/get_option" target="&#95;blank">get&#95;option</a> method. The only difference is it handles the array aspects for you.</p>
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
    					<td class="name">option_group</td>
    					<td class="type">string</td>
    					<td>The WordPress option group name, used in <a href="https://codex.wordpress.org/Function&#95;Reference/register&#95;setting" target="&#95;blank">register&#95;setting</a>.</td>
    				</tr>
    				<tr>
    					<td class="name">id</td>
    					<td class="type">string</td>
    					<td>The WordPress field ID, used in <a href="https://codex.wordpress.org/Function&#95;Reference/add&#95;settings&#95;field" target="&#95;blank">add&#95;settings_field</a></td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>In your plugin's PHP file:</h4>
        <pre><code class="language-php">$setting&#95;val = $blackbaud->get&#95;settings&#95;field('some&#95;option&#95;group', 'some&#95;field&#95;id');</code></pre>
	</div>
</div>


## get_plugin

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Plugin $blackbaud->get_plugin ( string $alias )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method returns the Plugin object that matches the given alias. This is the same value used in the <a href="#register">register</a> method.</p>
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
    					<td class="type">string</td>
    					<td>This is the same alias used in the `register` method</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>In your plugin's PHP file:</h4>
        <pre><code class="language-php">$plugin = $blackbaud->get_plugin('my&#95;plugin&#95;alias');</code></pre>
	</div>
</div>


## last_plugin

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackaud\Plugin $blackbaud->last_plugin</code></h4>
	</div>
	<div class="panel-body">
		<p>This property stores a reference to the last Plugin object instantiated.</p>
		<h3>Examples</h3>
        <h4>In your plugin's PHP file:</h4>
        <pre><code class="language-php">$plugin = $blackbaud->last_plugin;
echo $plugin->alias;</code></pre>
	</div>
</div>


## plugins

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">array $blackbaud->plugins</code></h4>
	</div>
	<div class="panel-body">
		<p>This property stores an array of all Plugins instantiated on the page.</p>
		<h3>Examples</h3>
        <h4>In your plugin's PHP file:</h4>
        <pre><code class="language-php">$plugins = $blackbaud->plugins;
var_dump($plugins['my_plugin_alias']);</code></pre>
	</div>
</div>


## register

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Plugin $blackbaud->register ( function $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method registers and returns a new blackbaud\Plugin object.</p>
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
    					<td class="type">function, array</td>
    					<td>
    					    <p>The register method accepts one argument in the form of a function. This function must return an array with the following key-value pairs:</p>
    					    <ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">alias</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							A unique string to designate your plugin. This will most likely be the same as your plugin's directory (using "snake" case: "my_plugin").
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">text_domain</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The same string used to register the text_domain at the top of your plugin's main PHP file (<a href="https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#text-domains" target="&#95;blank">WordPress Plugin Documentation</a>)
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">plugin_file</h4>
            						<p>
            							<span class="text-muted">Type: file resource</span><br>
            							A reference to your WordPress plugin's <a href="https://codex.wordpress.org/Writing&#95;a&#95;Plugin#Plugin&#95;Files" target="_blank">main PHP file</a>
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">plugin_basename</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The WordPress "basename" of your plugin. This is a single string that combines both your plugin's directory, and it's <a href="https://codex.wordpress.org/Writing&#95;a&#95;Plugin#Plugin&#95;Files" target="_blank">main PHP file</a>. It might look like: "my&#95;plugin/my&#95;plugin.php".
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">url_root (optional)</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The public URL for your plugin's asset folder (.js, .css, .jpg, etc.). This string must include the URL's protocol and domain (e.g., "http://www.domain.org/wp_content/..."). This property is useful for "forging" assets.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">templates_directory (optional)</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The server path to your HTML templates directory. It will look something like "/home/var/www/...". This directory is used by your blackbaud\Plugin's `get_template` method.
            						</p>
            					</li>
    						</ul>
    					</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>my-plugin/my-plugin.php</h4>
        <pre><code class="language-php">/&#42;
Plugin Name: My Plugin
Version: 1.0.0
Text Domain: my-plugin-text-domain
&#42;/

function my&#95;plugin&#95;init($blackbaud) {

    // Register your custom plugin.
    $plugin = $blackbaud->register(function ($blackbaud) {
        return array(
            'alias'               => 'my&#95;plugin&#95;alias',
            'text&#95;domain'         => 'my-plugin-text-domain',
            'plugin&#95;file'         => &#95;&#95;FILE&#95;&#95;,
            'plugin&#95;basename'     => plugin&#95;basename(&#95;&#95;FILE&#95;&#95;),
            'url&#95;root'            => plugins&#95;url('assets/', &#95;&#95;FILE&#95;&#95;),
            'templates&#95;directory' => plugin&#95;dir&#95;path(&#95;&#95;FILE&#95;&#95;) . 'templates/'
        );
    });

}

add&#95;action('blackbaud&#95;ready', 'my&#95;plugin_init');</code></pre>
	</div>
</div>
