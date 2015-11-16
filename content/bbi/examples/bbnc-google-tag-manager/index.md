---
layout: layout-sidebar
name: BBNC Google Tag Manager
---

# Google Tag Manager in NetCommunity

## Getting Started

<p><strong>The following steps assume the client has NOT created the appropriate "Container" to be used by Tag Manager.</strong><br>The next few steps will outline how to configure a basic container to be used on NetCommunity <strong>Donation Forms</strong> and <strong>Event Registration Forms (Classic)</strong>.</p>
<ol>
	<li>You will require access to the client's Google Analytics <strong>Tag Manager Dashboard</strong>.</li>
	<li>The client should also provide you their Google Analytics <strong>Tracking ID</strong>.</li>
	<li>Once logged in to the Tag Manager Dashboard, click on the account you wish to track.</li>
	<li>Create a new container by clicking the "New" button at the top of the list. Fill out the fields.</li>
	<li>Next, the container will ask you to provide tags. Each container can have multiple tags, but for the purpose of this customization, we will be focusing on Ecommerce Tracking.</li>
	<li>Click "Container Draft" in the sidebar, then click "New" to create a new tag.</li>
	<li>For Tag Type, select "Google Analytics" -> "Universal Analytics".</li>
	<li>For Track Type, select "Transaction"</li>
	<li>Toward the top of the form, you should see a section named "Firing Rules". Click the "Add" button.</li>
	<li>Name this new rule "Donation Confirmation", and for the Conditions, select "{{event}}", "equals", and enter "donationConfirmation". Click "Save" to save the Rule.</li>
	<li>Click "Save" at the bottom of the form to save the Tag.</li>
	<li>At this point, the tag has been configured, and your form is ready to accept triggers. Proceed to the "HTML" section, below.</li>
</ol>
<p><a href="https://developers.google.com/tag-manager/devguide#datalayer" target="_blank">Read more about using Google Tag Manager&nbsp;&rarr;</a></p>
<h4>Tag Manager Dashboard Screenshots</h4>
<ul>
	<li><a href="img/google-tag-manager-1.jpg" target="_blank">Screenshot #1</a></li>
	<li><a href="img/google-tag-manager-2.jpg" target="_blank">Screenshot #2</a></li>
	<li><a href="img/google-tag-manager-3.jpg" target="_blank">Screenshot #3</a></li>
	<li><a href="img/google-tag-manager-4.jpg" target="_blank">Screenshot #4</a></li>
</ul>

<h2>HTML</h2>

<ol>
    <li>In NetCommunity, create an <strong>Unformatted Text</strong> part at the top of the page, naming it "Customization: Google Tag Manager".</li>
    <li>From the Google Tag Manager dashboard, copy/paste the embed code provided by Google Tag Manager into the new Unformatted Text part (to get the embed code, login to Tag Manager and click on the desired account's container; the embed code should be located under the Admin menu, named "Install GTM").</li>
    <li>
    	Just above the donation form (or event registration form) that you wish to track, add a new Unformatted Text part named "Customization: Tag Manager - Donation Confirmation Tracking". Paste the following code and save the part:<br>
    	<pre class="line-numbers"><code class="language-markup">&lt;div data-bbi-action="TagManager_TrackDonation" data-bbi-app="[YOUR_APP_NAME]">&lt;/div&gt;</code></pre>
    </li>
</ol>

## JavaScript

### Add the following action to your BBI Application JavaScript file:

<pre class="line-numbers"><code class="language-javascript">app.action("TagManager_TrackDonation", function (app, bbi, $) {
	var _defaults = {
		dataLayer: 'dataLayer',
		event: 'donationConfirmation',
		category: 'Online Donation'
	};
	var _settings = {};
	var _methods = {
		confirmation: function (data) {
			if (data.TransTotal) {
				var request = {
					'event': _settings.event,
				    'transactionId': 'BBNC_' + data.TransID,
				    'transactionAffiliation': app.alias,
				    'transactionTotal': data.TransTotal,
				    'transactionProducts': _methods.getProducts(data)
				};
				window[_settings.dataLayer].push(request);
			}
		},
		getProduct: function (item) {
			return {
				'sku': item.SKU,
				'name': item.Name,
				'price': item.Price,
				'quantity': item.Quantity,
				'category': _settings.category
			};
		},
		getProducts: function (data) {
			var products = [];
			for (var i = 0, len = data.Items.length; i &lt; len; i++) {
				products.push(_methods.getProduct(data.Items[i]));
			}
			return products;
		}
	};
	return {
		init: function (options, element) {
			_settings = $.extend(true, {}, _defaults, options);
			if (!bbi.isPageEditor() && BLACKBAUD.netcommunity.api.DonationConfirmation) {
				BLACKBAUD.netcommunity.api.DonationConfirmation.add(_methods.confirmation);
			}
		}
	};
});</code></pre>
