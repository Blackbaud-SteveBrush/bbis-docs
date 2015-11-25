---
layout: layout-sidebar
name: BBNC Localization
---

# NetCommunity Parts Localization

## Dependencies

<p><a href="https://github.com/convio/GMBU&#95;Interactive&#95;Services/raw/master/packages/customizations/localization/bbnc/localize-parts/bbnc-localize-parts.zip" class="btn btn-primary" target="_blank"><small class="glyphicon glyphicon-download-alt"></small>&nbsp;&nbsp;Download package files</a></p>
<p>
	<small class="text-muted"><em>29 kb (.zip) - opens in new window</em></small>
</p>
<p><strong>Included in package:</strong></p>
<ul>
	<li>localize-parts-terms.json</li>
	<li>csc-popup-french.html</li>
</ul>
<p><strong>Upload the files:</strong></p>
<ul>
	<li>Create a new folder in the client's Files section named "localization".</li>
	<li>Upload the localize-parts.terms.json and csc-popup-french.html file to this location.</li>
	<li>Add these links to your data- attributes, in the Unformatted Text part (see "HTML" below).</li>
</ul>
<strong>Modify the Localization File to fit the client's needs:</strong><br>
<a href="http://api.blackbaud.com/services/localization/editor/">Localization File Editor (client-facing)&nbsp;&rarr;</a>

## HTML

<strong>Create a new Unformatted Text part (on the localized template) and name it "Customization: Part Localization". Then, add the following code:</strong>
<pre class="line-numbers"><code class="language-markup">&lt;style>
  .BBFormTable {display: none;}
  .isEditor .BBFormTable,
  .BBFormTable.on {display: table;}
&lt;/style>

&lt;div 
    data-bbi-app="[YOUR APP ALIAS]" 
    data-bbi-action="localize" 
    data-terms-url="//org.thankyou4caring.org/fr/file/localization/localize-parts-terms.json" 
    data-csc-popup-url="//org.thankyou4caring.org/fr/file/localization/csc-french.html" 
    data-target="#wrapContentOuter">
&lt;/div></code></pre>

<h4>Key:</h4>
<table class="table table-striped">
    <tr>
        <td>data-terms-url</td>
        <td>URL of localization terms JSON file</td>
    </tr>
    <tr>
        <td>data-csc-popup-url</td>
        <td>URL of localized version of credit card help popup</td>
    </tr>
    <tr>
        <td>data-target</td>
        <td>jQuery selector for the HTML container to be localized</td>
    </tr>
</table>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("localize", function (app, bbi, $) {
    "use strict";
    var &#95;$wrapper;
    var &#95;methods = {
        pregame: function (options) {
            &#95;settings = $.extend(true, {}, &#95;defaults, options);
            &#95;$wrapper = $(&#95;settings.target);
            &#95;methods.showLoaders();
        },
        showForm: function () {
            &#95;$wrapper.find(".loader").remove();
            &#95;$wrapper.find(".BBFormTable").addClass('on');
        },
        translate: function () {
            &#95;$wrapper.BBNCLocalizeParts(&#95;settings);
        },
        showLoaders: function () {
            &#95;$wrapper.find(".BBFormTable").before("<div class=\"loader\">Chargement...</div>");
        }
    };
    var &#95;settings, &#95;defaults = {
        complete: &#95;methods.showForm,
        target: '#wrapContentOuter'
    };
    return {
        init: function (options, element) {
            &#95;methods.pregame(options);
            if (bbi.isPageEditor()) {
                &#95;methods.showForm();
                return;
            }
            bbi.require(["bbnc-localize-parts"], function () {
                bbi.attach(function () {
                    &#95;methods.translate();
                });
            });
        },
        translate: &#95;methods.translate
    };
});</code></pre>
