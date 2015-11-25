---
layout: layout-sidebar
order: 2
name: BBI Documentation
published: true
showInNav: true
showInSidebar: true
showInHeader: true
showInFooter: true
---

# BBI Documentation

<p class="lead">Tips and tricks, examples, and technical reference for Blackbaud's JavaScript namespace.</p>

## What it is

BBI is a public property of the browser's window object. It serves as the custom JavaScript namespace for GMBU Interactive Services.

<div class="alert alert-info">All of Blackbaud's custom JavaScript lives in a _namespace_, which is essentially a protective "envelope" that contains code.</div>

### Other interesting things about BBI:

- BBI stands for **B**lack**b**aud **I**nteractive. It's what the Internet Services team used to be called.
- BBI houses several methods proven useful for many of Blackbaud's clients.
- BBI allows you to easily include various assets (.js and .css) to be used by your application.
- All of Blackbaud's JavaScript customizations exist within BBI, in the form of _Applications_.
- BBI is the only namespace used by Blackbaud web developers.

## Why use a namespace?

At first glance, it would appear that coding within a namespace needlessly overcomplicates things. However, there are a few notable benefits:

- A namespace prevents a developer from accidentally overwriting other code on the page. (Nearly all Blackbaud products include JavaScript by default. These systems have their own variables and functions, and it is imperative that our custom code does not interfere.)
- A namespace usually includes its own library of functions; functions that everyone can use (and recognize) on their projects.
- A namespace also enforces a standardized process, making it extremely simple to debug and modify other developer's scripts.

<div class="alert alert-info">
    The main purpose of a namespace is two-fold: 1) to prevent code collisions, and 2) to create a standardized approach for all customizations.
</div>

A super-basic namespace might look like:

<pre><code class="language-javascript">window.MyNamespace = {
    foo: bar,
    baz: function () {}
};</code></pre>

Other, popular libraries also use namespaces. For example:

<pre><code class="language-javascript">// jQuery
window.jQuery = function () {};

// AngularJS
window.angular = {};

// Facebook JavaScript SDK
window.fb = {};</code></pre>

## Resources
If you have any desire to learn more about Best Practices, JavaScript in general, or other technologies, take a look at some of the links below.

### Internal
- <a href="https://github.com/convio/GMBU_Interactive_Services" target="_blank"><span class="glyphicon glyphicon-link"></span> GitHub</a>
- <a href="http://developer.blackbaud.com/bbis/guide/custom-content-parts/" target="_blank"><span class="glyphicon glyphicon-link"></span> BBNC Custom Part Docs</a>

### Best Practices
- <a href="http://javascript.crockford.com/code.html" target="_blank"><span class="glyphicon glyphicon-link"></span> JavaScript Coding Standards</a>
- <a href="http://www.phptherightway.com/" target="_blank"><span class="glyphicon glyphicon-link"></span> PHP Coding Standards</a>
- <a href="http://readystate4.com/2008/12/16/improve-your-jquery-25-excellent-tips/" target="_blank"><span class="glyphicon glyphicon-link"></span> Efficient jQuery Techniques</a>
- <a href="http://home.earthlink.net/~kendrasg/info/js_opt/" target="_blank"><span class="glyphicon glyphicon-link"></span> Optimizing JavaScript</a>
- <a href="http://mdo.github.io/code-guide/" target="_blank"><span class="glyphicon glyphicon-link"></span> HTML5/CSS Standards</a>
- <a href="http://wtfhtmlcss.com/" target="_blank"><span class="glyphicon glyphicon-link"></span> Common frustrations with HTML and CSS</a>

### Tutorials
- <a href="http://code.tutsplus.com/tutorials/create-wordpress-plugins-with-oop-techniques--net-20153" target="_blank"><span class="glyphicon glyphicon-link"></span> WordPress Custom Plugins</a>
- <a href="http://tedgoas.github.io/Cerberus/" target="_blank"><span class="glyphicon glyphicon-link"></span> Responsive Emails</a>

### Other Resources
- <a href="http://closure-compiler.appspot.com/home" target="_blank"><span class="glyphicon glyphicon-link"></span> JavaScript Minifier</a></li>
- <a href="http://code.tutsplus.com/tutorials/required-javascript-reading--net-33131" target="_blank"><span class="glyphicon glyphicon-link"></span> Great Books on JavaScript</a></li>
- <a href="http://www.jslint.com/" target="_blank"><span class="glyphicon glyphicon-link"></span> JS Lint Validator</a></li>

