---
layout: layout-sidebar
name: $plugin
---

# $plugin: Methods & Properties
___

## expose_setting

<div class="panel-wrapper">
	<div class="panel panel-default">
		<div class="panel-heading">
			<h4 class="panel-title">
			    <code class="language-php">void $plugin->expose&#95;setting ( string $key, various $value )</code>
			 </h4>
		</div>
		<div class="panel-body">
			<p>This function prints PHP options as JavaScript objects, to be used on the front-end. It stores all options in a Window property named `BBWP.plugins`.</p>
			
			<div class="attr-definition">
				<dl>
					<dt><code class="language-php">string $key</code></dt>
					<dd>A unique string to designate your option. This string must not contain spaces or special characters beyond a dash or underscore.</dd>
					<dt><code class="language-php">various $value</code></dt>
					<dd>Any value that parses successfully into JSON. This can be any literal value, or a PHP array.</dd>
				</dl>
			</div>

			<h4>Choose a setting to expose to the front-end:</h4>
            <pre class="line-numbers"><code class="language-php">$plugin->expose&#95;setting('someSetting', array(
    "foo" => "bar", 
    "thing" => 1
));</code></pre>
            
            <h4>The following JavaScript will then be added to the page:</h4>
            <pre class="line-numbers"><code class="language-markup">&lt;script id="blackbaud-settings-bb&#95;plugin&#95;demo">
    window.BBWP = window.BBWP || {};
    window.BBWP.plugins = window.BBWP.plugins || {};
    window.BBWP.plugins["my&#95;plugin&#95;alias"] = [
        someSetting: {
            foo: "bar",
            thing: 1
        }
    ];
&lt;/script></code></pre>
            
            <h4>Then, in your custom JavaScript file, you can access your exposed settings via:</h4>
            <pre class="line-numbers"><code class="language-javascript">var settings = BBWP.plugins.my&#95;plugin&#95;alias.someSetting;
console.log(settings.foo); // prints "bar"</code></pre>
		</div>
	</div>
	<p class="back-to-top"><a href="#top">Back to top ^</a></p>
</div>
