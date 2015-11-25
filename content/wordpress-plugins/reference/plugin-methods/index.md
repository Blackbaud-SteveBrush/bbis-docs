---
layout: layout-sidebar
name: Plugin
---

<div class="page-header">
    <h1>blackbaud\Plugin `$plugin`</h1>
</div>

When you create a plugin using the Plugin Assistant, you are also creating an object within the "blackbaud" namespace. The plugin object is represented as the local variable `$plugin`. All of the following methods belong to this object.

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

## forge

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Object $plugin->forge ( string $what, function $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns an object representative of a WordPress "thing", whether that's a custom post type, a settings page, or a metabox.</p>
		<p>The `forge` method handles a lot of the tedious ins-and-outs that go into creating post types, etc., making it easy to create a lot of standard stuff quickly. All you need to provide is an array of options to tell the Plugin Assistant what to create.</p>
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
    					<td class="name">what</td>
    					<td class="type">string</td>
    					<td>
            				<p>A slug representative of a standard WordPress "thing". The following items can be forged:</p>
            				<ul class="list-group">
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">asset</h4>
            						<p>
            							Enqueue a JavaScript or CSS file (can also output HTML)
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">custom_post&#95;type</h4>
            						<p>
            							Custom Post Type
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">post&#95;sortable_columns</h4>
            						<p>
            							Sortable Columns for posts or custom post types
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">meta&#95;box</h4>
            						<p>
            							Meta box (with fields) for posts or custom post types
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">shortcode</h4>
            						<p>
            							Shortcode
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">settings&#95;page</h4>
            						<p>
            							Settings Page to capture various options
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">taxonomy&#95;fields</h4>
            						<p>
            							Custom fields for taxonomies
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">updater</h4>
            						<p>
            							Links plugin to auto-update service
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    				<tr>
    					<td class="name">options</td>
    					<td class="type">array, function</td>
    					<td>
            				<p>Each item forged has unique options (see below)</p>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>In your plugin's main PHP file:</h4>
        <pre><code class="language-php">// Create a custom post type using an array:
$my_cpt = $plugin->forge("custom&#95;post&#95;type", array(
    "slug" => "my_cpt",
    "labels" => array()
));

// Create a custom post type using a function:
$my_cpt = $plugin->forge("custom&#95;post&#95;type", function ($plugin, $blackbaud) {
    return array(
        "slug" => "my_cpt",
        "labels" => array()
    );
});</code></pre>
	</div>
</div>




## forge asset

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Asset $plugin->forge ( "asset", Array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method allows you to enqueue CSS/JS files, or to output HTML in the page's head or footer.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">access</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							Can be "global" (add the asset to both the dashboard and front-end pages), "dashboard" (add the asset only to the dashboard pages), or "front-end" (add the asset only on front-end pages).
            							Default: "global"
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">dependencies</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array of dependencies, to be sent to <a href="https://codex.wordpress.org/Function_Reference/wp&#95;enqueue&#95;script#Parameters" target="&#95;blank">wp&#95;enqueue&#95;script</a>
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">for_shortcode</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							If supplied, the asset will only be added to the front-end if this shortcode is present (e.g., "my_shortcode")
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">handle</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							A unique slug to designate the file, to be sent to <a href="https://codex.wordpress.org/Function_Reference/wp&#95;enqueue&#95;script#Parameters" target="&#95;blank">wp&#95;enqueue&#95;script</a>
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">in_footer</h4>
            						<p>
            							<span class="text-muted">Type: boolean</span><br>
            							Tells WordPress if the file should be inserted in the page's footer, to be sent to <a href="https://codex.wordpress.org/Function_Reference/wp&#95;enqueue&#95;script#Parameters" target="&#95;blank">wp&#95;enqueue&#95;script</a>
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">output</h4>
            						<p>
            							<span class="text-muted">Type: function</span><br>
            							Return an HTML string to be placed inserted in the same place as a normal CSS/JS file (head or footer). This only works if you set the "type" to "html".
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">source</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The public URL to the file's location, to be sent to <a href="https://codex.wordpress.org/Function_Reference/wp&#95;enqueue&#95;script#Parameters" target="&#95;blank">wp&#95;enqueue&#95;script</a>
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">type</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The type of asset to produce. If you are inserting an asset _file_ (CSS/JS), this property will automatically derive the type from the file's extension (.css/.js). If you wish to output HTML, you'll need to explicitly set this to "html".
            						</p>
            					</li>
                				<li class="list-group-item">
            						<h4 class="list-group-item-heading">version</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							A string representative of the file's version, to be sent to <a href="https://codex.wordpress.org/Function_Reference/wp&#95;enqueue&#95;script#Parameters" target="&#95;blank">wp&#95;enqueue&#95;script</a>
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Enqueue a JavaScript file for a shortcode:</h4>
        <pre><code class="language-php">$plugin->forge("asset", array(
    "handle"        => "my&#95;javascript&#95;file",
    "source"        => "/path/to/file/my-customization.js",
    "for&#95;shortcode" => "my&#95;shortcode"
));</code></pre>
        <h4>Enqueue a CSS file for both the dashboard and front-end:</h4>
        <pre><code class="language-php">$plugin->forge("asset", array(
    "handle" => "my&#95;css&#95;file",
    "source" => "/path/to/file/my-css.css"
));</code></pre>
        <h4>Insert HTML in the footer of the front-end:</h4>
        <pre><code class="language-php">$plugin->forge("asset", array(
    "access"    => "front-end",
    "type"      => "html",
    "in_footer" => true,
    "output"    => function ($plugin, $blackbaud) {
        return '&lt;div data-bbi-src="my-bbi-app.js"&gt;&lt;/div&gt;';
    }
));</code></pre>
	</div>
</div>


## forge custom_post_type

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\CustomPostType $plugin->forge ( "custom_post&#95;type", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Registers a WordPress custom post type.</p>
		<p>Returns an object representing that post type.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">slug</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The custom string to designate your post type. This replaces the `post_type` property used in <a href="https://codex.wordpress.org/Function_Reference/register&#95;post&#95;type#Parameters" target="&#95;blank">register&#95;post&#95;type</a>.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">(all other parameters)</h4>
            						<p>
            							<span class="text-muted">Type: various</span><br>
            							All other parameters for this method--such as labels, description, etc.--are exactly the same as WordPress's <a href="https://codex.wordpress.org/Function_Reference/register&#95;post&#95;type#Parameters" target="&#95;blank">register&#95;post&#95;type</a> (see "args"). Study the examples below for usage.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Register a simple post type:</h4>
        <pre><code class="language-php">$plugin->forge("custom&#95;post&#95;type", array(
    "slug" => "my_cpt"
));</code></pre>
        <h4>Register an advanced post type:</h4>
        <pre><code class="language-php">$plugin->forge("custom&#95;post&#95;type", array(
    "slug" => "my_cpt",
    "description" => "An advanced custom post type.",
    "supports" => array("title","editor"),
    "labels" => array(
        "name" => "My Post Types",
        "singular_name" => "My Post Type",
        "menu_name" => "My CPT"
    )
));</code></pre>
	</div>
</div>


## forge meta_box

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\MetaBox $plugin->forge ( "meta&#95;box", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Registers a meta box for a post or custom post type.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">label</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The heading for the meta box
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">post_type</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The post type to include the meta box
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">fields</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array of "field" arrays (see below)
                                    </p>
        							
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Fields</h3>
		<p>Form fields are created using PHP arrays with the following properties:</p>
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
    				<td class="name">slug</td>
					<td class="type">string</td>
    				<td>The unique string to designate the field</td>
				</tr>
				<tr>
    				<td class="name">label</td>
					<td class="type">string</td>
    				<td>The field's label</td>
				</tr>
				<tr>
    				<td class="name">type</td>
					<td class="type">string</td>
    				<td>The field's type (e.g., "input", "textarea", "checkbox", "media-gallery-picker")</td>
				</tr>
				<tr>
    				<td class="name">default</td>
					<td class="type">string</td>
    				<td>The default value for the field</td>
				</tr>
				<tr>
    				<td class="name">helplet</td>
					<td class="type">string</td>
    				<td>A short message underneath the field to help the user</td>
				</tr>
				<tr>
    				<td class="name">attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to a field, e.g. `array("maxlength" => "500")`.</td>
				</tr>
				<tr>
    				<td class="name">parent_attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to the field's parent DIV, e.g. `array("class" => "my-parent-div")`.</td>
				</tr>
			</tbody>
		</table>
		<h3>Examples</h3>
        <h4>Create a meta box for a post with one text box:</h4>
        <pre><code class="language-php">$plugin->forge("meta_box", array(
    "post&#95;type" => "my&#95;meta&#95;box",
    "label"     => "My Meta Box",
    "fields"    => array(
        array(
            "slug"       => "my_field",
            "label"      => "My Field:",
            "type"       => "text",
            "attributes" => array(
                "class"  => "form-control"
            )
        )
    )
));</code></pre>
	</div>
</div>


## forge post_sortable_columns

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\PostColumns $plugin->forge ( "post_sortable&#95;columns", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Creates sortable columns for the All Posts page. Also works for custom post types.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">post_type</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The post type slug
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">columns</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array of keyed arrays, one for each column (see below).
            							
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Columns</h3>
		<p>Each "columns" array may have the following properties:</p>
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
    				<td class="name">label</td>
					<td class="type">string</td>
    				<td>The column's header label</td>
				</tr>
				<tr>
    				<td class="name">value</td>
					<td class="type">function</td>
    				<td>This function should return the content to be displayed in the column. The function argument `$data` is an array that contains the column information, the post_id, and the post object itself.</td>
				</tr>
				<tr>
    				<td class="name">meta_key</td>
					<td class="type">string</td>
    				<td>If you wish to order the column by a post meta key, provide it here.</td>
				</tr>
			</tbody>
		</table>
		<h3>Examples</h3>
        <h4>Create a sortable column for a custom post type, that displays the post ID:</h4>
        <pre><code class="language-php">$plugin->forge('post&#95;sortable&#95;columns', array(
    'post&#95;type' => 'my&#95;post&#95;type',
    'columns' => array(
        'my&#95;post&#95;id' => array(
            'label' => "Post ID",
            'value' => function ($data) {
                return $data['post&#95;id'];
            }
        )
    )
));</code></pre>
        <h4>Create a sortable column for a post's meta key:</h4>
        <pre><code class="language-php">$plugin->forge('post&#95;sortable&#95;columns', array(
    'post&#95;type' => 'post',
    'columns' => array(
        'my&#95;post&#95;id' => array(
            'label' => "Post ID",
            'value' => function ($data) {
                return $data['post&#95;id'];
            }
        )
    ),
    'meta&#95;key' => 'my&#95;meta'
));</code></pre>
	</div>
</div>


## forge settings_page

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\SettingsPage $plugin->forge ( "settings&#95;page", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Creates a page on the dashboard to capture field options.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">slug</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							A unique string to designate this setting
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">parent_slug</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The slug of the section in the dashboard's sidebar where the setting should be included. This is the same `parent_slug` used in WordPress's <a href="https://codex.wordpress.org/Function&#95;Reference/add&#95;submenu&#95;page" target="&#95;blank">add&#95;submenu&#95;page</a>.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">page_title</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The setting page's title (H1)
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">menu_title</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The label on the link in the dashboard sidebar
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">capability</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							A string representative of the setting page's <a href="https://codex.wordpress.org/Roles&#95;and&#95;Capabilities" target="&#95;blank">user capabilities</a>
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">sections</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array to store sections and their fields (see below).
            							
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Sections Fields</h3>
		<p>Each sections' field arrays may have the following properties:</p>
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
    				<td class="name">slug</td>
					<td class="type">string</td>
    				<td>The unique string to designate the field</td>
				</tr>
				<tr>
    				<td class="name">label</td>
					<td class="type">string</td>
    				<td>The field's label</td>
				</tr>
				<tr>
    				<td class="name">type</td>
					<td class="type">string</td>
    				<td>The field's type (e.g., "input", "textarea", "checkbox", "media-gallery-picker")</td>
				</tr>
				<tr>
    				<td class="name">default</td>
					<td class="type">string</td>
    				<td>The default value for the field</td>
				</tr>
				<tr>
    				<td class="name">helplet</td>
					<td class="type">string</td>
    				<td>A short message underneath the field to help the user</td>
				</tr>
				<tr>
    				<td class="name">attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to a field, e.g. `array("maxlength" => "500")`.</td>
				</tr>
				<tr>
    				<td class="name">parent_attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to the field's parent DIV, e.g. `array("class" => "my-parent-div")`.</td>
				</tr>
			</tbody>
		</table>
		<h3>Examples</h3>
        <h4>A settings page for your custom post type:</h4>
        <pre><code class="language-php">$plugin->forge("settings&#95;page", array(
	'slug'        => 'my&#95;post&#95;type&#95;settings',
	'parent&#95;slug' => 'edit.php?post&#95;type=my&#95;post&#95;type',
	'sections'    => array(
		'api_basic'  => array(
			'title'  => 'API Keys:',
			'fields' => array(
				array(
					'slug'  => 'key',
					'type'  => 'text',
					'label' => 'Key:'
				),
				array(
					'slug'    => 'version',
					'type'    => 'text',
					'label'   => 'API Version:',
					'default' => '1.0'
				),
				array(
					'slug'  => 'secret',
					'type'  => 'text',
					'label' => 'Secret Key:',
					'helplet' => "Used for signed redirects"
				)
			)
		),
		'api_endpoints' => array(
			'title'  => 'Resources:',
			'fields' => array(
				array(
					'slug'       => 'http',
					'type'       => 'text',
					'label'      => 'Unsecure URL:',
					'attributes' => array(
						'placeholder' => 'http://myorg.convio.net/site/'
					),
					'helplet'    => 'Please include a trailing slash.'
				),
				array(
					'slug'       => 'https',
					'type'       => 'text',
					'label'      => 'Secure URL:',
					'attributes' => array(
						'placeholder' => 'https://secure2.convio.net/myorg/site/'
					),
					'helplet'    => 'Please include a trailing slash.'
				)
			)
		)
	)
));</code></pre>
	</div>
</div>


## forge shortcode

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Shortcode $plugin->forge ( "shortcode", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Registers a WordPress shortcode.</p>
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
    					<td class="type">array</td>
        				<td>
            				<p>Description...</p>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">slug</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The shortcode's slug
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">output</h4>
            						<p>
            							<span class="text-muted">Type: function</span><br>
            							A function that returns the HTML content produced by the shortcode. This function receives any attributes that were included in the shortcode.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-php">// Registers a shortcode for [my_shortcode]
$plugin->forge("shortcode", array(
    "slug" => "my_shortcode",
    "output" => function ($atts) {
        $data = shortcode_atts(array(
    		'name' => 'World'
    	), $attributes);
    	return '<h1>Hello, ' . $data['name'] . '!</h1>';
    }
));</code></pre>
	</div>
</div>


## forge taxonomy_fields

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\TaxonomyFields $plugin->forge ( "taxonomy&#95;fields", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Creates custom fields for taxonomies.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">taxonomy</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The taxonomy's slug
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">fields</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array to store fields (see below).
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
        <h3>Fields</h3>
		<p>Form fields are created using PHP arrays with the following properties:</p>
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
    				<td class="name">slug</td>
					<td class="type">string</td>
    				<td>The unique string to designate the field</td>
				</tr>
				<tr>
    				<td class="name">label</td>
					<td class="type">string</td>
    				<td>The field's label</td>
				</tr>
				<tr>
    				<td class="name">type</td>
					<td class="type">string</td>
    				<td>The field's type (e.g., "input", "textarea", "checkbox", "media-gallery-picker")</td>
				</tr>
				<tr>
    				<td class="name">default</td>
					<td class="type">string</td>
    				<td>The default value for the field</td>
				</tr>
				<tr>
    				<td class="name">helplet</td>
					<td class="type">string</td>
    				<td>A short message underneath the field to help the user</td>
				</tr>
				<tr>
    				<td class="name">attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to a field, e.g. `array("maxlength" => "500")`.</td>
				</tr>
				<tr>
    				<td class="name">parent_attributes</td>
					<td class="type">array</td>
    				<td>A key-value array to represent any HTML attribute that can be applied to the field's parent DIV, e.g. `array("class" => "my-parent-div")`.</td>
				</tr>
			</tbody>
		</table>
		<h3>Examples</h3>
        <h4>Adds two fields to the Category page.</h4>
        <pre><code class="language-php">$plugin->forge("taxonomy_fields", array(
    'taxonomy' => 'category',
    'fields' => array(
        array(
            'slug' => 'transition_type',
            'label' => 'Transition type:',
            'type' => 'select',
            'default' => 'slide',
            'options' => array(
                'Slide' => 'slide',
                'Fade' => 'fade'
            )
        ),
        array(
            'slug' => 'transition_speed',
            'label' => 'Transition speed:',
            'type' => 'text',
            'helplet' => 'In milliseconds.',
            'default' => '1000',
            'attributes' => array(
                'maxlength' => '500'
            )
        )
    )
));</code></pre>
	</div>
</div>



## forge updater

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Updater $plugin->forge ( "updater", array $options )</code></h4>
	</div>
	<div class="panel-body">
		<p>Forging an Updater will link your plugin to Blackbaud's auto-update service. Of course, your plugin will need to be included in the updater's package.json file to be fully enabled. Learn more about Blackbaud's <a href="../../updater">Theme and Plugin Updater</a>.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">always&#95;check</h4>
            						<p>
            							<span class="text-muted">Type: boolean</span><br>
            							Set this property to `true` to force WordPress to check if there's an update on every page refresh.
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">endpoint</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The URL endpoint for the updater API.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-php">$plugin->forge("updater");</code></pre>
	</div>
</div>


## get

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">various $plugin->get ( string $property )</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the value of a Plugin's private property.</p>
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
        				<td class="name">property</td>
    					<td class="type">string</td>
        				<td>The name of the private property</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <pre><code class="language-php">$val = $plugin->get("alias");</code></pre>
	</div>
</div>


## get_forged

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Object $plugin->get_forged ( string $type, string $slug)</code></h4>
	</div>
	<div class="panel-body">
	    <p>Returns a specific object instantiated by the `forge` method.</p>
		<p>If `$slug` is omitted, returns all objects instantiated by the `forge` method, by type.</p>
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
    					<td class="type">array</td>
        				<td>
            				<p>Description...</p>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">type</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							Any normal type you would enter into the `forge` method (e.g., "custom&#95;post&#95;type", "settings&#95;page", "shortcode", etc.).
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">slug (optional)</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The specific slug entered for a specific type, such as "my&#95;cpt", or "my&#95;settings&#95;page". Also note that some objects do not require a slug property; if you need to retrieve one of those objects using `get_forged`, simply provide a slug in the `forge` options.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>Get all custom post type objects created by the forge:</h4>
        <pre><code class="language-php">$cpts = $plugin->get&#95;forged("custom&#95;post&#95;type");</code></pre>
        <h4>Get a specific custom post type object created by the forge:</h4>
        <pre><code class="language-php">$cpt = $plugin->get&#95;forged("custom&#95;post&#95;type", "my&#95;cpt");</code></pre>
	</div>
</div>


## get_template

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">string $plugin->get&#95;template ( string $file_name, array $data )</code></h4>
	</div>
	<div class="panel-body">
		<p>This method retrieves the contents of a given file. It will first look in the active theme's template/ directory for a file of the same name. If the file is not found in the theme, the default file in the plugin is used. This way, other developers may overwrite the plugin's HTML partials to fit their project's specific needs.</p>
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
    					<td class="type">array</td>
        				<td>
            				<ul class="list-group">
            				    <li class="list-group-item">
            						<h4 class="list-group-item-heading">file_name</h4>
            						<p>
            							<span class="text-muted">Type: string</span><br>
            							The name (and extension) of the file whose contents you wish to retrieve
            						</p>
            					</li>
            					<li class="list-group-item">
            						<h4 class="list-group-item-heading">data (optional)</h4>
            						<p>
            							<span class="text-muted">Type: array</span><br>
            							An array of data that can be used in the file to print dynamic content.
            						</p>
            					</li>
            				</ul>
        				</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>templates/my-partial.php</h4>
        <pre><code class="language-markup">Hello, &lt;?php echo $data['name']; ?>!</code></pre>
        <h4>In your plugin's main PHP file:</h4>
        <pre><code class="language-php">echo $plugin->get_template('my-partial.php', array('name' => 'World')); // prints "Hello, World!"</code></pre>
	</div>
</div>


## last_forged

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Object $plugin->last_forged</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the last object instantiated by the `forge` method.</p>
		<h3>Examples</h3>
        <pre><code class="language-php">$plugin->forge("meta&#95;box", array());

$my&#95;meta&#95;box = $plugin->last&#95;forged;</code></pre>
	</div>
</div>

## last_module

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Module $plugin->last_module</code></h4>
	</div>
	<div class="panel-body">
		<p>Returns the last instantiated module.</p>
		<h3>Examples</h3>
        <pre><code class="language-php">$plugin->module("my&#95;module", array());

$my&#95;module = $plugin->last&#95;module;</code></pre>
	</div>
</div>


## module

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Module $plugin->module ( string $name, array $features )</code></h4>
	</div>
	<div class="panel-body">
		<p>A "module" let's you produce additional functionality to be used by your plugin, while keeping them wrapped in the Assistant's namespace.</p>
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
        				<td class="name">slug</td>
    					<td class="type">string</td>
        				<td>A unique name for your module. No spaces or special characters beyond dashes and underscores.</td>
    				</tr>
    				<tr>
        				<td class="name">features</td>
    					<td class="type">array</td>
        				<td>This array can include properties and or functions. A function receives any attributes you wish, followed by an object that represents the module itself. See the examples below.</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>The following module includes private properties and methods.</h4>
        <pre><code class="language-php">$plugin->module("MyModule", array(
    "my_property" => 15,
    "my_function" => function ($attr1, $module) {
        echo $module->my_property + $attr1;
    }
));</code></pre>
        <h4>Then, to use the module, do the following:</h4>
        <pre><code class="language-php">$my_module = $plugin->module("MyModule");

echo $my&#95;module->my&#95;function(5); // prints '20'</code></pre>
	</div>
</div>


## set

<div class="panel panel-reference">
	<div class="panel-heading">
		<h4 class="panel-title"><code class="language-php">blackbaud\Plugin $plugin->set ( string $property, various $value )</code></h4>
	</div>
	<div class="panel-body">
		<p>Sets a Plugin's private property. This method also returns the same Plugin object so you can chain another method afterwards.</p>
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
        				<td class="name">property</td>
    					<td class="type">string</td>
        				<td>The private property's name</td>
    				</tr>
    				<tr>
        				<td class="name">value</td>
    					<td class="type">various</td>
        				<td>Any value, any type</td>
    				</tr>
    			</tbody>
    		</table>
		</div>
		<h3>Examples</h3>
        <h4>In your plugin's main PHP file:</h4>
        <pre><code class="language-php">$plugin->set("alias", "a&#95;different&#95;alias");</code></pre>
	</div>
</div>
