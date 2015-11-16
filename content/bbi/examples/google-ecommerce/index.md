---
layout: layout-sidebar
name: Google Conversion Tracking
---

# Google Conversion Tracking

## Dependencies


## HTML


## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.scope(function (app, bbi, $) {
	// Only add Google Analytics if it doesn't exist already.
	var googleAnalyticsTrackingId = 'UA-5555555-7';
	var methods = {
		ga: function () {
			if (typeof window.ga === "undefined") {
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
			}
			window.ga('create', googleAnalyticsTrackingId, 'auto');
			window.ga('send', 'pageview');
		}
	};
	return {
		ga: methods.ga
	};
});

app.action("global", function (app, bbi, $) {
	if (bbi.isPageEditor() === false) {
		// Install basic tracking on all pages.
		app.scope.ga();
	}
});

// Log a conversion if a certain selector exists on the page.
app.action("ga-commerce", function (app, bbi, $) {
	var settings;
	var defaults = {
		appealId: null,
		confirmationScreenSelector: '#form-confirmation',
		confirmationScreenAmountSelector: '#confirmation_amount'
	};
	var methods = {
		confirmationScreen: function () {

			var transaction;
			var revenue;

			// Make sure we're on the confirmation page.
			if ($(settings.confirmationScreenSelector).length > 0) {

				// Ecommerce
				window.ga('require', 'ecommerce');

				revenue = $(settings.confirmationScreenAmountSelector).text();
				if (typeof revenue === "undefined") {
					revenue = "0";
				} else {
					revenue = revenue.replace("$", "");
				}

				transaction = {
					'id': new Date().getTime() + "",
					'affiliation': settings.appealId + "-" + _donationType,
					'revenue': revenue + ""
				};

				window.ga('ecommerce:addTransaction', transaction);
				window.ga('ecommerce:send');
			}
		}
	};
    return {
		init: function (options, element) {
			if (bbi.isPageEditor() === false) {
				settings = $.extend(true, {}, defaults, options);
				bbi.attach(function () {
					methods.confirmationScreen();
				});
			}
		}
	};
});</code></pre>
