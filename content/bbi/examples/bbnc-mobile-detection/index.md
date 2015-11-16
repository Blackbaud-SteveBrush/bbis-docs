---
layout: layout-sidebar
name: BBNC Mobile Detection
---

# BBNC Mobile Detection

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("mobile", function (app, bbi, $) {
	if (bbi.isPageEditor() === false) {
		if (bbi.helper.isMobile.any()) {
			bbi.require(["bbnc-mobile"], null);
		}
	}
});</code></pre>
