---
layout: layout-sidebar
name: Parse RSS
---

# Parse RSS

## Dependencies

<p class="alert alert-info">
    This asset is designed to work with BBNC RSS feeds - either blog or event, but should (and has) worked with many external RSS feeds.
</p>

<a class="btn btn-sm btn-primary" href="/bbi/reference/assets/parse-rss">View a list of all available options&nbsp;→</a>

### What it looks like:

<img src="/assets/img/parse-rss-advanced.png" alt="Advanced Parse RSS Example" class="img-responsive">

## JavaScript

<ul class="nav nav-tabs">
    <li class="active"><a href="#common-parse-rss-simple" data-toggle="tab">Simple</a></li>
    <li><a href="#common-parse-rss-advanced" data-toggle="tab">Advanced</a></li>
</ul>
<div class="tab-content">
    <div class="tab-pane active" id="common-parse-rss-simple">
        <p><strong>Data attributes:</strong></p>
        <pre class="line-numbers"><code class="language-markup">&lt;div 
    data-bbi-app="MyApp" 
    data-bbi-action="initEventsFeed" 
    data-feed="&#47;&#47;domain.org/feed.rss?id=1">
    Loading Upcoming Events...
&lt;/div></code></pre>
        <p><strong>Add the following action to your BBI Application JavaScript file:</strong></p>
        <pre><code class="language-javascript">app.action('initEventsFeed', function(app, bbi, $) {
    return {
        init: function(options, element) {
            if (bbi.isPageEditor() === false) {
                bbi.require(&#91;"parse-rss"], function ($) {
                    $(element).parseRSS({
                        ajax: {
                            url: options.feed
                        }
                    });
                });
            }
        }
    };
});</code></pre>
</div>
    <div class="tab-pane" id="common-parse-rss-advanced">
        <p>This is one of the most complex uses of this plugin.  A few of the advanced features it's taking advantage of:</p>
        <ul>
            <li>Reading non-BBNC RSS feed</li>
            <li>Custom error alert</li>
            <li>Parsing custom (namespaced) XML nodes</li>
            <li>Using the beforeUpdate callback to group events by date.</li>
        </ul>
        <p><strong>Data attributes:</strong></p>
        <pre><code class="language-markup">&lt;div 
    bbi-app="MyApp" 
    data-bbi-action="initEventsFeed" 
    data-feed="&#47;&#47;domain.org/Calendar/RSSFeeds.aspx?data=555" 
    data-limit="4" 
    data-limit-inner="3">
    Loading Upcoming Events...
&lt;/div></code></pre>
        <p>
            <strong>Download the following file and add the action to your BBI Application JavaScript file:</strong><br>
            <a href="/assets/packages/bbi-parse-rss-demo.js">bbi-parse-rss-demo.js <i class="fa fa-download"></i></a>
        </p>
    </div>
</div>
