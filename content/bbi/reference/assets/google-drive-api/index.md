---
name: Google Drive API
showInNav: false
---

# Google Drive API `google-drive-api`

## Dependencies
<ul>
	<li>jQuery 1.7.2 or greater</li>
</ul>

## How to use

<pre><code class="language-javascript">BBI.require(['google-drive-api'], function () {
    // Example calling export method
    BlackbaudGoogleDrive.export('spreadsheetId', 'txt', function() { ... }, function() { ... });
});</code></pre>

## Methods

<ul class="list-group">
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>copy(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>delete(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>download(id, [format], success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>get(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>insert(id, data, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>listFiles(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>patch(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>touch(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>trash(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>untrash(id, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>update(id, data, format, success, error)</code></h5>
	</li>
	<li class="list-group-item">
		<h5 class="list-group-item-heading"><code>watch(id, success, error)</code></h5>
	</li>
</ul>
