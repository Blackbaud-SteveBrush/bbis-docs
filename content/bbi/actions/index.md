---
layout: layout-sidebar
order: 4
name: Writing Actions
description: Description here.
icon: fa fa-sitemap
---

# Writing Actions

## Overview

<p class="alert alert-info">Applications execute custom functionality through the use of `app.action()`.</p>

### Some key points regarding actions:

<ol>
    <li>An action is a bit like the "engine" of your Application</li>
    <li>An action should contain unique, reusable code</li>
    <li>An action can be executed more than once on a page</li>
    <li>Any number of actions can be added to your Application's file</li>
</ol>

[API reference for action&nbsp;&rarr;](/bbi/reference/app-methods/#action)

___

## Structure

<p class="alert alert-info">[Browse the examples](/bbi/examples/) before writing your customization. You may find some code you can borrow for your project.</p>

If you cannot find an example action that meets your needs, you'll need to roll up your sleeves and write one from scratch.

### An action generally follows this structure:

<pre><code class="language-javascript">app.action("MyAction", function (app, bbi, $) {
    return {
        init: function (options, element) {
            // Do something!
        }
    };
});</code></pre>

## Initializing

Executing your actions on the page is simple, and can be done in one of two ways.

### Option 1: Initialize via HTML5 data attributes

Insert on the page, wherever you want your customization to take effect:

<pre><code class="language-markup">&lt;div
    data-bbi-app="MyApp"
    data-bbi-action="sayHello"&gt;
&lt;/div&gt;
</code></pre>

**Data attributes reference:**

<table class="table table-parameters">
	<tr>
		<td class="name">data-bbi-src</td>
		<td>The source of your custom script.</td>
	</tr>
	<tr>
		<td class="name">data-bbi-app</td>
		<td>The alias (or name) of your application.</td>
	</tr>
	<tr>
		<td class="name">data-bbi-action</td>
		<td>The name of the action to be called.</td>
	</tr>
	<tr>
		<td class="name">data-*</td>
		<td>
		    <p>You can pass options to your actions using custom HTML5 data attributes. For example, if you wanted to pass an option named `appId` with a value of "45", you would add the data attribute <code>data-app-id="45"</code> to the tag (the data attributes use spinal-case and are converted to camel-case when received by the application).</p>
		    <p><a href="/bbi/reference/app-methods/#action">Read more about passing options to your actions&nbsp;&rarr;</a></p>
		</td>
	</tr>
</table>

### Option 2: Initialize via JavaScript

Sometimes, your actions are best initialized in an external script somewhere, instead of using data attributes in the markup.

<pre><code class="language-javascript">jQuery(document).on('bbi-loaded', function (e, bbi, $) {
    bbi.apps().MyApp.actions.sayHello.init(args);
});</code></pre>
