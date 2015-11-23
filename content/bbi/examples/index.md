---
layout: layout-sidebar
order: 6
name: Examples
description: Description here.
icon: fa fa-sitemap
---

# BBI Application Examples

## Hello, World

No documentation is complete without a "Hello, World!" tutorial. The following application will print "Hello, World!" in the browser's console.

### bbi-my-hello-world-app.js

<pre><code class="language-javascript">(function (bbi) {
    "use strict";
    
    var app = bbi.register({
    	alias: "MyHelloWorldApp",
    	author: "Jayne Cobb"
    });

    app.action("SayHello", function (app, bbi, $) {
    	this.init = function (options, element) {
            bbi.log("Hello, World!");
        };
    });

    app.build();

}(window.bbiGetInstance()));</code></pre>

### Add the following just below the first BODY tag:

<pre><code class="language-markup">&lt;!-- JQUERY -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js">&lt;/script>

&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script></code></pre>
		
### Add these data- attributes to any HTML element on the page:

<pre><code class="language-markup">&lt;div
    data-bbi-src="bbi-my-hello-world-app.js"
    data-bbi-app="MyHelloWorldApp"
    data-bbi-action="SayHello">
&lt;/div></code></pre>

### Open your browser, refresh the page, and you should see this in your console log:

<pre><code class="language-markup">[BBI.debug.log] Hello, World!</code></pre>
