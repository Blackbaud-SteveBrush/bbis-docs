---
layout: layout-sidebar
name: $blackbaud Methods
---

# $blackbaud Methods & Properties

## register

<div class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">
			    <code class="language-php">blackbaud\Plugin $blackbaud->register ( function $options )</code>
            </h4>
		</div>
		<div class="panel-body">
			<p>Description of function...</p>
			<div class="well">
				<p>
					<strong>options</strong><br>
					<span class="text-muted">Type: function</span><br>
					The register method accepts one argument in the form of a function. This function must return an array with the following properties.
					<ul class="list-group">
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>alias</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>text_domain</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>plugin_file</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: file resource</span><br>
    							Description...
    						</p>
    					</li>
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>plugin_basename</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>url_root</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>templates_directory</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
					</ul>
				</p>
			</div>
			<p><strong>plugins/my-plugin/my-plugin.php</strong></p>
            <pre><code class="language-php">/&#42;
  Plugin Name: My Plugin
  Version: 1.0.0
  Text Domain: my&#95;plugin&#95;text&#95;domain
&#42;/

function my&#95;plugin&#95;init($blackbaud) {

    // Register your custom plugin.
    $plugin = $blackbaud->register(function ($blackbaud) {
        return array(
            'alias'               => 'my&#95;plugin&#95;alias',
            'text&#95;domain'         => 'my&#95;plugin&#95;text&#95;domain',
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
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>


## get_plugin

<div class="panel-wrapper">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h4 class="panel-title">
			    <code class="language-php">blackbaud\Plugin $blackbaud->get_plugin ( string $alias )</code>
			 </h4>
		</div>
		<div class="panel-body">
			<p>Description of function...</p>
			<div class="well">
				<p>
					<strong>variable</strong><br>
					<span class="text-muted">Type: string</span><br>
					Description of variable...
					<ul class="list-group">
    					<li class="list-group-item">
    						<h5 class="list-group-item-heading">
    							<code>alias</code>
    						</h5>
    						<p>
    							<span class="text-muted">Type: string</span><br>
    							Description...
    						</p>
    					</li>
					</ul>
				</p>
			</div>
			<p><strong>Example:</strong></p>
            <pre class="line-numbers"><code class="language-php">$plugin = $blackbaud->get_plugin('my&#95;plugin&#95;alias');</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>
