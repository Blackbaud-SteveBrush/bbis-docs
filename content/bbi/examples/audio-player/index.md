---
layout: layout-sidebar
name: Audio Player
---

# HTML5 Audio Player

## HTML

<pre class="line-numbers"><code class="language-markup">&lt;h2>Track 01&lt;/h2>
&lt;div data-title="Track 01" data-mp3="document.doc?id=555" data-bbi-app="MyApp" data-bbi-action="audioPlayer">&lt;/div></code></pre>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("audioPlayer", function (app, bbi, $) {
	var settings;
	var defaults = {
		title: "Track 01",
		swfPath: "//domain.org/file/jplayer/", // Change this to the client&#39;s Image Library URL
		mp3: null
	};
	var container;
	var _counter = 1;
	var methods = {
		build: function () {

			// Get a unique ID number for this player
			var id = methods.getCounter();


			// Generate the HTML to be used by the player
			var ui = [
				"&lt;div class=\"jp-jplayer\" id=\"jplayer_" + id + "\">&lt;/div>",
				"&lt;div class=\"jp-audio\" id=\"jplayer_container_" + id + "\">",
					"&lt;div class=\"jp-type-single\">",
						"&lt;div class=\"jp-gui jp-interface\">",
							"&lt;ul class=\"jp-controls\">",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-play\" tabindex=\"1\">play&lt;/a>&lt;/li>",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-pause\" tabindex=\"1\">pause&lt;/a>&lt;/li>",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-stop\" tabindex=\"1\">stop&lt;/a>&lt;/li>",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-mute\" tabindex=\"1\" title=\"mute\">mute&lt;/a>&lt;/li>",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-unmute\" tabindex=\"1\" title=\"unmute\">unmute&lt;/a>&lt;/li>",
								"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-volume-max\" tabindex=\"1\" title=\"max volume\">max volume&lt;/a>&lt;/li>",
							"&lt;/ul>",
							"&lt;div class=\"jp-progress\">",
								"&lt;div class=\"jp-seek-bar\">",
									"&lt;div class=\"jp-play-bar\">&lt;/div>",
								"&lt;/div>",
							"&lt;/div>",
							"&lt;div class=\"jp-volume-bar\">",
								"&lt;div class=\"jp-volume-bar-value\">&lt;/div>",
							"&lt;/div>",
							"&lt;div class=\"jp-time-holder\">",
								"&lt;div class=\"jp-current-time\">&lt;/div>",
								"&lt;div class=\"jp-duration\">&lt;/div>",
								"&lt;ul class=\"jp-toggles\">",
									"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-repeat\" tabindex=\"1\" title=\"repeat\">repeat&lt;/a>&lt;/li>",
									"&lt;li>&lt;a href=\"javascript:;\" class=\"jp-repeat-off\" tabindex=\"1\" title=\"repeat off\">repeat off&lt;/a>&lt;/li>",
								"&lt;/ul>",
							"&lt;/div>",
						"&lt;/div>",
						"&lt;div class=\"jp-details\">",
							"&lt;ul>",
								"&lt;li>&lt;span class=\"jp-title\">&lt;/span>&lt;/li>",
							"&lt;/ul>",
						"&lt;/div>",
						"&lt;div class=\"jp-no-solution\">",
							"&lt;span>Update Required&lt;/span>",
							"To play the media you will need to either update your browser to a recent version or update your &lt;a href=\"http://get.adobe.com/flashplayer/\" target=\"_blank\">Flash plugin&lt;/a>.",
						"&lt;/div>",
					"&lt;/div>",
			"&lt;/div>"];

			// Append the player's HTML to the action's element
			container.html(ui.join(""));

			// Initialize the jPlayer, with options
			$("#jplayer_" + id).jPlayer({
				ready: function () {
					$(this).jPlayer("setMedia", {
						title: settings.title,
						mp3: settings.mp3
					}).jPlayer("play");
				},
				swfPath: settings.swfPath,
				cssSelectorAncestor: "#jplayer_container_" + id,
				solution: "html, flash",
				supplied: "mp3",
				wmode: "window",
				preload: "auto",
				smoothPlayBar: true,
				keyEnabled: true,
				remainingDuration: true,
				toggleDuration: true,
				warningAlerts: true,
				errorAlerts: true
			});
		},
		getCounter: function () {
			return _counter++;
		}
	};
	return {
		init: function (options, element) {
			container = $(element);
			settings = $.extend(true, {}, defaults, options);
			if (bbi.isPageEditor() === false) {
				bbi.require(["jplayer"], function ($) {
					methods.build();
				});
			}
		}
	};
});</code></pre>
