---
layout: layout-sidebar
name: YouTube TV
---

# YouTube TV

## Dependencies

<p>The original files and documentation for this third-party plugin can be found on <a href="https://github.com/jakiestfu/Youtube-TV" target="_blank">jakiestfu's GitHub page</a>.</p>

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;div data-bbi-app="MyApp" data-bbi-action="youtubeTV">Loading videos...&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("youtubeTV", function (app, bbi, $) {
    var settings;
    var defaults = {
        user: "timelessmv",
        apiKey: '[YOUR GOOGLE API KEY]',
        playlist: "PLA084041D67D83810",
        fullscreen: false,
        accent: "#0092D2",
        controls: true,
        annotations: false,
        autoplay: false,
        chainVideos: true,
        browsePlaylists: false
    };
    return {
        init: function (options, element) {
            settings = $.extend(true, {}, defaults, options);
            if (bbi.isPageEditor() === false) {
                bbi.require(["youtube-tv"], function ($) {
                    $(element).ytv(settings);
                });
            }
        }
    };
});</code></pre>
