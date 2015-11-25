---
layout: layout-sidebar
order: 3
name: Writing an Application
description: Description here.
icon: fa fa-sitemap
---


# Writing an Application

BBI operates by itself just fine, and has many methods that can be used out-of-the-box. However, to do anything custom, you'll need to write a BBI Application.

Applications operate as separate JavaScript files, and you can have as many applications as you wish on a single page.

<div class="alert alert-info">Want to skip all the mumbo-jumbo? You can head over to the <a href="/bbi/examples/">"Hello, World" demo on the Examples page</a>.</div>

## Download the boilerplate

It's finally time to write your own BBI application. First things first, download the Application Boilerplate JavaScript file.

___

<a href="http://api.blackbaud.com/bbi/v/1.1.0/boilerplates/bbi-app-boilerplate.js" class="btn btn-primary" target="_blank"><i class="glyphicon glyphicon-download-alt"></i> Download boilerplate</a> &nbsp;<small class="text-muted">bbi-app-boilerplate.js</small>

___

## Name your application file

Name your JavaScript file according to this convention: <code>bbi-[app-alias].js</code>. 

<p class="alert alert-info">For example, you may have a client named _Michigan Humane Society_; your application's alias would be <code>MichiganHumaneSociety</code>, and your JavaScript file would be named <code>bbi-michigan-humane-society.js</code>.</p>

## Register your application

<ol>
    <li>Open your application JavaScript file in your favorite code editor. You'll notice that the boilerplate is divided into three sections: <code>register</code>, <code>action</code>, and <code>build</code>.</li>
        <ul>
            <li>The <a href="/bbi/reference/bbi-methods/#register">register</a> method accepts an options object, which creates and returns the application.  The properties "alias" and "author" are required.</li>
            <li>The <a href="/bbi/reference/app-methods/#action">action</a> method lets your application do stuff. You can have any number of actions in your application.</li>
            <li>The <a href="/bbi/reference/app-methods/#build">build</a> method tells BBI that your application is ready to be processed.</li>
        </ul>
    </li>
    <li>In the <code>register</code> method, modify <code>alias: "MyApp"</code> to represent the name of the organization, without spaces, like this: "CancerResearchSociety".</li>
    <li>In the <code>register</code> method, modify <code>author: "First Last"</code> to match your first and last name, like this: "Jayne Cobb".</li>
    <li>Finally, upload your JavaScript file to DropBox (or similar cloud-based server) so you can easily make changes during the development process.</li>
</ol>

## Add your application to the page

In most situations, adding custom JavaScript to the page is quite simple. Unfortunately, Blackbaud's products all work differently, so please (carefully) follow the steps below according to the product you're working with.

<ul class="nav nav-tabs" role="tablist">
    <li class="active"><a href="#step-2-bbnc" role="tab" data-toggle="tab">NetCommunity</a></li>
    <li><a href="#step-2-wordpress" role="tab" data-toggle="tab">WordPress</a></li>
    <li><a href="#step-2-pagebuilder" role="tab" data-toggle="tab">PageBuilder</a></li>
    <li><a href="#step-2-faf" role="tab" data-toggle="tab">Friends Asking Friends</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane active" id="step-2-bbnc">
        <ol>
            <li>Near the top of your Page Template, create a new <em>Unformatted Text</em> part.</li>
            <li>Name the part "Customization: Namespace and Scripts (DO NOT DELETE)".</li>
            <li>
                <p>Add the following code to the part:</p>
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="#step-2-bbnc-bootstrap" data-toggle="tab">Bootstrap</a></li>
                    <li><a href="#step-2-bbnc-vanilla" data-toggle="tab">Default</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="step-2-bbnc-bootstrap">
                        <p>NetCommunity comes pre-installed with jQuery v1.7.2, but Bootstrap requires v.1.9. To use Bootstrap without overwriting NetCommunity's jQuery plugins, you'll need to use `jQuery.noConflict()`.</p>
                        <pre class="line-numbers"><code class="language-markup">&lt;!-- MY VERSION OF JQUERY -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">&lt;/script>
&nbsp;
&lt;!-- BOOTSTRAP JS -->
&lt;script src="//netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js">&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function ($) {
    window.bbiAsyncInit = function (bbi) {
        bbi.init({ jQuery: $ });
    }
})(jQuery.noConflict(true));
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
                    </div>
                    <div class="tab-pane" id="step-2-bbnc-vanilla">
                        <pre class="line-numbers"><code class="language-markup">&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
                    </div>
                </div>
            </li>
            <li>Replace <code>[custom-script-url]</code> with the URL of your Application JavaScript file, created in Step 1 (be sure to remove the "http:" or "https:" from the URL).</li>
            <li>Make sure the part is set to display "In the &lt;body&gt; tag with the part" (under "Show advanced options").</li>
            <li>Save the part to return to the template.</li>
        </ol>
    </div>
    <div class="tab-pane" id="step-2-wordpress">
        <div class="alert alert-info">
            <strong>Theme Gallery 7-12</strong><br>
            If your site is using Themes 7-12, BBI has already been installed. There is also a custom application file inserted on the page, named "bbi-custom.js". It lives in your child theme's assets > js directory. If this is the case for your project, use this file instead.
        </div>
        <ol>
            <li>Accessing your theme files using FTP, open the file "footer.php".</li>
            <li>
                <p>At the top of the file, include the following code:</p>
                <pre class="line-numbers"><code class="language-markup">&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
            </li>
            <li>Replace <code>[custom-script-url]</code> with the URL of your Application JavaScript file, created in Step 1 (be sure to remove the "http:" or "https:" from the URL).</li>
            <li>Save "footer.php".</li>
        </ol>
    </div>
    <div class="tab-pane" id="step-2-pagebuilder">
        <ol>
            <li>PageBuilder pages use an older version of jQuery by default. The BBI Namespace requires at least version 1.7.2, so we'll need to configure BBI to accept a newer version of jQuery, while not overwriting the older version in the process. We can do this via jQuery's <code>noConflict()</code> method.</li>
            <li>If your PageBuilder page is using a theme, find the Reusable PageBuilder Page named "reus&#95;Teamraiser_javascript" (or something similar). If your PageBuilder does not include a JavaScript reusable, you'll need to create one near the page's footer.</li>
            <li>
                <p>Once you've created (or located) the "JavaScript" Reusable PageBuilder Page, add the following code to the part (before doing so, make sure you are editing the part with the WYSIWYG turned "off"):</p>
                <ul class="nav nav-tabs" role="tablist">
                    <li class="active"><a href="#step-2-pagebuilder-bootstrap" data-toggle="tab">Bootstrap</a></li>
                    <li><a href="#step-2-pagebuilder-vanilla" data-toggle="tab">Default</a></li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane active" id="step-2-pagebuilder-bootstrap">
                        <p>PageBuilder comes pre-installed with jQuery v1.6.4, but Bootstrap requires v.1.9. To use Bootstrap without overwriting PageBuilder's jQuery plugins, you'll need to use jQuery.noConflict().</p>
                        <pre class="line-numbers"><code class="language-markup">&lt;!-- MY VERSION OF JQUERY -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">&lt;/script>
&nbsp;
&lt;!-- BOOTSTRAP JS -->
&lt;script src="//netdna.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js">&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function ($) {
    window.bbiAsyncInit = function (bbi) {
        bbi.init({ jQuery: $ });
    }
})(jQuery.noConflict(true));
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
                    </div>
                    <div class="tab-pane" id="step-2-pagebuilder-vanilla">
                        <pre class="line-numbers"><code class="language-markup">&lt;!-- MY VERSION OF JQUERY -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function ($) {
    window.bbiAsyncInit = function (bbi) {
        bbi.init({ jQuery: $ });
    }
})(jQuery.noConflict(true));
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
                    </div>
                </div>
            </li>
            <li>Replace <code>[custom-script-url]</code> with the URL of your application JavaScript file, created in Step 1 (be sure to remove the "http:" or "https:" from the URL).</li>
            <li>Save the PageBuilder page.</li>
        </ol>
    </div>
    <div class="tab-pane" id="step-2-faf">
        <ol>
            <li>Friends Asking Friends uses an older version of jQuery by default. The BBI Namespace requires at least version 1.7.2, so we'll need to configure BBI to accept a newer version of jQuery, while not overwriting the older version in the process. We can do this via jQuery's <code>noConflict()</code> method.</li>
            <li>Go to your Kintera-thon event's Webinfo Checklist.</li>
            <li>Go to the "Website Design" page editor.</li>
            <li>Look for the textarea labeled "Multi-Language Footer". If you cannot see this textarea, it means that your browser doesn't have a certain cookie set to give you access. You can gain access by clicking on <a href="https://www.kintera.com/kintera_sphere/events/asp/webinfo_enableCustomFeatures.asp" target="_blank">this link</a>.</li>
            <li>
                <p>Once you've gained access to edit the "Multi-Language Footer", add the following code to the textarea:</p>
                <pre class="line-numbers"><code class="language-markup">&lt;!-- My Version of JQuery (anything greater than 1.7.2) -->
&lt;script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE INIT -->
&lt;script>
(function ($) {
    window.bbiAsyncInit = function (bbi) {
        bbi.init({ jQuery: $ });
    }
})(jQuery.noConflict(true));
&lt;/script>
&nbsp;
&lt;!-- BBI NAMESPACE -->
&lt;script>
(function(a,p,i,s) {
 a.getElementById(i)||(s=a.createElement(p),
 s.id=i,s.src="//api.blackbaud.com/bbi?v=1.1.0",
 a.getElementsByTagName("head")[0].appendChild(s)
)}(document, "script", "bbi-namespace", null));
&lt;/script>
&nbsp;
&lt;!-- CUSTOM SCRIPTS -->
&lt;div class="bbi-script" data-bbi-src="[custom-script-url]">&lt;/div>
</code></pre>
            </li>
            <li>Replace `[custom-script-url]` with the URL of your Application JavaScript file, created in Step 1 (be sure to remove the "http:" or "https:" from the URL).</li>
            <li>Save the form, then return to the Webinfo Checklist.</li>
            <li>Finally, click the "Publish This Event Now" button.</li>
        </ol>
    </div>
</div>

## Make your application do something

At this point, your application does little else than print a few status messages in the browser console. To make your application do something, you'll need to add some `actions` to your application's JavaScript file. 

<p>
    <a href="/bbi/examples/">Check out some example actions&nbsp;&rarr;</a><br>
    <a href="/bbi/reference/app-methods/#action">Learn more about actions&nbsp;&rarr;</a>
</p>

## Begin the go-live process

1. Once the Application is working appropriately, upload the Application's JavaScript file to the client's site:
    - **NetCommunity:** Site Explorer &gt; Files
    - **WordPress:** Child theme's JavaScript directory
    - **TeamRaiser:** via FTP
    - **Friends Asking Friends:** Sphere CMS &gt; Site Content &gt; File Gallery
1. Be sure to change the value of the `data-bbi-src` attribute to the location of the newly uploaded script (see Step 2). If at all possible, make sure the script source is _local_ and doesn't include the site's domain.
    - For example, `data-bbi-src="/files/scripts/bbi-houston-humane.js"`

## Submit to Quality Assurance

1. If the project is greater than 8 hours, then you probably have a developer assigned to perform the QA. 
    - <a href="http://qa.blackbaud.com/?page_id=919" target="_blank">JavaScript QA Form&nbsp;&rarr;</a>
1. If you don't have QA assigned, please email one of the senior developers to take a second look at your code. (If you're already a senior developer, you're not excluded! Please let another senior developer look at your code.)   
    - <a href="http://meebee/mysite/_layouts/mycontactlinks.aspx?accountname=blackbaud%5CAndrewFo" target="_blank">Andrew Fort's Team&nbsp;→</a>
    - <a href="http://meebee/mysite/_layouts/mycontactlinks.aspx?accountname=blackbaud%5CBen%2EWong" target="_blank">Ben Wong's Team&nbsp;→</a>
1. Once you get the go-ahead from a senior developer, you may then get the client's approval via the Deliverable Acceptance Form.
